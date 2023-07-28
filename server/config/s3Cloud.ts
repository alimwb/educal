import { S3Client } from '@aws-sdk/client-s3';
import { envVars } from './envVars';

const s3 = new S3Client({
  region: 'default',
  endpoint: envVars.s3Endpoint,
  credentials: {
    accessKeyId: envVars.s3AccessKey,
    secretAccessKey: envVars.s3Secret,
  },
});

export { s3 as s3Cloud };
