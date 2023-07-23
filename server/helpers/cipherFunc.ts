import crypto = require('crypto');
import { envVars } from '../config';

function encrypt(input?: string | null) {
  if (input === null || input === undefined) {
    return null;
  }

  const cipher = crypto.createCipheriv(
    envVars.cipherAlgorithm,
    envVars.cipherKey,
    envVars.cipherIV,
  );

  return cipher.update(input, 'utf-8', 'hex');
}

function decrypt(input?: string | null) {
  if (input === null || input === undefined) {
    return null;
  }
  
  const decipher = crypto.createDecipheriv(
    envVars.cipherAlgorithm,
    envVars.cipherKey,
    envVars.cipherIV,
  );

  return decipher.update(input, 'hex', 'utf-8');
}

export {
  encrypt,
  decrypt
}
