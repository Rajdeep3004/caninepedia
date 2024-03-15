import React, { Fragment } from "react";
import Data from "./Data";
import backpup from "../../assets/backpup.jpg";

const Form = React.forwardRef((props, ref) => {
  return (
    <Fragment>
      {/* form */}
      <img
        src={backpup}
        className={`background ${props.blur ? "opacity-50" : ""}`}
      />
      <form onSubmit={props.fetchHandler} className={`text-center `}>
        <input
          type="search"
          placeholder="e.g. Pug"
          className="form-input"
          ref={ref}
        />
        <button
          type="submit"
          className="button  relative top-2 left-2 mt-8 lg:mt-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-teal-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
        {props.error && (
          <p className="text text-center mt-8">No such breed data found.</p>
        )}
      </form>
    </Fragment>
  );
});
export default Form;
