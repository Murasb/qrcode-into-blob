<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QR Code File Processor</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            color: #333;
            line-height: 1.6;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 800px;
            margin: 30px auto;
            padding: 20px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        h1, h2, h3 {
            text-align: center;
            color: #4CAF50;
        }

        h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
        }

        h2 {
            font-size: 2rem;
            margin-top: 40px;
        }

        h3 {
            font-size: 1.5rem;
            margin-top: 20px;
        }

        p {
            font-size: 1.2rem;
            margin-bottom: 20px;
        }

        .emojis {
            font-size: 2rem;
            text-align: center;
            margin-bottom: 20px;
        }

        .technologies {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin-bottom: 20px;
        }

        .technology {
            margin: 10px;
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            border-radius: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s;
        }

        .technology:hover {
            transform: scale(1.1);
        }

        .code-block {
            background-color: #f4f4f4;
            padding: 15px;
            border-radius: 10px;
            box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
            font-family: 'Courier New', Courier, monospace;
            margin-bottom: 20px;
        }

        .footer {
            text-align: center;
            margin-top: 50px;
            font-size: 1rem;
            color: #888;
        }
    </style>
</head>
<body>

<div class="container">
    <h1>🚀 QR Code File Processor</h1>
    <div class="emojis">📄 ➕ 📷 ➕ 🔗</div>

    <p>
        Bem-vindo ao projeto <strong>QR Code File Processor</strong>, um servidor Node.js projetado para adicionar QR Codes a documentos PDF e imagens. Este projeto é ideal para quem precisa incorporar informações digitais diretamente em arquivos físicos de forma automatizada e eficiente.
    </p>

    <h2>🌟 Funcionalidades Principais</h2>
    <ul>
        <li>📄 <strong>Adicionar QR Codes a PDFs:</strong> Incorpore QR Codes em qualquer documento PDF com facilidade.</li>
        <li>📷 <strong>Adicionar QR Codes a Imagens:</strong> Suporte para imagens JPEG e PNG, permitindo a inclusão de QR Codes.</li>
        <li>🖋️ <strong>Personalização de Texto:</strong> Adicione texto personalizado abaixo do QR Code com opções de formatação.</li>
        <li>⚙️ <strong>Processamento Automatizado:</strong> Realize tudo isso através de uma simples chamada HTTP, automatizando seu fluxo de trabalho.</li>
    </ul>

    <h2>🔧 Tecnologias Utilizadas</h2>
    <div class="technologies">
        <div class="technology">Node.js</div>
        <div class="technology">Express.js</div>
        <div class="technology">PDF-Lib</div>
        <div class="technology">Sharp</div>
        <div class="technology">QRCode</div>
        <div class="technology">Node-Fetch</div>
    </div>

    <h2>🚀 Como Começar</h2>
    <p>
        Para começar a usar o <strong>QR Code File Processor</strong>, siga os passos abaixo:
    </p>
    <div class="code-block">
        <code>
        # Clone o repositório<br>
        git clone https://github.com/seu-usuario/qr-code-file-processor.git<br><br>

        # Navegue até o diretório do projeto<br>
        cd qr-code-file-processor<br><br>

        # Instale as dependências<br>
        npm install<br><br>

        # Inicie o servidor<br>
        npm start<br>
        </code>
    </div>

    <p>
        Após iniciar o servidor, você poderá acessar o endpoint em <code>http://localhost:3000/process-file</code> para começar a processar seus arquivos.
    </p>

    <h3>📮 Exemplo de Requisição</h3>
    <p>
        Utilize a seguinte estrutura JSON para enviar uma requisição ao servidor:
    </p>
    <div class="code-block">
        <code>
        {<br>
        &nbsp;&nbsp;"pdfUrl": "https://example.com/yourfile.pdf",<br>
        &nbsp;&nbsp;"qrCodeURL": "https://example.com/your-qrcode",<br>
        &nbsp;&nbsp;"dataAprovacao": "2024-09-03",<br>
        &nbsp;&nbsp;"texto": "Aprovado",<br>
        &nbsp;&nbsp;"MIMETYPE": "application/pdf",<br>
        &nbsp;&nbsp;"textSize": 12,<br>
        &nbsp;&nbsp;"marginVertical": 50,<br>
        &nbsp;&nbsp;"marginHorizontal": 50<br>
        }
        </code>
    </div>

    <p>
        Substitua os valores conforme necessário e envie a requisição usando o Postman, cURL, ou qualquer cliente HTTP de sua preferência.
    </p>

    <div class="footer">
        <p>Desenvolvido com ❤️ por Kauay Felipe / Murilo Bernardo - 2024</p>
    </div>
</div>

</body>
</html>
