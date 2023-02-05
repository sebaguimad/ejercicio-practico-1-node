// 1. Crear un servidor web que responda a peticiones en formato HTML.
// La respuesta debe incluir una lista de la siguiente manera. Ejemplo:

// Crear un servidor web
const express = require('express')

// Importamos módulo moment
const moment = require('moment');
// Cambiamos el idioma a español de moment.
moment.locale('ES');
// Importamos random words
const randomWords = require('random-words')

const app = express()

app.get('/', function (req, res) {   
  res.send(`
    <ul>
      <li>Día: ${moment().format('dddd')}</li>
      <li>Número día: ${moment().format('D')}</li>
      <li>Mes: ${moment().format('MMMM')}</li>
      <li>Año: ${moment().format('YYYY')}</li>
      <li>Hora: ${moment().format('h a')}</li>
      <li>Minutos: ${moment().format('mm')}</li>
      <li>Segundos: ${moment().format('ss')}</li>
    </ul>
  `)
})


// 2. Crear un servidor web que responda a peticiones GET y PUT en formato HTML.


app.get('/azar', function(req, res){
    console.log(randomWords)
    let randomNumber = Math.floor(Math.random() * (50000 - 10)) + 10
    res.send(`<h1>${randomWords({exactly: randomNumber, min: 3, max: 10 })}</h1>`)
})

// Si el servidor recibe demasiadas peticiones mediante otro método HTTP debe responder
// con "Aún no estoy preparado para responder al método X", donde X es el nombre del
// método HTTP utilizado en la petición.

app.all('*', function(req, res){
    res.send(`<h1>Aún no estoy preparado para responder al método ${req.method}</h1>`)
})

app.listen(3000,()=>console.log('Servidor escuchando en http://localhost:3000'))

