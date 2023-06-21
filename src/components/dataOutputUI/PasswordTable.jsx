import PasswordLister from './PasswordLister';

// An array of emails and passwords will be taken as props and passed onto PasswordLister for iteration
const PasswordTable = ({ data }) => {
  return (
    <div className="relative shadow-md sm:rounded-lg">
      <table className="md:w-full text-sm text-left text-gray-500 dark:text-gray-400 w-2/3 mx-auto">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Email / Username</th>
            <th scope="col" className="px-6 py-3 text-center">Password (Click to reveal)</th>
            <th scope="col" className="px-6 py-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return <PasswordLister key={index} id={index} email={item.email} password={item.password} />
          })}
        </tbody>
      </table>
    </div>
  )
}

export default PasswordTable
