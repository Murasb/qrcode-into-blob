const { PDFDocument, rgb } = require('pdf-lib');
const sharp = require('sharp');
const qrCodeUtil = require('../utils/qrCodeUtil');

async function addQRCodeToImage(imageBuffer, qrCodeURL, text, textSize, marginVertical, marginHorizontal) {
    try {
        const image = await sharp(imageBuffer).resize({ width: 600 }).toBuffer();

        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage();

        const img = await pdfDoc.embedJpg(image);
        const { width, height } = img.scale(0.5);

        const qrCodeBase64 = await qrCodeUtil.generateQRCodeBase64(qrCodeURL);
        const qrImage = await pdfDoc.embedPng(Buffer.from(qrCodeBase64, 'base64'));

        page.drawImage(img, {
            x: 50,
            y: page.getHeight() - height - 50,
            width,
            height,
        });

        page.drawImage(qrImage, {
            x: page.getWidth() - 100 - marginHorizontal,
            y: marginVertical + 12 + 15,
            width: 100,
            height: 100,
        });

        page.drawText(text, {
            x: page.getWidth() - 100 - marginHorizontal,
            y: marginVertical,
            size: textSize,
            color: rgb(0, 0, 0),
            maxWidth: 400,
        });

        return await pdfDoc.save();
    } catch (error) {
        console.error('Erro ao processar a imagem:', error);
        throw new Error('Erro ao processar a imagem');
    }
}


module.exports = {
    addQRCodeToImage,
};
