import { createContext, useState } from 'react';

// Creating a context to store passwords globally
const PassContext = createContext();

// Creating the context provider
export function PassProvider({ children }) {

  // Using useState to keep track of password updates
  const [userPasswords, setUserPasswords] = useState([]);

  // A custom function for adding new passwords
  const addNewPassword = (newEmail, newPassword) => {
    setUserPasswords(
      [...userPasswords, { email: newEmail, password: newPassword }]
    );
  }

  // A custom function for deleting passwords
  const deletePassword = (id) => {
    setUserPasswords(userPasswords.filter((_, index) => index !== id));
  }

  return (
    // Passing all the passwords and functions into the context provider
    <PassContext.Provider value={{
      allPasswords: userPasswords,    // All the entered passwords of the user
      newPassword: addNewPassword,    // A function for storing new passwords
      deletePassword: deletePassword, // A function for deleting passwords
      setPassword: setUserPasswords   // The returned function from useState itself
    }}>
      {children}
    </PassContext.Provider>
  )
}

export default PassContext;
