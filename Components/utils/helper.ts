import { MutableRefObject } from "react"
import html2canvas from "html2canvas";

import { jsPDF } from "jspdf";


export const to_int_or_default = (val:string|null)=>{
    try{
        if(val)
            return parseInt(val)
    }
    catch{
    }
    return 0
}


export const numberToMoney = (value:number|string|null) =>{
    if (!value) return ''
    let intValue = value.toLocaleString().replace(/[^0-9.]/g, '');
    const parts = intValue.split('.');
    if (parts.length > 2) {
        intValue = parts[0] + '.' + parts.slice(1).join('');
    }

    const [integerPart, decimalPart] = intValue.split('.');
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return decimalPart !== undefined ? `${formattedInteger}.${decimalPart}` : formattedInteger;
}



export const exportAsPng = async (elementRef:any) => {
    if (elementRef.current) {
      const canvas = await html2canvas(elementRef.current);
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "export.png";
      link.click();
    }
  };

  // Function to export as PDF
export const exportAsPdf = async (elementRef:any) => {
    if (elementRef.current) {
      const canvas = await html2canvas(elementRef.current);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("export.pdf");
    }
  };