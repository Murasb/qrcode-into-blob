// Importa os módulos necessários
import express from 'express';
import { PDFDocument, rgb } from 'pdf-lib';
import QRCode from 'qrcode';
import fetch from 'node-fetch'; // Use node-fetch para realizar o fetch

const app = express();
const port = 3000;

// Função para adicionar QR Code a um PDF obtido via URL
async function adicionarQRCode(pdfUrl, qrCodeURL, dataAprovacao) {
  // Gera o QR Code como um Data URL
  const qrCodeDataUrl = await QRCode.toDataURL(qrCodeURL);
  const qrCodeBase64 = qrCodeDataUrl.split(',')[1]; // Remove o prefixo data URL

  // Faz o fetch do PDF da URL fornecida
  const response = await fetch(pdfUrl);
  const pdfBytes = await response.arrayBuffer(); // Use arrayBuffer() para obter o PDF como ArrayBuffer

  // Carrega o PDF com PDF-LIB
  const pdfDoc = await PDFDocument.load(pdfBytes);
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  // Define as dimensões da página
  const { width, height } = firstPage.getSize();

  // Cria uma imagem a partir do Data URL do QR Code
  const qrImage = await pdfDoc.embedPng(Buffer.from(qrCodeBase64, 'base64'));

  // Tamanho do texto e margens
  const textSize = 12;
  const marginVertical = 90;  // Margem para cima
  const marginHorizontal = 380;  // Margem para a esquerda

  // Adiciona o QR Code na parte inferior direita
  const qrImageWidth = 100; // Largura do QR Code
  const qrImageHeight = 100; // Altura do QR Code
  firstPage.drawImage(qrImage, {
    x: width - qrImageWidth - marginHorizontal, // Ajuste para a esquerda
    y: marginVertical + textSize + 15, // Ajuste para cima
    width: qrImageWidth,
    height: qrImageHeight,
  });

  // Adiciona o texto logo abaixo do QR Code
  const text = 'PROJETO APROVADO PELA PREFEITURA MUNICIPAL DE SÃO CARLOS - DATA APROVAÇÃO: ' + dataAprovacao;
  firstPage.drawText(text, {
    x: width - qrImageWidth - marginHorizontal, // Alinha o texto ao QR Code (ajuste horizontal)
    y: marginVertical, // Posiciona o texto na margem vertical ajustada
    size: textSize,
    color: rgb(0, 0, 0), // Cor do texto (preto)
    maxWidth: qrImageWidth * 4 // Ajusta para que o texto não quebre
  });

  // Salva o PDF modificado
  const pdfBytesModified = await pdfDoc.save();
  
  return pdfBytesModified;
}

// Endpoint para adicionar QR Code e retornar o PDF modificado
app.get('/add-qrcode-pdf', async (req, res) => {
  try {
    const pdfUrl = req.query.pdfUrl; // URL do PDF a ser modificado
    const qrCodeURL = req.query.qrCodeURL || 'https://example.com'; // URL para o QR code
    const dataAprovacao = req.query.dataAprovacao || 'N/A'; // Data de aprovação

    if (!pdfUrl) {
      return res.status(400).send('Parâmetro pdfUrl é obrigatório.');
    }

    // Adiciona QR Code ao PDF
    const pdfBytesModified = await adicionarQRCode(pdfUrl, qrCodeURL, dataAprovacao);

    // Define o cabeçalho de resposta para PDF
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=arquivo_com_qrcode.pdf');

    // Envia o PDF como resposta
    res.send(Buffer.from(pdfBytesModified)); // Certifique-se de que o PDF é enviado como um Buffer
  } catch (err) {
    console.error('Erro ao adicionar QR Code ao PDF:', err);
    res.status(500).send('Erro ao adicionar QR Code ao PDF');
  }
});

// teste comentarios
// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
  console.log(`Acesse o endpoint para adicionar QR Code ao PDF: http://127.0.0.1:${port}/add-qrcode`);
});
