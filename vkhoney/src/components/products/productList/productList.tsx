import React from "react";
import FilterView from "./filterView";
import ListView from "./listView";

const ProductListComponent = () => {
  return (
    <div
      className="container-fluid bg-light"
      style={{ marginTop: 80, paddingBottom: 50 }}
    >
      <div className="row">
        <div className="col-12 col-md-3">
          <FilterView />
        </div>
        <div className="col-12 col-md-9">
          <ListView />
        </div>
      </div>
    </div>
  );
};

export default ProductListComponent;
