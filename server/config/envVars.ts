const vars = {
  port: process.env.PORT,
  environment: process.env.ENVIRONMENT,
  dbUri: process.env.DB_URI,
  jwtSecret: process.env.JWT_SECRET,
  cookieSecert: process.env.COOKIE_SECRET,
  cipherKey: process.env.CIPHER_KEY,
  cipherAlgorithm: process.env.CIPHER_ALGORITHM,
  cipherIV: process.env.CIPHER_IV,
  s3Secret: process.env.S3_SECRET,
  s3AccessKey: process.env.S3_ACCESS_KEY,
  s3Bucket: process.env.S3_BUCKET,
  s3Endpoint: process.env.S3_ENDPOINT,
}

export { vars as envVars };
