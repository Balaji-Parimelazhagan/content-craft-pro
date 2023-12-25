import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

export const DownloadHtmlAsPdf = (rootElementId: string, downloadFileName: string) => {
  const input = document.getElementById(rootElementId)
  if (input) {
    html2canvas(input).then((canvas: any) => {
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('l', 'pc', 'a4')
      pdf.addImage(imgData, 'JPEG', 0, 0, 0, 0)
      pdf.save(`${downloadFileName}.pdf`)
    })
  }
}

export const convertHtmlToString = (html: string) => {
  const tempElement = document.createElement('div')
  tempElement.innerHTML = html
  const textContent = tempElement.textContent || tempElement.innerText
  return textContent
}
