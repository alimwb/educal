import { UserService } from './user.service';
import { s3Cloud } from '../../config';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { envVars } from '../../config';
import { rm } from 'fs/promises';
import { createReadStream } from 'fs';

/**
 * Upload user's avatar image.
 * 
 * @param id The user's id to upload the avatar for
 * @param fileInfo Uploaded file info (stored locally), populated by multer.
 * @returns relatve url to the image.
 */

async function uploadAvatarById(this: typeof UserService, id: string, fileInfo: Express.Multer.File) {
  const imgUrl = `/api/v1/img/${fileInfo.filename}`;
  const fileReadStream = createReadStream(fileInfo.path);

  await s3Cloud.send(new PutObjectCommand({
    Bucket: envVars.s3Bucket,
    Key: fileInfo.filename,
    ACL: 'public-read',
    Body: fileReadStream,
  }));
  
  fileReadStream.destroy();
  rm(fileInfo.path);

  await this.updateProfileById(id, {
    avatarUrl: imgUrl,
  });

  return imgUrl;
}

export { uploadAvatarById };
