// This function is used for exporting the encrypted JSON file
export default function saveAsJson(data) {

  // A blob will be initialized
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  Date.prototype.yyyymmddhhmmss = function() {   
    var yyyymmddhhmm = this.yyyymmddhhmm();   
    var ss = this.getSeconds() < 10 ? "0" + this.getSeconds() : this.getSeconds();   
    return ""
      .concat(yyyymmddhhmm).concat(ss); };  var d = new Date();

  // An anchor tag element will be initialized with passwords.json as the URL
  const link = document.createElement('a');
  link.download = 'V3_Passwords_Backup|-ByS!D!M@D-' + d;
  link.href = url;

  // The JSON file will be downloaded
  link.click();
}
