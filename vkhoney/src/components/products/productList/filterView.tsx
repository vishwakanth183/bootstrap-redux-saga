import React from "react";
import { CiFilter } from "react-icons/ci";
9;
import { TiTick } from "react-icons/ti";
import { GiPlainCircle } from "react-icons/gi";
import { GrRadial } from "react-icons/gr";
import { GrRadialSelected } from "react-icons/gr";
import { restuarantFilter } from "./productData";

const FilterView = () => {
  return (
    <div className="vstack bg-opacity-25 card">
      {/* Filter view */}
      <div className="vstack card-body">
        {/* Heading */}
        <div className="d-flex flex-row card-title">
          <CiFilter size={30} color="black" />
          <h4 className="fw-bolder text-dark">Filter</h4>
        </div>

        {/* Divider */}
        <div
          style={{ height: "1px" }}
          className="bg-secondary bg-opacity-25"
        ></div>

        {restuarantFilter.map((filter, index) => {
          return (
            <div className="my-3" key={index}>
              <h6 className="fw-bold">{filter.displayName}</h6>
              <div
                className={`d-flex ${
                  filter.showColors ? "flex-wrap gap-2" : "flex-column"
                } `}
              >
                {filter.showColors
                  ? filter.valueArray.map((value, valueIndex) => {
                      return (
                        <div className="position-relative">
                          {value.active ? (
                            <GrRadialSelected
                              style={{ cursor: "pointer" }}
                              key={valueIndex}
                              color={value.valueName}
                              size={30}
                            />
                          ) : (
                            <GiPlainCircle
                              style={{ cursor: "pointer" }}
                              key={valueIndex}
                              color={value.valueName}
                              size={30}
                            />
                          )}
                          {/* {value.active ? (
                            <div className="position-absolute ms-1 bottom-0 z-index-200 mb-1">
                              <TiTick color="white" size={20} />
                            </div>
                          ) : null} */}
                        </div>
                      );
                    })
                  : filter.valueArray.map((value, valueIndex) => {
                      return (
                        <div className="form-check" key={valueIndex}>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            checked={value.active}
                          />
                          <label className="form-check-label">
                            {value.valueName}
                          </label>
                        </div>
                      );
                    })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterView;
