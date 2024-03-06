import { Suspense, useEffect } from "react";
import Routing from "./routes";

import { useLocation } from "react-router-dom";

import Layout from "./pages/Layout";
import PageLoader from "./components/UI/PageLoader";

import { removeUser, setUser } from "./redux/slices/authSlice";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "./firebase";
import { useAppDispatch } from "./redux/hooks";

const App = () => {
  // monitoring user authentication
  const dispatch = useAppDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        const userSerialized = {
          id: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoUrl: user.photoURL,
        };

        dispatch(setUser(userSerialized));
      } else {
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // to scroll to top when route changes
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);

  return (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Routing />
      </Suspense>
    </Layout>
  );
};

export default App;
