import { UserService } from "./user.service";
import { envVars, s3Cloud } from "../../config";
import { BadRequestErr } from "../../helpers/errors";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";

/**
 * Remove the avatar image of the logged in user
 * 
 * @param id The user's id to remove the avatar image of
 */

async function removeAvatarById(this: typeof UserService, id: number) {
  const user = await this.getUserById(id);

  if (!user.avatarUrl) {
    throw new BadRequestErr('هنوز تصویری آپلود نکردید');
  }

  await s3Cloud.send(new DeleteObjectCommand({
    Bucket: envVars.s3Bucket,
    Key: user.avatarUrl,
  }));

  await s3Cloud.send(new DeleteObjectCommand({
    Bucket: envVars.s3Bucket,
    Key: user.originalAvatarUrl as string,
  }));

  await this.updateProfileById(user._id, {
    avatarUrl: null,
    originalAvatarUrl: null,
  });
}

export { removeAvatarById };
