import ImportBtn from './controlButtons/ImportBtn';
import ExportBtn from './controlButtons/ExportBtn'
import SaveLocalBtn from './controlButtons/SaveToLocalStorageBtn';
import LoadLocalBtn from './controlButtons/LoadFromLocalStorageBtn';

const TopButtons = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-center mx-auto">LockUp Password Manager</span>
        <div className="mx-auto">
          <ul className="flex items-end flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="">
              <ExportBtn />
            </li>
            <li className="">
              <SaveLocalBtn />
            </li>
            <li className="">
              <ImportBtn />
            </li>
            <li className="">
              <LoadLocalBtn />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default TopButtons
