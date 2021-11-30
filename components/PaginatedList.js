import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import ReactPaginate from "react-paginate";
//components imports
import ProductCard from "./ProductCard";

const products = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
];

function PaginatedList() {
  const [pageNumber, setPageNumber] = useState(0);
  const userPerPage = 6;
  const pageVisited = pageNumber * userPerPage;

  const displayProducts = products.slice(
    pageVisited,
    pageVisited + userPerPage
  );

  const pageCount = Math.ceil(products.length / userPerPage);

  const changePage = ({ selected }) => {
    console.log(selected)
    setPageNumber(selected);
  };

  return (
    <div className="paginated-list">
      <Row>
        {displayProducts.map((i) => (
          <Col key={i}>
            <ProductCard />
          </Col>
        ))}
      </Row>
      <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination"}
        previousLinkClassName={pageNumber === 0 ? "hideBtn" : "prevBtn"}
        nextLinkClassName={pageNumber === pageCount-1 ? "hideBtn" : "nextBtn"}
      />
    </div>
  );
}

export default PaginatedList;
