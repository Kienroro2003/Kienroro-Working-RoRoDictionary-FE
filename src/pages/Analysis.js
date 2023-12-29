import React, { Fragment } from "react";
import Button from "../components/Button";

const Analysis = () => {
  return (
    <Fragment>
      <h2 className="text-black">Paragraph Analysis</h2>
      <form action="" className="mt-8">
        <label
          htmlFor="analysis"
          className=" block text-body-5 text-black-10 mb-4"
        >
          Description
        </label>
        <textarea
          name="analysis"
          id="analysis"
          className="block resize-none w-full h-[300px] rounded-2xl border border-black-80 bg-transparent px-4 py-2 mb-10"
        ></textarea>
        <div className="flex">
          <Button
            type="button"
            secondary
            onClick={() => console.log("Hello")}
            className="ml-auto"
          >
            Analysis
          </Button>
        </div>
      </form>
    </Fragment>
  );
};

export default Analysis;
