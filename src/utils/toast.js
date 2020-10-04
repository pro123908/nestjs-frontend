import "./toast.css";
// import CheckCircleIcon from '@material-ui/icons/CheckCircle';
// import InfoIcon from '@material-ui/icons/Info';
// import ErrorIcon from '@material-ui/icons/Error';
import React from "react";
import { toast } from "react-toastify";

const showToast = (content, type = "error", duration = 5000) => {
  const config = {
    autoClose: duration,
    bodyClassName: "toast-body",
    className: `toast-container toast-container-${type}`,
    hideProgressBar: true,
  };

  //   let icon = <ErrorIcon className="toast-icon toast-icon-error" />;
  //   if (type === "success") {
  //     icon = <CheckCircleIcon className="toast-icon toast-icon-success" />;
  //   } else if (type === "info") {
  //     icon = <InfoIcon className="toast-icon toast-icon-info" />;
  //   }

  const JSX = (
    <>
      {/* {icon} */}
      <div>
        <div className="toast-heading">{type}</div>
        <div className="toast-content">{content}</div>
      </div>
    </>
  );
  toast(JSX, config);
};

export default showToast;
