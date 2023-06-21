import CryptoJs from 'crypto-js';
import decryptionAlgorithm from './cryptography/DecryptionAlgorithm';

// This is the function that will be used when passwords are imported to the webapp
export default function decryptionForImport(dataToBeImported, passwordSetter, masterPassword) {

  // The master password will be hashed with SHA3
  const sha3 = CryptoJs.SHA3(masterPassword).toString();

  // The JSON file will be parsed
  const encryptedPasswords = JSON.parse(dataToBeImported);

  // If the value of 'SHA3' matches the SHA3 hash of the master password
  if (encryptedPasswords.sha3 === sha3) {

    // Each and every key-value pair in the 'passwords' key will be decrypted & saved
    encryptedPasswords.passwords.forEach(credential => {
      passwordSetter(prev => [...prev, {
        email: decryptionAlgorithm(credential.email, masterPassword),
        password: decryptionAlgorithm(credential.password, masterPassword)
      }])
    })
  } else {
    // Else, nothing will happen except an alert
    alert('Wrong master password');
  }
}
