// This function is used for exporting the encrypted JSON file
export default function saveAsJson(data) {

  // A blob will be initialized
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  // An anchor tag element will be initialized with passwords.json as the URL
  const link = document.createElement('a');
  link.download = 'passwords.json';
  link.href = url;

  // The JSON file will be downloaded
  link.click();
}
