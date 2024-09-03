const { PDFDocument, rgb } = require('pdf-lib');
const qrCodeUtil = require('../utils/qrCodeUtil');

async function addQRCodeToPdf(pdfBytes, qrCodeURL, text, textSize, marginVertical, marginHorizontal) {
    const qrCodeBase64 = await qrCodeUtil.generateQRCodeBase64(qrCodeURL);

    const pdfDoc = await PDFDocument.load(pdfBytes);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    const { width, height } = firstPage.getSize();
    const qrImage = await pdfDoc.embedPng(Buffer.from(qrCodeBase64, 'base64'));

    const qrImageWidth = 100;
    const qrImageHeight = 100;
    firstPage.drawImage(qrImage, {
        x: width - qrImageWidth - marginHorizontal,
        y: marginVertical + 12 + 15,
        width: qrImageWidth,
        height: qrImageHeight,
    });

    firstPage.drawText(text, {
        x: width - qrImageWidth - marginHorizontal,
        y: marginVertical,
        size: textSize,
        color: rgb(0, 0, 0),
        maxWidth: qrImageWidth * 4,
    });

    return await pdfDoc.save();
}

module.exports = {
    addQRCodeToPdf,
};
