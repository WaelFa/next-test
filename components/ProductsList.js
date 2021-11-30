import React, { useState } from "react";
import { Row, Col, Dropdown, Offcanvas } from "react-bootstrap";
import Image from "next/image";

// components imports
import PaginatedList from "./PaginatedList";
import Filters from "./Filters";

// image imports
import sortingIcon from "../assets/sorting.svg";
import filtersIcon from "../assets/filters.svg";

// helpers and variables imports
import {
  ALPHABETICALLY,
  PRICE,
  initialFiltersState,
} from "../helpers/variables";
import { sortProducts } from "../helpers/sort";
import { filterProducts } from "../helpers/filter";

function ProductsList({ products }) {
  const [sorting, setSorting] = useState({
    type: ALPHABETICALLY,
    isAscending: true,
  });
  const [filters, setFilters] = useState(initialFiltersState);
  const [show, setShow] = useState(false); // show offcanvas

  //handle offcanvas visibility
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // handle sorting by type
  const toggleSortingType = () => {
    if (sorting.type === ALPHABETICALLY) {
      setSorting({ ...sorting, type: PRICE });
    } else {
      setSorting({ ...sorting, type: ALPHABETICALLY });
    }
  };

  // handle sorting by order
  const toggleSortingOrder = () => {
    setSorting({ ...sorting, isAscending: !sorting.isAscending });
  };

  // handle filtering
  const filteredSortedProductsList = filterProducts(
    sortProducts(products, sorting),
    filters
  );

  // handle clearing filters
  const handleClear = () => {
    setFilters(initialFiltersState);
  };
  return (
    <div className="products-list">
      <Row className="pl-header mb-5">
        <Col>
          <h1>
            Photography / <span>Premium Photos</span>
          </h1>
        </Col>
        <Col className="products-sorting d-flex justify-content-end">
          {/* the following components will only show up on big screens */}
          <p className="d-none d-lg-block">
            <span onClick={toggleSortingOrder}>
              <Image src={sortingIcon} alt="" />
            </span>
            Sort By
          </p>
          <Dropdown className="d-inline mx-2 sorting-dropdown d-none d-lg-block">
            <Dropdown.Toggle id="dropdown-autoclose-true">
              {sorting.type}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={toggleSortingType}>
                {sorting.type === PRICE ? ALPHABETICALLY : PRICE}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* the following components will only show up on small screens */}
          <button onClick={handleShow} className="filters-button">
            <Image src={filtersIcon} alt="filters" />
          </button>
          <Offcanvas
            show={show}
            onHide={handleClose}
            className="d-block d-lg-none"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Filter</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Filters filters={filters} setFilters={setFilters} />
            </Offcanvas.Body>
            <div className="buttons-group">
              <button className="clear-button" onClick={handleClear}>
                Clear
              </button>
              <button className="save-button" onClick={handleClose}>
                Save
              </button>
            </div>
          </Offcanvas>
        </Col>
      </Row>
      <Row>
        <Col lg={3} xs={12} className="d-none d-lg-block">
          <Filters filters={filters} setFilters={setFilters} />
        </Col>
        <Col lg={9} xs={12}>
          <PaginatedList products={filteredSortedProductsList} />
        </Col>
      </Row>
    </div>
  );
}

export default ProductsList;
