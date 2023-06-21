import clickedForSetter from '../functions/passwordUtilities/ClickedForSetter';
import showPasswordPrompt from '../functions/passwordUtilities/ShowPasswordPrompt';

const ExportBtn = () => {

  return (
    // Exporting all passwords to an encrypted JSON file when clicked
    <button onClick={() => {clickedForSetter('ExportToFile') && showPasswordPrompt()}} className="text-white font-bold hover:bg-blue-700 bg-red-500 rounded px-4 py-2 my-2 sm:my-0">
      <i class="fa fa-data"></i>-Back Up Now
    </button>
  )
}

export default ExportBtn
