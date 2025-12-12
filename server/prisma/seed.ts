import { PrismaClient, Role } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const users = [
    { username: 'admin', password: 'ADadzx01S-', role: Role.ADMIN },
    { username: 'editor', password: 'EDadzx02S-', role: Role.EDITOR },
    { username: 'creator', password: 'CRadzx03S-', role: Role.CREATOR },
    { username: 'viewer', password: 'VIadzx04S-', role: Role.VIEWER },
  ]

  for (const u of users) {
    const hash = await bcrypt.hash(u.password, 10)
    await prisma.user.upsert({
      where: { username: u.username },
      create: { username: u.username, password: hash, role: u.role },
      update: { password: hash, role: u.role },
    })
  }

  console.log('Seeded users:', users.map(u => u.username).join(', '))
}

main()
  .catch(e => { console.error(e); process.exit(1) })
  .finally(async () => { await prisma.$disconnect() })