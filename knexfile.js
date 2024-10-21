import "./loadEnv.js"

const config = {
  client: "pg",
  connection: process.env.POSTGRES_PRISMA_URL,
};

console.log(config)

export default config;
