import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Alert.css';

const Alert = ({ message, type = 'info', duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        if (onClose) onClose();
      }, 300); // Đợi animation kết thúc trước khi gọi onClose
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  // Xác định màu sắc dựa trên loại thông báo
  const getTypeClass = () => {
    switch (type) {
      case 'success':
        return 'alert-success';
      case 'error':
        return 'alert-error';
      case 'warning':
        return 'alert-warning';
      case 'info':
      default:
        return 'alert-info';
    }
  };

  // Xác định icon dựa trên loại thông báo
  const getIcon = () => {
    switch (type) {
      case 'success':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        );
      case 'error':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        );
      case 'warning':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
        );
      case 'info':
      default:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        );
    }
  };

  const alertComponent = (
    <div
      className={`alert-container ${getTypeClass()} ${isVisible ? '' : 'opacity-0 -translate-y-4'}`}
    >
      <div className="alert-icon">
        {getIcon()}
      </div>
      <div className="alert-content">
        <p>{message}</p>
      </div>
      <button
        onClick={() => {
          setIsVisible(false);
          setTimeout(() => {
            if (onClose) onClose();
          }, 300);
        }}
        className="alert-close"
        aria-label="Close"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  );

  return ReactDOM.createPortal(alertComponent, document.body);
};

// Hàm tiện ích để hiển thị alert
export const showAlert = (message, type = 'info', duration = 3000) => {
  const alertRoot = document.createElement('div');
  alertRoot.id = `alert-${Date.now()}`;
  document.body.appendChild(alertRoot);

  const handleClose = () => {
    ReactDOM.unmountComponentAtNode(alertRoot);
    document.body.removeChild(alertRoot);
  };

  ReactDOM.render(
    <Alert
      message={message}
      type={type}
      duration={duration}
      onClose={handleClose}
    />,
    alertRoot
  );
};

export default Alert;