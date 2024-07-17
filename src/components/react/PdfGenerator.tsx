import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import QRCode from "qrcode";

interface IProps {
  children: React.ReactNode;
}

export const PdfGenerator = (props: IProps) => {
  const { children } = props;
  const contentRef = useRef<HTMLDivElement>(null);
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const generateQrCode = async (certificateId: string) => {
    try {
      const url = `http://localhost:4321/verify?certId=${certificateId}`;
      const qrCode = await QRCode.toDataURL(url);
      setQrCodeUrl(qrCode);
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  const generatePdf = async () => {
    setIsLoading(true);
    const certificateId = "unique_certificate_id"; // Generar un ID único para cada certificado
    await generateQrCode(certificateId);
    const content = contentRef.current;

    if (content) {
      html2canvas(content)
        .then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF("landscape", "mm", "a4"); // Orientación landscape, tamaño A4
          const imgWidth = 297; // A4 width in mm in landscape mode
          const pageHeight = 210; // A4 height in mm in landscape mode
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
          let heightLeft = imgHeight;
          let position = 0;

          pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          // pdf.addImage(qrCodeUrl, "PNG", 250, 10, 20, 20); // Añadir el QR code en el PDF
          heightLeft -= pageHeight;

          while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            pdf.addImage(qrCodeUrl, "PNG", 250, 10, 20, 20); // Añadir el QR code en el PDF
            heightLeft -= pageHeight;
          }

          pdf.save("download.pdf");
        })
        .catch((err) => {
          console.error("Error generating PDF:", err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      console.error("Content is null");
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div ref={contentRef}>{children}</div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={generatePdf}
        disabled={isLoading}
      >
        {isLoading ? "Generando PDF..." : "Descargar certificado"}
      </button>
      {isLoading && <div className="loading-spinner">Generando PDF...</div>}
    </div>
  );
};

export default PdfGenerator;
