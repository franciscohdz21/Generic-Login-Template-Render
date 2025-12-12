import Fastify from 'fastify'
import cors from '@fastify/cors'
import { logger } from './logger'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

const app = Fastify({ logger })
app.register(cors, { origin: true })

app.get('/health', async () => ({ status: 'ok' }))

app.post('/auth/login', async (req, reply) => {
  const body = req.body as { username?: string; password?: string }
  const { username, password } = body || {}

  if (!username || !password) {
    return reply.status(400).send({ error: 'Missing username or password' })
  }

  const user = await prisma.user.findUnique({ where: { username } })
  if (!user) {
    return reply.status(401).send({ error: 'Invalid username or password' })
  }

  const ok = await bcrypt.compare(password, user.password)
  if (!ok) {
    return reply.status(401).send({ error: 'Invalid username or password' })
  }

  // Basic sessionless login response; allow concurrent logins by design
  return reply.send({
    message: 'Login Successful',
    user: { id: user.id, username: user.username, role: user.role },
  })
})

const port = Number(process.env.PORT || 3000)
app.listen({ port, host: '0.0.0.0' }).then(() => {
  logger.info({ port }, 'Server listening')
}).catch(err => {
  logger.error(err, 'Failed to start server')
  process.exit(1)
})
