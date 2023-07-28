const vars = {
  port: process.env.PORT as string,
  environment: process.env.ENVIRONMENT as string,
  dbUri: process.env.DB_URI as string,
  jwtSecret: process.env.JWT_SECRET as string,
  cookieSecert: process.env.COOKIE_SECRET as string,
  cipherKey: process.env.CIPHER_KEY as string,
  cipherAlgorithm: process.env.CIPHER_ALGORITHM as string,
  cipherIV: process.env.CIPHER_IV as string,
  s3Secret: process.env.S3_SECRET as string,
  s3AccessKey: process.env.S3_ACCESS_KEY as string,
  s3Bucket: process.env.S3_BUCKET as string,
  s3Endpoint: process.env.S3_ENDPOINT as string,
  s3AccessUrl: process.env.S3_ACCESS_URL as string,
  version: process.env.VERSION as string,
}

export { vars as envVars };
