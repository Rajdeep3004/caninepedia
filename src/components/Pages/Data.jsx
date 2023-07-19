import React, { Fragment } from "react";
import Points from "./Points";

const Data = React.forwardRef((props, ref) => {
  return (
    <Fragment>
      {/* show points or wiki button if there is only one breed. */}
      <div className="z-10 text">
        {props.largeArr.length === 1 && (
          <button
            className="button mx-auto block mt-4"
            onClick={() => {
              props.setShowButton((pv) => !pv);
            }}
          >
            {!props.showButton ? "Show Points" : "Show Wiki"}
          </button>
        )}

        {/* left grid -- dog image,name and related list */}

        <div>
          <div className="data-left-grid-outer">
            <div className="data-left-grid-inner">
              {props.largeArr.length === 1 && (
                <img
                  alt={props.largeArr[0].name}
                  src={props.largeArr[0].link}
                  className="w-2/4 sm:w-full mx-auto "
                />
              )}

              <div className="text-center bg-white bg-opacity-75">
                {props.largeArr.length > 1 && (
                  <div>
                    {" "}
                    <h1 className="text underline underline-offset-2 mb-2">
                      Related:
                    </h1>
                    {props.largeArr.map((item) => (
                      <p
                        key={Math.random()}
                        className="text-xs hover:cursor-pointer mb-3"
                        onClick={() => {
                          ref.current.value = item.name;
                        }}
                      >
                        {item.name}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* right grid -- name and description / points */}
            {props.largeArr.length === 1 && (
              <div className="data-right-grid-outer">
                <h1 className="data-right-grid-inner">
                  {props.largeArr[0].name}
                </h1>
                {!props.showButton ? (
                  <div className="tracking-wide leading-6">
                    <p className="px-1">{props.desc}</p>URL:
                    <a href={props.url} className="px-1 hover:underline">
                      {props.url}
                    </a>
                  </div>
                ) : (
                  <Points fullArr={props.fullArr} />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
});
export default Data;
