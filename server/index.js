const express = require('express')

express()
  .use(express.static(`${__dirname}/../build`))
  .listen(3010, 'localhost', () => console.log('Listening'))
