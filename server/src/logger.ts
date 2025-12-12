import pino from 'pino'

export const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  timestamp: pino.stdTimeFunctions.isoTime,
})

export function logWithTimestamp(level: 'info'|'error'|'warn'|'debug', msg: string, meta?: Record<string, unknown>) {
  const time = new Date().toISOString()
  const data = { time, ...meta }
  logger[level](data, msg)
}
