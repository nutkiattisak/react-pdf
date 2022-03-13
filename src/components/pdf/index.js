import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
/*
issue: https://github.com/wojtekmaj/react-pdf/issues/680#issuecomment-723656449
 */

export default function SinglePage(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const changePage = (offset) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const { pdf } = props;

  return (
    <>
      <Document
        file={pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div className="page-controls">
        <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
          ‹
        </button>
        <span>
          หน้า {pageNumber || (numPages ? 1 : "--")} จาก {numPages || "--"}
        </span>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          ›
        </button>
      </div>
    </>
  );
}
