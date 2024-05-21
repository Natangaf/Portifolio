import  { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import ControlPanel from '../../components/ControlPanel/ControlPanel';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import curriculumNata from "../../base/NataFernandesfullstack.pdf";
import { StylesCurriculum } from './style';
import { Header } from '../../components/header';
const Curriculum = () => {
  const [scale, setScale] = useState(1.0);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setIsLoading(false);
  }

  return (
    <>
      <Header />
      <StylesCurriculum
        id="pdf-section"
        >
        <ControlPanel
          scale={scale}
          setScale={setScale}
          numPages={numPages}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          file={curriculumNata}
          />
        <Document
          file={curriculumNata}
          onLoadSuccess={onDocumentLoadSuccess}
          
          >
          <Page pageNumber={pageNumber}
           scale={scale} 
           renderTextLayer={false} 
           renderAnnotationLayer={false} />
        </Document>
      </StylesCurriculum>
           </>
  );
};

export default Curriculum;
