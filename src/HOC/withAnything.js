import React from "react";

const withAnything = (Component) => {
  const componentWithAnything = (props) => {
    return (
      <>
        <Component {...props} />
      </>
    );
  };

  return componentWithAnything;
};

export default withAnything;
