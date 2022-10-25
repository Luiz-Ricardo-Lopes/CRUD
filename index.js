const express = require('express')

const server = express()

server.use(express.json())

const technology = ['HTML', 'CSS', 'JavaScript', 'React', 'Nodejs']

server.get('/technology/:index', (request, response) => {
  const { index } = request.params

  return response.json(technology[index])
})

server.get('/technology', (request, response) => {
  return response.json(technology)
})

server.post('/technology', (request, response) => {
  const { name } = request.body

  technology.push(name)
  return response.json(technology)
})

server.put('/technology/:index', (request, response) => {
  const { index } = request.params
  const { name } = request.body

  technology[index] = name

  return response.json(technology)
})

server.delete('/technology/:index', (request, response) => {
  const { index } = request.params

  technology.splice(index, 1)
  return response.json({ message: 'Tecnologia deletada com sucesso!' })
})

server.listen('3333')
