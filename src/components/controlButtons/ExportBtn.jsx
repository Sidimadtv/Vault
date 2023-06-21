import clickedForSetter from '../functions/passwordUtilities/ClickedForSetter';
import showPasswordPrompt from '../functions/passwordUtilities/ShowPasswordPrompt';

const ExportBtn = () => {

  return (
    // Exporting all passwords to an encrypted JSON file when clicked
    <button onClick={() => {clickedForSetter('ExportToFile') && showPasswordPrompt()}} className="text-black font-bold hover:bg-yellow-600 bg-yellow-500 rounded px-2 py-1 my-2 sm:my-0">
      Export to file
    </button>
  )
}

export default ExportBtn
