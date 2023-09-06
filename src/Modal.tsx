interface ModalProps {
    isOpen:boolean,
    onClose: ()=>void,
    
}

export const Modal = ({ isOpen, onClose }:ModalProps) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal">
          <button className="modal-close-button" onClick={onClose}>
            &times;
          </button>

        </div>
      </div>
    );
  };