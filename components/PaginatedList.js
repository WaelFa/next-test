import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import ReactPaginate from "react-paginate";
//components imports
import ProductCard from "./ProductCard";

function PaginatedList({ products }) {
  const [pageNumber, setPageNumber] = useState(0);
  const userPerPage = 6;
  const pageVisited = pageNumber * userPerPage;

  const displayProducts = products.slice(
    pageVisited,
    pageVisited + userPerPage
  );

  const pageCount = Math.ceil(products.length / userPerPage);

  const changePage = ({ selected }) => {
    console.log(selected);
    setPageNumber(selected);
  };

  return (
    <div className="paginated-list">
      <Row>
        {displayProducts.map((product, i) => (
          <Col key={"key" + i} xs={12} md={6} lg={4}>
            <ProductCard product={product} />
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
        nextLinkClassName={pageNumber === pageCount - 1 ? "hideBtn" : "nextBtn"}
      />
    </div>
  );
}

export default PaginatedList;
