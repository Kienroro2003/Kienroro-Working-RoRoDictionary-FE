import React, { Fragment, useState } from "react";
import useClickOutSide from "../hooks/useClickOutSide";
import Pagination from "../components/Pagination";

const TestUIStyles = () => {
  return (
    <Fragment>
      <div className="flex flex-col gap-2 p-7">
        <h1 className="bg-black-90 text-primary-light-10 text-heading-1">
          Heading 1
        </h1>
        <input type="text" className="input-text" placeholder="Hello" />
        <Radio></Radio>
        <Checkbox></Checkbox>
        <InputSelect></InputSelect>
        <Pagination totalPages={20}></Pagination>
      </div>
    </Fragment>
  );
};

const Radio = () => {
  return (
    <div>
      <input type="radio" name="" id="radio" />
      <label htmlFor="radio" className="input-radio"></label>
    </div>
  );
};

const Checkbox = () => {
  return (
    <div className="">
      <input type="checkbox" name="" id="checkbox" />
      <label
        className="block w-8 h-8 border border-black-30 rounded-lg  relative checkbox-inner cursor-pointer transition-all"
        htmlFor="checkbox"
      >
        <div className="absolute w-5 h-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 border-b-2 border-l-2 border-b-white border-l-white rounded-sm -rotate-45 opacity-0 invisible transition-all"></div>
      </label>
    </div>
  );
};

const InputSelect = () => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const [label, setLabel] = useState("Dropdown");

  const handleValueClick = (e) => {
    setLabel("Your select is: " + e.target.dataset.value);
    setShow(false);
  };
  return (
    <div className="relative" ref={nodeRef}>
      <div
        className="py-6 px-8 border border-white-30 rounded-2xl text-body-5 text-black-30 flex items-center justify-between cur"
        onClick={() => setShow(!show)}
      >
        <span>{label}</span>
        <img src="assets/icons/arrow-down.svg" alt="" />
      </div>
      {show && (
        <div
          className="absolute rounded-2xl border border-white-30
 top-full w-full left-0  flex flex-col translate-y-4 overflow-hidden bg-white z-10"
        >
          {Array(5)
            .fill(0)
            .map((item, index) => {
              return (
                <div
                  className=" py-6 px-8 text-body-5 text-black-30 hover:bg-primary-light-90"
                  onClick={handleValueClick}
                  data-value={"Dropdown 1"}
                >
                  <span>Dropdown 1</span>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default TestUIStyles;
