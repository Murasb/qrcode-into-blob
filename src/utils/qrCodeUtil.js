const QRCode = require('qrcode');

async function generateQRCodeBase64(qrCodeURL) {
    const qrCodeDataUrl = await QRCode.toDataURL(qrCodeURL);
    return qrCodeDataUrl.split(',')[1];
}


module.exports = {
    generateQRCodeBase64,
};
