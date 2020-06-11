//const fs = require('express'); // libreria de tercero 
//const fs = require('./ruta/archivo'); // libreria nuestra
//const multiplicar = require('./multiplicar/multiplicar');
/* const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Imprime en consola la tabla de multiplicar y crea un archivo', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv; */

const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//console.log(multiplicar);
//console.log(process.argv); //recepcion de parametros desde linea de comandos

//let argv2 = process.argv
//console.log(argv.base);
//console.log(argv.limite);
//console.log(argv);
//console.log(argv2);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(`Tabla listada ${argv.base} `.blue.bgWhite))
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo} `))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}


//let param = argv[2];
//let base = param.split('=')[1];
//console.log(base);


//let base = 3;

//console.log(module);