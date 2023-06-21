import CryptoJs from 'crypto-js';

// Encrypts a given password/email using the master password with AES
export default function encryptionAlgorithm(text, key) {
  const bytes = CryptoJs.enc.Utf8.parse(text);
  const encrypted = CryptoJs.AES.encrypt(bytes, key).toString();
  return encrypted;
}
