import React, { Fragment } from "react";
import InputText from "../components/inputs/InputText";
import Button from "../components/Button";
import InputSelect from "../components/inputs/InputSelect";

const CreateWord = () => {
  return (
    <Fragment>
      <h2>Create Word</h2>
      <form action="" className="mt-10 grid gap-x-6 gap-y-8 grid-cols-6">
        <div className="col-span-3">
          <label htmlFor="" className="text-body-5 text-black-10">
            English Word *
          </label>
          <div className="mt-2">
            <InputText placeholder="English word"></InputText>
          </div>
        </div>
        <div className="col-span-3">
          <label htmlFor="" className="text-body-5 text-black-10">
            English Cambridge *
          </label>
          <div className="mt-2">
            <InputText placeholder="English word (Cambridge)"></InputText>
          </div>
        </div>
        <div className="col-span-6">
          <div className="flex items-center mb-2">
            <div className="text-body-5">Classification and Meaning</div>
            <Button primary icon className="w-10 h-10 ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </Button>
          </div>
          <div className="bg-white-20 grid grid-cols-8 gap-x-6 py-4 rounded-2xl">
            <span className="text-body-1 text-black-20 col-span-2 text-center">
              Type
            </span>
            <span className="text-body-1 text-black-20 col-span-4 pl-4">
              Meaning Cambridge
            </span>
            <span className="text-body-1 text-black-20 col-span-2 pl-4">
              Meaning Vietnamese
            </span>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-8 gap-x-2 mt-2 rounded-2xl">
              <div className="col-span-2 flex gap-1">
                <Button icon className="bg-secondary2 h-full aspect-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </Button>
                <InputSelect className={"flex-1"}></InputSelect>
              </div>
              <div className="col-span-4">
                <InputText placeholder="English word"></InputText>
              </div>
              <div className="col-span-2">
                <InputText placeholder="Meaning word"></InputText>
              </div>
            </div>
            <div className="grid grid-cols-8 gap-x-2 mt-2 rounded-2xl">
              <div className="col-span-2 flex gap-1">
                <Button icon className="bg-secondary2 h-full aspect-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </Button>
                <InputSelect className={"flex-1"}></InputSelect>
              </div>
              <div className="col-span-4">
                <InputText placeholder="English word"></InputText>
              </div>
              <div className="col-span-2">
                <InputText placeholder="Meaning word"></InputText>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default CreateWord;
