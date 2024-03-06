import { Navigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import PageLoader from "../components/UI/PageLoader";

import { useAppSelector } from "../redux/hooks";
import { selectAuth } from "../redux/slices/authSlice";

const LoginPage = () => {
  const auth = useAppSelector(selectAuth);

  if (auth.pending) return <PageLoader />;

  return auth.currentUser ? (
    <Navigate to="/account" replace state={{ path: location.pathname }} />
  ) : (
    <main className="common-main-container-styles">
      {/* center inner wrapper */}
      <div className="centered-container">
        <LoginForm />
      </div>
    </main>
  );
};

export default LoginPage;
