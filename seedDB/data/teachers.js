const crypto = require('crypto');
const bcrypt = require('bcryptjs');

const teachers = [
  {
    // _id: 1,
    fullName: 'کامیار حسنی',
    role: 'مدرس',
    profliePicUrl: null,
    tel: encrypt('09101234567'),
    email: encrypt('kamyar@example.com'),
    fullAddress: encrypt('ایران - تهران'),
    password: bcrypt.hashSync('12345678'),
    creditCardNum: encrypt('1122334455667788'),
  },
  {
    // _id: 2,
    fullName: 'حسین کمالی',
    role: 'مدرس',
    profliePicUrl: null,
    tel: encrypt('09101234568'),
    email: encrypt('hossein@example.com'),
    fullAddress: encrypt('ایران - تهران'),
    password: bcrypt.hashSync('12345678'),
    creditCardNum: encrypt('1122334455667781'),
  },
  {
    // _id: 3,
    fullName: 'سعید محمدی',
    role: 'مدرس',
    profliePicUrl: null,
    tel: encrypt('09101234569'),
    email: encrypt('saeid@example.com'),
    fullAddress: encrypt('ایران - تهران'),
    password: bcrypt.hashSync('12345678'),
    creditCardNum: encrypt('1122334455667782'),
  },
  {
    // _id: 4,
    fullName: 'کوروش اکبری',
    role: 'مدرس',
    profliePicUrl: null,
    tel: encrypt('09101234563'),
    email: encrypt('koroush@example.com'),
    fullAddress: encrypt('ایران - تهران'),
    password: bcrypt.hashSync('12345678'),
    creditCardNum: encrypt('1122334455667783'),
  },
  {
    // _id: 5,
    fullName: 'سیامک جوادی',
    role: 'مدرس',
    profliePicUrl: null,
    tel: encrypt('09101234564'),
    email: encrypt('siamak@example.com'),
    fullAddress: encrypt('ایران - تهران'),
    password: bcrypt.hashSync('12345678'),
    creditCardNum: encrypt('1122334455667785'),
  },
];

module.exports = teachers;

function encrypt(input) {
  if (input === null || input === undefined) {
    return null;
  }

  const cipher = crypto.createCipheriv(
    process.env.CIPHER_ALGORITHM,
    process.env.CIPHER_KEY,
    process.env.CIPHER_IV,
  );

  return cipher.update(input, 'utf-8', 'hex');
}
