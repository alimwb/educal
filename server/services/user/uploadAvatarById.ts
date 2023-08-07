import { UserService } from './user.service';
import { s3Cloud } from '../../config';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { envVars } from '../../config';
import { rm } from 'fs/promises';
import { createReadStream } from 'fs';
import sharp from 'sharp';
import { errorLogger } from '../../helpers/errors';

/**
 * Upload user's avatar image.
 * 
 * @param id The user's id to upload the avatar for
 * @param fileInfo Uploaded file info (stored locally), populated by multer.
 * @returns relatve url to the image.
 */

async function uploadAvatarById(this: typeof UserService, id: number, fileInfo: Express.Multer.File) {
  const resizedFilePath = fileInfo.destination + `/${'100-100' + fileInfo.filename}`;
  await sharp(fileInfo.path)
    .resize(100, 100,)
    .toFile(resizedFilePath);
  const originalFileReadStream = createReadStream(fileInfo.path);
  const resizedFileReadStream = createReadStream(resizedFilePath);

  await s3Cloud.send(new PutObjectCommand({
    Bucket: envVars.s3Bucket,
    Key: fileInfo.filename,
    ACL: 'public-read',
    Body: originalFileReadStream,
  }));

  await s3Cloud.send(new PutObjectCommand({
    Bucket: envVars.s3Bucket,
    Key: '100-100' + fileInfo.filename,
    ACL: 'public-read',
    Body: resizedFileReadStream,
  }));
  
  originalFileReadStream.destroy();
  resizedFileReadStream.destroy();
  rm(fileInfo.path).catch(errorLogger.bind(null, { title: 'FILE REMOVAL ERROR' }));
  rm(resizedFilePath).catch(errorLogger.bind(null, { title: 'FILE REMOVAL ERROR' }));

  await this.updateProfileById(id, {
    avatarUrl: `100-100${fileInfo.filename}`,
    originalAvatarUrl: `${fileInfo.filename}`,
  });

  return `100-100${fileInfo.filename}`;
}

export { uploadAvatarById };
