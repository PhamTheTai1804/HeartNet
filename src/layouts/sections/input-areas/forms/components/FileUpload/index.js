import React, { useRef, useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

// Material Kit 2 components
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

function FileUpload() {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <MKButton
        variant="contained"
        color="info"
        startIcon={<CloudUploadIcon />}
        onClick={handleButtonClick}
      >
        Upload File
      </MKButton>
      {selectedFile && (
        <MKTypography variant="body2" style={{ marginTop: "10px" }}>
          Selected File: {selectedFile.name}
        </MKTypography>
      )}
    </div>
  );
}

export default FileUpload;
