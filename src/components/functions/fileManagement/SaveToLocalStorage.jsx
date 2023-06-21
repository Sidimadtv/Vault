import encryptionForExport from '../../functions/EncryptionForExport';

export default function saveToLocalStorage(allPasswords, masterPassword) {

  // Passwords are encrypted using the master password
  const data = encryptionForExport(allPasswords, masterPassword);

  // The encrypted passwords are saved to local storage
  localStorage.setItem('passwords', data);
}
