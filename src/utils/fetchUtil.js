const fetch = require('node-fetch');

async function fetchFile(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Não foi possível acessar o arquivo');
    }

    return await response.arrayBuffer();
}

module.exports = {
    fetchFile,
};
