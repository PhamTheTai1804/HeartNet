use aiken/builtin
use aiken/interval
use aiken/list
use aiken/option
use aiken/transaction
use aiken/value

validator {
  // Địa chỉ ví nhận tiền khi giải ngân
  const BENEFICIARY_ADDRESS: ByteArray = #addr_test1qpl2gamqe95g65rurl8upvxan7926lql0cux9gsyx8s75qa42d57a2m7rgh3ym4g8ygfrgh6qf5atzrlcr2499wzp86q0jy44r // Thay bằng địa chỉ ví thực tế
  // Mức ADA cần đạt (100 ADA = 100_000_000 lovelace)
  const TARGET_AMOUNT: Int = 100_000_000
  // Thời hạn hợp đồng (timestamp, ví dụ: 31/12/2025)
  const DEADLINE: Int = 1767225599000 // Thay bằng timestamp thực tế

  fn test(datum: Option<Int>, redeemer: Bool, ctx: ScriptContext) -> Bool {
    let tx = ctx.tx
    let now = tx.time_range.start

    if redeemer {
      // Chế độ giải ngân
      expect Some(total_ada) = datum
      total_ada >= TARGET_AMOUNT &&
      now <= DEADLINE &&
      // Kiểm tra tất cả output tới beneficiary
      list.all(tx.outputs, fn(out) {
        out.address == BENEFICIARY_ADDRESS &&
        out.value.get(builtin.ada) >= total_ada
      })
    } else {
      // Chế độ nhận tiền
      expect None = datum
      // Tính tổng ADA gửi vào validator
      let new_total = list.fold(tx.outputs, 0, fn(acc, out) {
        if out.address == ctx.get_current_validator_address() {
          acc + out.value.get(builtin.ada)
        } else {
          acc
        }
      })
      // Đảm bảo cập nhật datum
      list.exists(tx.outputs, fn(out) {
        out.address == ctx.get_current_validator_address() &&
        out.datum == option.Some(new_total)
      })
    }
  }
}