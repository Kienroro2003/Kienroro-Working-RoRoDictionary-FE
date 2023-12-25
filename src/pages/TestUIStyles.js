import React, { Fragment } from "react";

const TestUIStyles = () => {
  return (
    <Fragment>
      <div className="flex flex-col gap-2 p-7">
        <h1 className="bg-black-90 text-primary-light-10 text-heading-1">
          Heading 1
        </h1>
        <input type="text" className="input-text" placeholder="Hello" />
      </div>
    </Fragment>
  );
};

export default TestUIStyles;
