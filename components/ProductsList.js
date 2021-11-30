import React, { useState } from "react";
import { Row, Col, Dropdown } from "react-bootstrap";
import Image from "next/image";

// components imports
import PaginatedList from "./PaginatedList";

// image imports
import sortingIcon from "../assets/sorting.svg";
import filtersIcon from "../assets/filters.svg";

// helpers and variables imports
import { ALPHABETICALLY, PRICE } from "../helpers/variables";
import { sortProducts } from "../helpers/sort";

function ProductsList({ products }) {
  const [sorting, setSorting] = useState({
    type: ALPHABETICALLY,
    isAscending: true,
  });

  const toggleSortingType = () => {
    if (sorting.type === ALPHABETICALLY) {
      setSorting({ ...sorting, type: PRICE });
    } else {
      setSorting({ ...sorting, type: ALPHABETICALLY });
    }
  };

  const toggleSortingOrder = () => {
    setSorting({ ...sorting, isAscending: !sorting.isAscending });
  };
  console.log(sorting);
  console.log(sortProducts(products, sorting));
  return (
    <div className="products-list">
      <Row className="pl-header mb-5">
        <Col>
          <h1>
            Photography / <span>Premium Photos</span>
          </h1>
        </Col>
        <Col className="products-sorting d-flex justify-content-end">
          <p>
            <span onClick={toggleSortingOrder}>
              <Image src={sortingIcon} alt="" />
            </span>
            Sort By
          </p>
          <Dropdown className="d-inline mx-2 sorting-dropdown">
            <Dropdown.Toggle id="dropdown-autoclose-true">
              {sorting.type}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={toggleSortingType}>
                {sorting.type === PRICE ? ALPHABETICALLY : PRICE}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        <Col lg={3} xs={12}>
          filters
        </Col>
        <Col lg={9} xs={12}>
          <PaginatedList products={sortProducts(products, sorting)} />
        </Col>
      </Row>
    </div>
  );
}

export default ProductsList;
