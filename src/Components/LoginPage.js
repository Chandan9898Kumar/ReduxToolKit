import React, { useEffect, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import ButtonsComponent from "./MyButton";
import "../App.css";
import {
  apiDataFun,
  setAppName,
  setClientIp,
  setSelectorOption,
  checkRequest,
  setRequestValue,
  startSession,
} from "../ReduxSlice/CreateSlice";
const LoginPage = () => {
  const { landingPage, ProgressPages, downloadPage, ...props } = useSelector(
    (state) => state.ValidationData
  );
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      await fetch("https://dummyjson.com/products")
        .then((Response) => Response.json())
        .then((result) => dispatch(apiDataFun(result)));
    }
    fetchData();
  }, []);

  useEffect(() => {
    let element = document.querySelector("#request");
    if (element) {
      element.style.left = `${
        props.requestValue == 1
          ? Number(12)
          : Number((props.requestValue * 2) / 1.5)
      }%`;
    }
  }, [props.requestValue]);

  const callPostApi = () => {
    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "BMW Pencil",
      }),
    })
      .then((res) => res.json())
      .then((result) => dispatch(startSession(result)));
  };

  return (
    <>
      <div className="LoginHead">
        <div className="LoginTitle">This is a login Page</div>

        <div className="formHead">
          <div className="appName">
            <span
              style={{
                fontFamily: "fantasy",
                fontSize: "20px",
                color: "wheat",
              }}
            >
              {" "}
              App Name{"  "}:
            </span>
            {"  "}
            <input
              type="text"
              value={props.appName}
              onChange={(event) => dispatch(setAppName(event.target.value))}
            />
          </div>

          <div className="appName">
            <span
              style={{
                fontFamily: "fantasy",
                fontSize: "20px",
                color: "wheat",
              }}
            >
              {" "}
              Client Ip{"  "}:{"  "}
            </span>
            {"  "}
            <input
              type="text"
              value={props.clientIp}
              onChange={(event) => dispatch(setClientIp(event.target.value))}
            />
          </div>

          <div className="selector">
            <span
              style={{
                fontFamily: "fantasy",
                fontSize: "20px",
                color: "wheat",
              }}
            >
              {" "}
              Select OPtions{"  "}:{"  "}
            </span>
            <select
              className="selectOption"
              value={props.selectedOption}
              onChange={(event) =>
                dispatch(setSelectorOption(event.target.value))
              }
            >
              <option value="mango">Mango</option>
              <option value="tango">tango</option>
              <option value="dango">dango</option>
              <option value="qango">qango</option>
            </select>
          </div>

          <div className="CheckBox">
            <input
              type="checkbox"
              checked={props.checkRequest}
              onChange={(event) => dispatch(checkRequest(event.target.checked))}
            />
            <br />
            <div style={{ position: "relative" }}>
              <div id="request" style={{ position: "absolute", zIndex: "1" }}>
                {props.requestValue}
              </div>
              <br />
              <div style={{ display: "block" }}>
                <input
                  style={{ width: "300px", position: "relative" }}
                  disabled={!props.checkRequest}
                  type="range"
                  min={1}
                  max={64}
                  value={props.requestValue}
                  onChange={(event) =>
                    dispatch(setRequestValue(event.target.value))
                  }
                />
              </div>
            </div>
          </div>
          <hr />
          <ButtonsComponent onClick={callPostApi} label={"login"} />
        </div>
      </div>
    </>
  );
};
export default memo(LoginPage);
