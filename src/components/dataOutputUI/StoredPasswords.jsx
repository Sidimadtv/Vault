import { useContext } from 'react';
import PasswordTable from './PasswordTable';
import PassContext from '../contexts/PassContext';

// If no passwords are available "No passwords stored" will be displayed, else, they will be passed as props
const StoredPasswords = () => {
  const { allPasswords } = useContext(PassContext);

  return (
    <section className="passwordList mx-auto">
      {allPasswords.length == 0 ? 
        <div className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4"><h5 className="emptyPlaceholder font-bold text-white">No passwords stored, start saving some passwords and they will appear here</h5></div> : <PasswordTable data={allPasswords} />}
    </section>
  )
}

export default StoredPasswords
