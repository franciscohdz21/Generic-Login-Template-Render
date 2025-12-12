export type LogLevel = 'info' | 'warn' | 'error' | 'debug'

export function log(level: LogLevel, message: string, meta?: Record<string, unknown>) {
  const time = new Date().toISOString()
  const payload = { time, level, message, ...meta }
  if (level === 'error') console.error(payload)
  else if (level === 'warn') console.warn(payload)
  else if (level === 'debug') console.debug(payload)
  else console.log(payload)
}
