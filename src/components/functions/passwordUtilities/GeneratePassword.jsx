// A function used to generate a pseudorandom password
export default function generatePassword() {

  // The length of the password
  const length = 16;

  // The password will be built using these characters
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

  // The password will be saved to retVal
  let retVal = "";
  for (let i = 0, n = charset.length; i < length; ++i) {

    // A random character will be chosen from the charset (length) times
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
