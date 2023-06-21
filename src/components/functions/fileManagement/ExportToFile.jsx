import encryptionForExport from '../EncryptionForExport';
import saveAsJson from './SaveAsJson';

// Saves an encrypted store of emails and passwords as a JSON file
export default function exportToFile(arrayOfPasswords, masterPassword) {

  // Do nothing if no password is supplied
  if (masterPassword == null) {
    return
  }

  // The emails and passwords will be encrypted using the master password
  const data = encryptionForExport(arrayOfPasswords, masterPassword)

  // The encrypted emails and passwords will be exported as a JSON file
  saveAsJson(data);
}
