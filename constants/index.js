import "dotenv/config";

const constant = {
  BASE_URL: process.env.BASE_URL,
  PORT: process.env.PORT,
  JWT_SECRET_ACCESS_TOKEN: process.env.JWT_SECRET_ACCESS_TOKEN,
  JWT_SECRET_REFRESH_TOKEN: process.env.JWT_SECRET_REFRESH_TOKEN,
  DATABASE_URL: process.env.DATABASE_URL,
  DATABASE_URL_LOCAL: process.env.DATABASE_URL_LOCAL,
  EMAIL_HOST: process.env.EMAIL_HOST,
  EMAIL_PORT: process.env.EMAIL_PORT,
  EMAIL_SECURE: process.env.EMAIL_SECURE,
  EMAIL_SERVICE: process.env.EMAIL_SERVICE,
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
  EMAIL_VERIFIED_USER: process.env.EMAIL_VERIFIED_USER,
};

export default constant;
