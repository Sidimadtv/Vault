import clickedForSetter from '../functions/passwordUtilities/ClickedForSetter';
import showPasswordPrompt from '../functions/passwordUtilities/ShowPasswordPrompt';

const ImportBtn = () => {

  return (
    // Importing passwords from an encrypted JSON file
    <button onClick={() => {clickedForSetter('ImportFromFile') && showPasswordPrompt()}} className="text-white font-bold hover:bg-blue-700 bg-red-500 rounded px-4 py-2 my-2 sm:my-0">
       <i class="fa fa-web" style="font-size:36px;color:#ffffff"></i>Restore a BackUp
    </button>
  )
}

export default ImportBtn
