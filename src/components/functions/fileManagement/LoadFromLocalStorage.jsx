import decryptionForImport from '../DecryptionForImport';

export default function loadFromLocalStorage(masterPassword, setPassword) {
  const data = localStorage.getItem('V3_Passwords_Backup|-ByS!D!M@D-');

  // Check if there are any passwords stored in local storage
  if (!data) {
    alert('No passwords found in local storage');
    return;
  }

  // The encrypted passwords are decrypted using the master password
  decryptionForImport(data, setPassword, masterPassword);
}
