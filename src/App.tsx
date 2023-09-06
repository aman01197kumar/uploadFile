import React, { useState } from "react";
import * as XLSX from "xlsx";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [excelFile, setExcelFile] = useState<File | null>(null);
  const [excelData, setExcelData] = useState<any[] | undefined>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedFileName, setSelectedFileName] = useState<string | null>();
  const [showSucessMessage, setShowSuccessMessage] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];

    setSelectedFileName(selectedFile?.name);

    if (selectedFile) {
      if (
        selectedFile.type.includes("text/csv") ||
        selectedFile.type.includes("xlsx")
      ) {
        let reader = new FileReader();

        reader.onload = (e: any) => {
          setExcelFile(e.target.result);
        };

        reader.readAsArrayBuffer(selectedFile);
      } else {
        setExcelFile(null);
      }
    }
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (excelFile) {
      const workBook = XLSX.read(excelFile, { type: "buffer" });
      const workSheetName = workBook.SheetNames[0];
      const workSheet = workBook.Sheets[workSheetName];
      const data = XLSX.utils.sheet_to_json(workSheet);

      setShowSuccessMessage(true);

      setExcelData(data.slice(0, 10));
    }
  };
  console.log(excelData, "ds");
  return (
    <div className="App">
      <div>
        <input
          type="file"
          onChange={handleChange}
          required
          accept="text/csv,xlsx"
        />
        <button onClick={onSubmitHandler}>Upload</button>
        {showSucessMessage ? (
          <div
            className="alert alert-success text-center mt-1 d-flex justify-content-center"
            role="alert"
          >
            File Uploaded Successfully!!
          </div>
        ) : null}
        {selectedFileName && excelData ? (
          <div className="d-flex justify-content-evenly">
            <p>{selectedFileName}</p>
            <button
              onClick={() => {
                setShowModal(true);
                setShowSuccessMessage(false);
              }}
            >
              Preview Data
            </button>
          </div>
        ) : (
          <div>Nothing to preview</div>
        )}
        <div>
          {showModal && excelData ? (
            <Modal excelData={excelData} setShowModal={setShowModal} />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
