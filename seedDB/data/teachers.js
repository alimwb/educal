const crypto = require('crypto');
const bcrypt = require('bcryptjs');

const teachers = [
  {
    teacherId: 1,
    firstName: 'کامیار',
    lastName: 'حسنی',
    role: 'مدرس',
    profliePicUrl: null,
    tel: encrypt('09101234567'),
    email: encrypt('kamyar@example.com'),
    fullAddress: encrypt('ایران - تهران'),
    password: bcrypt.hashSync('12345678'),
    creditCardNum: encrypt('1122334455667788'),
  },
  {
    teacherId: 2,
    firstName: 'حسین',
    lastName: 'کمالی',
    role: 'مدرس',
    profliePicUrl: null,
    tel: encrypt('09101234568'),
    email: encrypt('hossein@example.com'),
    fullAddress: encrypt('ایران - تهران'),
    password: bcrypt.hashSync('12345678'),
    creditCardNum: encrypt('1122334455667781'),
  },
  {
    teacherId: 3,
    firstName: 'سعید',
    lastName: 'محمدی',
    role: 'مدرس',
    profliePicUrl: null,
    tel: encrypt('09101234569'),
    email: encrypt('saeid@example.com'),
    fullAddress: encrypt('ایران - تهران'),
    password: bcrypt.hashSync('12345678'),
    creditCardNum: encrypt('1122334455667782'),
  },
  {
    teacherId: 4,
    firstName: 'کوروش',
    lastName: 'اکبری',
    role: 'مدرس',
    profliePicUrl: null,
    tel: encrypt('09101234563'),
    email: encrypt('koroush@example.com'),
    fullAddress: encrypt('ایران - تهران'),
    password: bcrypt.hashSync('12345678'),
    creditCardNum: encrypt('1122334455667783'),
  },
  {
    teacherId: 5,
    firstName: 'سیامک',
    lastName: 'جوادی',
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
