//import LoginForm from "../components/LoginForm";
import UserAccount from "../components/UserAccount";

const Account = () => {
  return (
    <main className="px-4 pt-8 pb-32 bg-slate-50">
      {/* center inner wrapper */}
      <div className="centered-container">
        {/*<LoginForm />*/}
        <UserAccount />
      </div>
    </main>
  );
};

export default Account;
