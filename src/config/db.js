const { PrismaClient } = require('@prisma/client');

// Inisialisasi Prisma Client
const prisma = new PrismaClient();

// Export Prisma Client agar bisa digunakan di seluruh aplikasi
module.exports = prisma;