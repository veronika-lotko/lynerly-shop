import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <style jsx>{`
        .loading-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          backdrop-filter: blur(5px);
        }
        .spinner {
          width: 50px;
          height: 50px;
          border: 5px solid var(--foreground);
          border-top: 5px solid var(--green);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
