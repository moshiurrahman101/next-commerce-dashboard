declare global {
  var prisma: PrismaClient;
}

import { PrismaClient } from "@prisma/client";
let prismadb: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prismadb = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prismadb = global.prisma;
}

export default prismadb;
