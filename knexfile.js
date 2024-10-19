import "./loadEnv.js"

const config = {
  client: "pg",
  connection: process.env.DATABASE_URL,
};

console.log(config)

export default config;
