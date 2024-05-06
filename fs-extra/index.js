const fs = require('fs-extra');

async function copyFiles () {
    try {
        await fs.copy('/temp/myFile' , '/temp/mynewFile');
        console.log('success!');
    } catch (error) {
        console.error(error);
    }
}

copyFiles();