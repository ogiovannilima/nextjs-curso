/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //pode ser criado variaveis de ambiente aqui dentro
  env: {
    dbPath: 'mySql....',
  },
}

module.exports = nextConfig
