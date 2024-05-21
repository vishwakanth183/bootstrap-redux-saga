"use client";
import React, { FC } from "react";
import "./category.scss";
import { briyaniArray } from "./categorydata";

const Categories: FC<{
  title: string;
  categoryArray: {
    name: string;
    url: string;
  }[];
}> = ({ title, categoryArray }) => {
  return (
    <div className="categories container-fluid">
      <h3 className="fw-bolder pt-5">{title}</h3>
      <div className="d-flex flex-row gap-5 py-3 categoryContainer">
        {categoryArray.map((item, index) => {
          return (
            <div className="vstack d-flex justify-content-center align-items-center">
              <img
                key={index}
                src={item.url}
                alt={item.name}
                className="rounded-circle"
                //   className="rounded-7 shadow-lg"
                style={{ height: 200, width: 200 }}
              />
              <div className="text text-dark fw-normal mt-2">{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
