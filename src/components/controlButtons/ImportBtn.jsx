import clickedForSetter from '../functions/passwordUtilities/ClickedForSetter';
import showPasswordPrompt from '../functions/passwordUtilities/ShowPasswordPrompt';

const ImportBtn = () => {

  return (
    // Importing passwords from an encrypted JSON file
    <button onClick={() => {clickedForSetter('ImportFromFile') && showPasswordPrompt()}} className="text-black font-bold hover:bg-yellow-600 bg-yellow-500 rounded px-2 py-1 my-2 sm:my-0">
      Import from file
    </button>
  )
}

export default ImportBtn
