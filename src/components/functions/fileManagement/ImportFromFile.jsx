import decryptionForImport from '../DecryptionForImport';

// An encrypted JSON file will be decrypted and loadaed
export default function importFromFile(setPassword, masterPassword) {

  // Preparing to recieve and read a JSON file 
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'application/json';

  // The JSON file will now be requested as a file upload
  fileInput.click();
  fileInput.onchange = () => {

    // The JSON file will be read
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.readAsText(file, 'UTF-8');
    reader.onload = readerEvent => {
      const content = readerEvent.target.result;

      // The JSON file will be sent for decryption
      decryptionForImport(content, setPassword, masterPassword);
    }
  }
}
