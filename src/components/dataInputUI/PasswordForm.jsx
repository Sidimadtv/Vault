import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import PassContext from '../contexts/PassContext';
import generatePassword from '../functions/passwordUtilities/GeneratePassword';

const PasswordForm = () => {
  const { newPassword } = useContext(PassContext);

  // Using React-Form for form management
  const { register, handleSubmit, setValue } = useForm();

  // Newly entered credentials will be saved to global context when submitted
  const handleSave = (e) => {
    newPassword(e.email, e.password);
  }

  // A random password will be generated and sent to the password field
  const setRandomPassword = () => { const randomPassword = generatePassword();
    setValue('password', randomPassword);
  }

  return (
    <div className="w-full max-w-xs mx-auto">
      <form className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(handleSave)}>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
            Email / Username
          </label>
          <input required={true} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="email" type="text" placeholder="Username" {...register('email')} />
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input required={true} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="password" type="password" placeholder="******************" {...register('password')} />
          <p className="text-red-400 text-xs italic">Please choose a password.</p>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Store
          </button>
          <button className="inline-block align-baseline font-bold text-sm text-yellow-500 hover:text-yellow-800" href="#" onClick={(e) => { setRandomPassword(); e.preventDefault() }} >
            Generate Password
          </button>
        </div>
      </form>
    </div>
  )
}

export default PasswordForm
