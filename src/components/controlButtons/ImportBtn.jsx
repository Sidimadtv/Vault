import clickedForSetter from '../functions/passwordUtilities/ClickedForSetter';
import showPasswordPrompt from '../functions/passwordUtilities/ShowPasswordPrompt';

const ImportBtn = () => {

  return (
    // Importing passwords from an encrypted JSON file
    <button onClick={() => {clickedForSetter('ImportFromFile') && showPasswordPrompt()}} className="text-white font-bold hover:bg-blue-600 bg-red-500 rounded px-2 py-1 my-2 sm:my-0">
      Restore a BackUp
    </button>
  )
}

export default ImportBtn
