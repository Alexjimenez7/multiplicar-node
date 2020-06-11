const fs = require('fs'); // libreria de node
const colors = require('colors');
// el valor por default de limite como parametro no es necesario gracias a yargs 
// pero esc6 ya lo permite 
let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base ${base} No es un número`);
            return;
        }

        let data = ''
        console.log('========================'.yellow);
        console.log(`Tabla de  ${base}`.yellow);
        console.log('========================'.yellow);
        for (let i = 1; i <= limite; i++) {
            let result = base * i;
            console.log(`${base} X ${i} = ${result} `);
        }
        resolve('Tabla listada');

    });
}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base ${base} No es un número`);
            return;
        }

        let data = ''
        for (let i = 1; i <= limite; i++) {
            let result = base * i;
            data += `${base} X ${i} = ${result} \n`;
            console.log(`${base} X ${i} = ${result} `);
        }

        fs.writeFile(`./tablas/tabla - ${base}`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}