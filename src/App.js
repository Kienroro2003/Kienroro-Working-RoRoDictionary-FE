import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <div className="flex flex-col gap-2 p-7">
        <h1 className="bg-black-90 text-primary-light-10 text-heading-1">
          Heading 1
        </h1>
        <input type="text" className="" placeholder="Hello" />
      </div>
    </Fragment>
  );
}

export default App;
