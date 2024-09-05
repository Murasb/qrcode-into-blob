# 🚀 QR Code File Processor

Bem-vindo ao projeto **QR Code File Processor**, um servidor Node.js projetado para adicionar QR Codes a documentos PDF e imagens. Este projeto é ideal para quem precisa incorporar informações digitais diretamente em arquivos físicos de forma automatizada e eficiente.

<div style="text-align: center; font-size: 2rem; margin-bottom: 20px;">
    📄 ➕ 📷 ➕ 🔗
</div>

## 🌟 Funcionalidades Principais

- 📄 **Adicionar QR Codes a PDFs:** Incorpore QR Codes em qualquer documento PDF com facilidade.
- 📷 **Adicionar QR Codes a Imagens:** Suporte para imagens JPEG e PNG, permitindo a inclusão de QR Codes.
- 🖋️ **Personalização de Texto:** Adicione texto personalizado abaixo do QR Code com opções de formatação.
- ⚙️ **Processamento Automatizado:** Realize tudo isso através de uma simples chamada HTTP, automatizando seu fluxo de trabalho.

## 🔧 Tecnologias Utilizadas

<div style="display: flex; flex-wrap: wrap; justify-content: center; margin-bottom: 20px;">
    <div style="margin: 10px; padding: 10px 20px; background-color: #4CAF50; color: white; border-radius: 20px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        Node.js
    </div>
    <div style="margin: 10px; padding: 10px 20px; background-color: #4CAF50; color: white; border-radius: 20px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        Express.js
    </div>
    <div style="margin: 10px; padding: 10px 20px; background-color: #4CAF50; color: white; border-radius: 20px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        PDF-Lib
    </div>
    <div style="margin: 10px; padding: 10px 20px; background-color: #4CAF50; color: white; border-radius: 20px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        Sharp
    </div>
    <div style="margin: 10px; padding: 10px 20px; background-color: #4CAF50; color: white; border-radius: 20px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        QRCode
    </div>
    <div style="margin: 10px; padding: 10px 20px; background-color: #4CAF50; color: white; border-radius: 20px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        Node-Fetch
    </div>
</div>

## 🚀 Como Começar

Para começar a usar o **QR Code File Processor**, siga os passos abaixo:

```bash
# Clone o repositório
git clone https://github.com/kauayf/qrcode-service

# Navegue até o diretório do projeto
cd qrcode-service

# Instale as dependências
npm install

# Inicie o servidor
npm start

#Utilize a seguinte estrutura JSON para enviar uma requisição ao servidor:

{
  "pdfUrl": "https://example.com/yourfile.pdf",
  "qrCodeURL": "https://example.com/your-qrcode",
  "dataAprovacao": "2024-09-03",
  "texto": "Aprovado",
  "MIMETYPE": "application/pdf",
  "textSize": 12,
  "marginVertical": 50,
  "marginHorizontal": 50
}

#Substitua os valores conforme necessário e envie a requisição usando o Postman, cURL, ou qualquer cliente HTTP de sua preferência.
```

<div style="text-align: center; margin-top: 50px; font-size: 1rem; color: #888;"> Desenvolvido com ❤️ por Kauay Felipe - 2024 </div> 
