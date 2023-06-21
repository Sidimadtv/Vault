import clickedForSetter from '../functions/passwordUtilities/ClickedForSetter';
import showPasswordPrompt from '../functions/passwordUtilities/ShowPasswordPrompt';

// Decrypting and loading all encrypted passwords from local storage
const LoadFromLocalStorageBtn = () => {
  const data = localStorage.getItem('passwords');

  const checkForData = () => {
    if (data) {
      return true;
    } else {
      alert('No passwords found in local storage');
      return false;
    }
  }

  return (
    // Passwords stored in local storage will be decrypted and loaded when clicked
    <button onClick={() => checkForData() && clickedForSetter('LoadFromLocalStorage') && showPasswordPrompt()} className="text-black font-bold hover:bg-yellow-600 bg-yellow-500 rounded px-2 py-1 my-2 sm:my-0">
      Import from browser storage
    </button>
  )
}

export default LoadFromLocalStorageBtn
