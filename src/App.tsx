import { Suspense, useEffect } from "react";

import { setPending, setUser, removeUser } from "./redux/slices/authSlice";
import { useAppDispatch } from "./redux/hooks";
import { auth, onAuthStateChanged } from "./firebase";

import Routing from "./routes";
import Layout from "./pages/Layout";
import PageLoader from "./components/UI/PageLoader";

const App = () => {
  // monitoring user authentication
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("from useEffect App");

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("from onAuthStateChanged - user:", user);

      dispatch(setPending(true));

      if (user) {
        /* set user only if currentUser = null, i.e. only at App launch, 
            so as not to update the store/auth/currentUser at login. */
        //currentUser === null &&
        dispatch(
          setUser({
            id: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoUrl: user.photoURL,
          })
        );
      } else {
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
  }, [auth, dispatch]);

  return (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Routing />
      </Suspense>
    </Layout>
  );
};

export default App;
