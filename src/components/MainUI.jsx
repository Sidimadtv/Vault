import PasswordForm from './dataInputUI/PasswordForm';
import StoredPasswords from './dataOutputUI/StoredPasswords';

const MainUI = () => {
  return (
    <main className="md:flex justify-around">
      <PasswordForm />
      <StoredPasswords />
    </main>
  )
}

export default MainUI
