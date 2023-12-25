import React, { Fragment, useState } from "react";
import Pagination from "../components/Pagination";
import InputRadio from "../components/InputRadio";
import InputSelect from "../components/InputSelect";
import InputCheckbox from "../components/InputCheckbox";

const TestUIStyles = () => {
  return (
    <Fragment>
      <div className="flex flex-col gap-2 p-7">
        <h1 className="bg-black-90 text-primary-light-10 text-heading-1">
          Heading 1
        </h1>
        <input type="text" className="input-text" placeholder="Hello" />
        <InputRadio></InputRadio>
        <InputCheckbox></InputCheckbox>
        <InputSelect></InputSelect>
        <Pagination totalPages={20}></Pagination>
      </div>
    </Fragment>
  );
};

export default TestUIStyles;
