const crypto = require('crypto');
const bcrypt = require('bcryptjs');

const users = [
  {
    // _id: 1,
    firstName: 'میثم',
    lastName: 'رحمانی',
    tel: encrypt('09012345678'),
    nationalId: encrypt('0123456789'),
    password: bcrypt.hashSync('12345678', 16),
    email: encrypt('meysam@example.com'),
    avatarUrl: null,
    avatarOriginal: null,
    joined: Date.now(),
  },
  {
    // _id: 2,
    firstName: 'حامد',
    lastName: 'وکیلی',
    tel: encrypt('09012345679'),
    nationalId: encrypt('0123456780'),
    password: bcrypt.hashSync('12345678', 16),
    email: encrypt('hamed@example.com'),
    avatarUrl: null,
    avatarOriginal: null,
    joined: Date.now(),
  },
  {
    // _id: 3,
    firstName: 'احسان',
    lastName: 'هنرمند',
    tel: encrypt('09012345670'),
    nationalId: encrypt('0123456781'),
    password: bcrypt.hashSync('12345678', 16),
    email: encrypt('ehsan@example.com'),
    avatarUrl: null,
    avatarOriginal: null,
    joined: Date.now(),
  },
  {
    // _id: 4,
    firstName: 'نازنین',
    lastName: 'ولی پور',
    tel: encrypt('09012345671'),
    nationalId: encrypt('0123456782'),
    password: bcrypt.hashSync('12345678', 16),
    email: encrypt('nazanin@example.com'),
    avatarUrl: null,
    avatarOriginal: null,
    joined: Date.now(),
  },
  {
    // _id: 5,
    firstName: 'محدثه',
    lastName: 'جمکرانی',
    tel: encrypt('09012345672'),
    nationalId: encrypt('0123456783'),
    password: bcrypt.hashSync('12345678', 16),
    email: encrypt('mohadeseh@example.com'),
    avatarUrl: null,
    avatarOriginal: null,
    joined: Date.now(),
  },
]

module.exports = users;

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
