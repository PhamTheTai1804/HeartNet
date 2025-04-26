use aiken/collection/list
use aiken/collection/pairs
use aiken/crypto.{VerificationKeyHash}
use cardano/script_context.{ScriptContext}
use cardano/transaction.{OutputReference, Transaction}
use vodka_validity_range.{valid_after, valid_before}

pub type Datum {
  fund_balance: Int,
  // Số dư hiện tại của quỹ
  bids: Pairs<VerificationKeyHash, Int>,
  // Map lưu số phiếu bầu (địa chỉ nhà thầu -> tổng trọng số phiếu)
  lock_until: Int,
  // Thời hạn đấu thầu (POSIX time)
  owner: VerificationKeyHash,
}

// Địa chỉ người tạo quỹ

pub type Redeemer {
  Donate { amount: Int, bidder: VerificationKeyHash }
  // Gửi tiền từ thiện và bỏ phiếu
  Withdraw
}

// Rút tiền bởi nhà thầu thắng

// Hàm tìm nhà thầu có số phiếu cao nhất
fn get_winning_bidder(
  bids: Pairs<VerificationKeyHash, Int>,
) -> Option<VerificationKeyHash> {
  let result =
    pairs.foldl(
      bids,
      [Pair(#"00000000000000000000000000000000000000000000000000000000", 0)],
      fn(k, v, acc_pair) {
        let temp: Pairs<VerificationKeyHash, Int> = acc_pair
        when list.head(pairs.values(temp)) is {
          Some(acc_v) ->
            if acc_v < v {
              [Pair(k, v)]
            } else {
              temp
            }
          None -> [Pair(k, v)]
        }
      },
    )
  // If there's no existing value, take the current one
  list.head(pairs.keys(result))
}

validator charity_fund {
  spend(
    datum: Option<Datum>,
    redeemer: Redeemer,
    _own_ref: OutputReference,
    self: ScriptContext,
  ) {
    let tx = self.transaction

    // Lấy datum từ Option
    expect Some(Datum { fund_balance, bids, lock_until, owner }) = datum

    when redeemer is {
      // Xử lý hành động gửi tiền từ thiện
      Donate { amount, bidder } -> {
        // Kiểm tra thời hạn
        let must_before = valid_before(tx.validity_range, lock_until)

        //expect is_valid == False then "It is not valid anymore"
        // Kiểm tra số tiền gửi hợp lệ
        let must_positive = amount > 0

        expect Some(input) = list.head(tx.inputs)

        // Kiểm tra output đến đúng script address của input
        let output =
          list.any(tx.outputs, fn(out) { out.address == input.output.address })

        // Đảm bảo giao dịch được ký bởi owner hoặc bidder
        list.has(tx.extra_signatories, owner) && output && must_before && must_positive
      }

      // Xử lý hành động rút tiền
      Withdraw -> {
        // Kiểm tra đã qua thời hạn
        let must_after = valid_after(tx.validity_range, lock_until)

        // Tìm nhà thầu thắng
        expect Some(winning_bidder) = get_winning_bidder(bids)

        // Kiểm tra giao dịch được ký bởi nhà thầu thắng
        expect list.has(tx.extra_signatories, winning_bidder)

        expect Some(input) = list.head(tx.inputs)

        // Đảm bảo không có output nào gửi lại script (quỹ đã rút hết)
        let output =
          list.all(tx.outputs, fn(out) { out.address != input.output.address })

        list.has(tx.extra_signatories, winning_bidder) && must_after && output
      }
    }
  }

  else(_) {
    fail
  }
}
