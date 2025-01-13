// // const express = require('express');
// import express from 'express';
// import path from 'path';
// // const path = require('path');


// export const startServer = (options) => {
//     const { port, public_path = 'public' } = options

//     console.log("holAaaaaaaaaaa", port, public_path);
//     const app = express();

//     //para poder usar midlewares, se usa la palabra use
//     app.use(express.static(public_path))//contenido estatico que se pone para tenerlo disponible
//     //aqui para poder devolver la web despues de pasar del midleware
//     app.get('*', (req, res) => {
//         const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
//         //luego respondemos
//         res.sendFile(indexPath)
//     })  
// //aca es para abrir un puerto y escuchar ahi
//     app.listen(port, () => {
//         console.log("necesito dinero", port);
        
//     })
// }

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Crear equivalente de __dirname en módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const startServer = (options) => {
    const { port, public_path = 'public' } = options;

    console.log("jiijijiji", port, public_path);
    const app = express();

    // Middleware para servir contenido estático
    app.use(express.static(public_path));

    // Ruta para manejar todas las demás solicitudes
    app.get('*', (req, res) => {
        const indexPath = path.join(__dirname, `../../../../${public_path}/index.html`);
        res.sendFile(indexPath);
    });

    // Iniciar servidor en el puerto especificado
    app.listen(port, () => {
        console.log("necesito dinero", port);
    });
};
