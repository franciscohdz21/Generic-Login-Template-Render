import Fastify from 'fastify'
import cors from '@fastify/cors'
import { logger } from './logger'

const app = Fastify({ logger })
app.register(cors, { origin: true })

app.get('/health', async () => ({ status: 'ok' }))

app.post('/auth/login', async (req, reply) => {
  // Placeholder: always 200 with mock user
  return reply.send({ token: 'dev-token', user: { id: 1, email: 'demo@example.com' } })
})

const port = Number(process.env.PORT || 3000)
app.listen({ port, host: '0.0.0.0' }).then(() => {
  logger.info({ port }, 'Server listening')
}).catch(err => {
  logger.error(err, 'Failed to start server')
  process.exit(1)
})
