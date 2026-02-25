// Notification.jsx
import "./popup.css";

export default function Notification({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="popup">
      <div className="popup-box">
        <div className="popup-message">{message}</div>
        <button className="popup-close" onClick={onClose}>×</button>
      </div>
    </div>
  );
}