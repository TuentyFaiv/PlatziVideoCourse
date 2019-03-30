import express  from 'express';
import React from 'react';
import App  from '../dist/ssr/app';
import { StaticRouter }  from 'react-router';
import reactDOMServer from 'react-dom/server';

const app = express();

app.use(express.static('dist'));
app.use('/images', express.static('dist'));
// const html = reactDOMServer.renderToString(
//   <StaticRouter
//     location='{req.url}'
//   >
//     <App/>
//   </StaticRouter>
// )

app.get('*', (req, res)=>{
  res.write(`
    <!DOCTYPE html>
    <html lang="es-mx">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Platzi Video</title>
        <link rel="stylesheet" href="/css/app.css">
      </head>
      <body>
        <div id="home-container">${req.url}</div>
        <div id="modal-container"></div>
        <!-- 
        <script src="http://localhost:9000/js/app.js"></script> 
        -->
        <script src="/js/app.js"></script> 
        <!-- 
        -->
      </body>
    </html>
  `);
  res.end();
});

app.listen(3000);
console.log('El server esta corriendo en el purto 3000');