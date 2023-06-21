import { useContext } from 'react';
import PassContext from '../contexts/PassContext';
import togglePassword from '../functions/passwordUtilities/TogglePassword';

// Props passed as Email, Password, and Id will be destructured
const PasswordLister = ({ email, password, id }) => {
  const { deletePassword } = useContext(PassContext);

  // Passwords will be hidden by stars until clicked
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
        <td scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">{email}</td>
        <td className="px-6 py-4 text-center" password={password} reveal='false' onClick={(e) => { togglePassword(e) }}>************</td>
        <td className="actionButtons text-right flex justify-end">
          <button className="bg-yellow-500 hover:bg-green-600 text-gray-700 font-bold py-1 px-2 my-2 rounded" onClick={() => navigator.clipboard.writeText(password)}>Copy</button>
          <button className="bg-yellow-500 hover:bg-green-600 text-gray-700 font-bold py-1 px-2 my-2 rounded" onClick={() => deletePassword(id)}>Delete</button>
        </td>
      </tr>
    </>
  )
}

export default PasswordLister
