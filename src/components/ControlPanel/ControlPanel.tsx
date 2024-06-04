import  { useState, useEffect,} from "react";
import PDFPrinter from "./PDFPrinter";
import {
  ControlPanelContainer,
  ControlPdf,
  ControlSection,
  Icon,
  PageInput,
  ZoomLabel,
} from "./style";
import arrowLeft from "../../assets/icons/arrow_left.svg";
import arrowRight from "../../assets/icons/arrow_right.svg";
import zoommax from "../../assets/icons/zoommax.svg";
import zoommin from "../../assets/icons/zoommin.svg";
import dowload from "../../assets/icons/dowload.svg";

const ControlPanel = (props) => {
  const { file, pageNumber, numPages, setPageNumber, scale, setScale } = props;

  const isFirstPage = pageNumber === 1;
  const isLastPage = pageNumber === numPages;

  const firstPageClass = isFirstPage ? "disabled" : "clickable";
  const lastPageClass = isLastPage ? "disabled" : "clickable";

  const goToFirstPage = () => {
    if (!isFirstPage) setPageNumber(1);
  };
  const goToPreviousPage = () => {
    if (!isFirstPage) setPageNumber(pageNumber - 1);
  };
  const goToNextPage = () => {
    if (!isLastPage) setPageNumber(pageNumber + 1);
  };
  const goToLastPage = () => {
    if (!isLastPage) setPageNumber(numPages);
  };

  const onPageChange = (e) => {
    const { value } = e.target;
    setPageNumber(Number(value));
  };

  const isMinZoom = scale < 0.6;
  const isMaxZoom = scale >= 2.0;

  const zoomOutClass = isMinZoom ? "disabled" : "clickable";
  const zoomInClass = isMaxZoom ? "disabled" : "clickable";

  const zoomOut = () => {
    if (!isMinZoom) setScale(scale - 0.1);
  };

  const zoomIn = () => {
    if (!isMaxZoom) setScale(scale + 0.1);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 600) {
      const newScale = windowWidth / 600;
      setScale(newScale < 0.6 ? 0.6 : newScale);
    }
  }, [windowWidth, setScale]);

  return (
    <ControlPanelContainer>
      <ControlSection>
        <Icon src={arrowLeft} onClick={goToFirstPage} />
        <Icon src={arrowLeft} onClick={goToPreviousPage} />
        <span>
          Page{" "}
          <PageInput
            name="pageNumber"
            type="number"
            min={1}
            max={numPages || 1}
            value={pageNumber}
            onChange={onPageChange}
          />{" "}
          of {numPages}
        </span>
        <Icon src={arrowRight} onClick={goToNextPage} />
        <Icon src={arrowRight} onClick={goToLastPage} />
      </ControlSection>
      <ControlSection>
        <Icon src={zoommin} onClick={zoomOut} />
        <ZoomLabel>{(scale * 100).toFixed()}%</ZoomLabel>
        <Icon src={zoommax} onClick={zoomIn} />
      </ControlSection>
      <ControlSection>
        <a href={file} download={true} title="download">
          <Icon src={dowload} />
        </a>
      </ControlSection>
      <ControlPdf data-com='dev'>
        <PDFPrinter file={file} />
      </ControlPdf>
    </ControlPanelContainer>
  );
};

export default ControlPanel;
