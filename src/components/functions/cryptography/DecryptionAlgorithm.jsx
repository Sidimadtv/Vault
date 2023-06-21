import CryptoJs from 'crypto-js';

// Decrypts a given cipher using the master password with AES
export default function decryptionAlgorithm(cipher, masterPass) {
  const bytes = CryptoJs.AES.decrypt(cipher, masterPass);
  const originalText = bytes.toString(CryptoJs.enc.Utf8);
  return originalText;
}
