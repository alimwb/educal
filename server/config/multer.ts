import { Request } from 'express';
import { tmpdir } from 'os';
import { extname } from 'path';
import { BadRequestErr } from '../helpers/errors';
import { randomBytes } from 'crypto';
import multer = require('multer');

const disk = multer.diskStorage({
  destination: (req: Request, file, cb) => {
    cb(null, tmpdir());
  },
  filename: (req: Request, file, cb) => {
    let name =
      randomBytes(8).toString('hex') +
      Date.now() +
      extname(file.originalname);

    cb(null, name);
  },
});

const upload = multer({
  storage: disk,
  limits: {
    fileSize: 2 * 1024 * 1024, // 2MB
  },
  fileFilter: (req: Request, file, cb: multer.FileFilterCallback) => {
    let validForamts = ['.jpg', '.jpeg', '.png', '.webp'];
    let fileFormat = extname(file.originalname).toLocaleLowerCase();

    if (!validForamts.includes(fileFormat)) {
      cb(new BadRequestErr('فرمت عکس آپلود شده معتبر نیست'));
    } else {
      cb(null, true);
    }
  },
});

export { upload as storeImgLocally };
