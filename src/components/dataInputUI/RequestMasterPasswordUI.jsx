import { useForm } from 'react-hook-form';
import { useRef, useContext } from 'react';
import hideMasterPasswordUI from '../functions/passwordUtilities/HidePasswordPrompt';
import saveToLocalStorage from '../functions/fileManagement/SaveToLocalStorage';
import exportToFile from '../functions/fileManagement/ExportToFile';
import importFromFile from '../functions/fileManagement/ImportFromFile';
import loadFromLocalStorage from '../functions/fileManagement/LoadFromLocalStorage';
import PassContext from '../contexts/PassContext';

const RequestMasterPasswordUI = () => {
  const clickedForRef = useRef();
  const { register, handleSubmit } = useForm();
  const { allPasswords, setPassword } = useContext(PassContext);

  const handleSave = (e) => {
    const masterPassword = e.password;
    if (clickedForRef.current.getAttribute('clicked-for') === 'ImportFromFile') {
      importFromFile(setPassword, masterPassword);
    } else if (clickedForRef.current.getAttribute('clicked-for') === 'ExportToFile') {
      exportToFile(allPasswords, masterPassword);
    } else if (clickedForRef.current.getAttribute('clicked-for') === 'SaveToLocalStorage') {
      saveToLocalStorage(allPasswords, masterPassword);
    } else if (clickedForRef.current.getAttribute('clicked-for') === 'LoadFromLocalStorage') {
      loadFromLocalStorage(masterPassword, setPassword);
    }
    hideMasterPasswordUI();
  }

  // Create event listener to hide the master password UI when the user clicks outside of it
  document.addEventListener('click', (e) => {
    if (e.target.id === 'modalOverflow') {
      hideMasterPasswordUI();
    }
  });

  // Create an event listener to hide the master password UI when the user presses the escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      hideMasterPasswordUI();
    }
  });

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" id="masterPassUI" style={{display: 'none'}} clicked-for="" ref={clickedForRef} >
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div id="modalOverflow" className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-gray-500 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-yellow-600 sm:mx-0 sm:h-10 sm:w-10">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg font-bold leading-6 text-white" id="modal-title">Enter a master password</h3>
                  <div className="mt-2">
                    <p className="text-sm text-white">This master password will be used to encrypt all your existing passwords. Make sure you choose a password you will remember as your master password will be needed for decryption</p>
                  </div>
                </div>
              </div>
            </div>
            <form className="bg-gray-500 px-4 py-3 sm:flex sm:px-6" onSubmit={handleSubmit(handleSave)}>
              <input required type="password" placeholder="**************" name="masterPasswordInput" id="masterPasswordValue" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register('password')} />
              <button onClick={() => {hideMasterPasswordUI()}} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-bold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm" id="masterPasswordAbort">Abort</button>
              <button type="submit" id="masterPasswordSubmit" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-yellow-600 text-base font-bold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestMasterPasswordUI
