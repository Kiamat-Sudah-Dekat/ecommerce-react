import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { MyContext } from "../../../App.jsx";

const Navigation = (props) => {
  const [isopenSidebarVal, setisopenSidebarVal] = useState(false);
  const [isOpenNav, setIsOpenNav] = useState(false);

  const context = useContext(MyContext);

  useEffect(() => {
    setIsOpenNav(props.isOpenNav);
  }, [props.isOpenNav]);

  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navPart1 ">
            <div className="catWrapper">
              <Button
                className="allCatTab align-items-center res-hide"
                onClick={() => setisopenSidebarVal(!isopenSidebarVal)}
              >
                <span className="icon1 mr-2">
                  <IoIosMenu />
                </span>
                <span className="text">ALL CATEGORIES</span>
                <span className="icon2  ml-2">
                  <FaAngleDown />
                </span>
              </Button>

              <div
                className={`sidebarNav ${
                  isopenSidebarVal === true ? "open" : ""
                }`}
              >
                <ul>
                  {props.navData
                    .filter((item, idx) => idx < 6)
                    .map((item, index) => {
                      return (
                        <li key={index}>
                          <Link to={`/products/category/${item?._id}`}>
                            <Button>
                              {item?.name} <FaAngleRight className="ml-auto" />
                            </Button>
                          </Link>
                          {item?.children?.length !== 0 && (
                            <div className="submenu">
                              {item?.children?.map((subCat, key) => {
                                return (
                                  <Link
                                    to={`/products/subCat/${subCat?._id}`}
                                    key={key}
                                  >
                                    <Button>{subCat?.name}</Button>
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>

          <div
            className={`col-sm-10 navPart2 d-flex align-items-center res-nav-wrapper ${
              isOpenNav === true ? "open" : "close"
            }`}
          >
            <div className="res-nav-overlay" onClick={props.closeNav}></div>
            <ul className="list list-inline ml-auto res-nav">
              <li className="list-inline-item" onClick={props.closeNav}>
                <Link to="/">
                  <Button>Home</Button>
                </Link>
              </li>
              {props.navData
                .filter((item, idx) => idx < 6)
                .map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="list-inline-item"
                      onClick={props.closeNav}
                    >
                      <Link to={`/products/category/${item?._id}`}>
                        <Button>{item?.name}</Button>
                      </Link>
                      {item?.children?.length !== 0 && (
                        <div className="submenu">
                          {item?.children?.map((subCat, key) => {
                            return (
                              <Link
                                to={`/products/subCat/${subCat?._id}`}
                                key={key}
                              >
                                <Button>{subCat?.name}</Button>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
