

const PDFPrinter = ({ file }) => {
  const print = () => {
    const pdfFrame = document.createElement('iframe');
    pdfFrame.style.visibility = 'hidden';
    pdfFrame.style.width = '80%';
    pdfFrame.style.height = '80%';
    pdfFrame.style.position = 'fixed';
    pdfFrame.style.top = '10%';
    pdfFrame.style.left = '10%';
    pdfFrame.src = file;

    document.body.appendChild(pdfFrame);

    pdfFrame.onload = () => {
      pdfFrame.contentWindow.focus();
      pdfFrame.contentWindow.print();
      document.body.removeChild(pdfFrame); 
    };
  };

  return (
    <i className="fas fa-print clickable" onClick={print} title="download" />
  );
};

export default PDFPrinter;
