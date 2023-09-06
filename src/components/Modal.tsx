import React from "react";

interface ModalProps {
  excelData: Array<Record<string, any>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal({ excelData, setShowModal }: ModalProps) {
  return (
    <div className="Modal_container">
      <button onClick={()=>setShowModal(false)}>X</button>
      <table className="modal__wrapper">
        <thead>
          <tr>
            {Object.keys(excelData[0] || {}).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {excelData?.map((individualExcelData: any, index: number) => (
            <tr key={index}>
              {Object.keys(individualExcelData).map((key) => (
                <td key={key}>{individualExcelData[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Modal;
