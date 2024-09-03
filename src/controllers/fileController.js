const pdfService = require('../services/pdfService');
const imageService = require('../services/imageService');
const fetchUtil = require('../utils/fetchUtil');

async function processFile(req, res) {
    try {
        const { pdfUrl, qrCodeURL, dataAprovacao, texto, MIMETYPE, textSize, marginVertical, marginHorizontal } = req.body;

        if (!pdfUrl || !qrCodeURL || !dataAprovacao || !texto || !MIMETYPE) {
            return res.status(400).json({ error: 'Parâmetros obrigatórios ausentes' });
        }

        const buffer = await fetchUtil.fetchFile(pdfUrl);
        const combinedText = `${texto} ${dataAprovacao}`;

        let modifiedPdf;
        if (MIMETYPE === 'application/pdf') {
            modifiedPdf = await pdfService.addQRCodeToPdf(buffer, qrCodeURL, combinedText, textSize, marginVertical, marginHorizontal);
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'attachment; filename=arquivo_com_qrcode.pdf');
        } else if (MIMETYPE === 'image/jpeg' || MIMETYPE === 'image/png') {
            modifiedPdf = await imageService.addQRCodeToImage(buffer, qrCodeURL, combinedText, textSize, marginVertical, marginHorizontal);
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'attachment; filename=imagem_com_qrcode.pdf');
        } else {
            return res.status(400).json({ error: 'Tipo de arquivo não suportado' });
        }

        res.send(Buffer.from(modifiedPdf));
    } catch (error) {
        console.error('Erro ao processar o arquivo:', error);
        res.status(500).json({ error: 'Erro ao processar o arquivo' });
    }
}

module.exports = {
    processFile,
};
