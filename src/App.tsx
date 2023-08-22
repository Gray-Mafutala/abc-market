import { Suspense } from "react";
import Routing from "./routes";
import Layout from "./pages/Layout";
import PageLoader from "./components/UI/PageLoader";

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Routing />
      </Suspense>
    </Layout>
  );
};

export default App;
