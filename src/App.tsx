import { Suspense } from "react";
import Layout from "./pages/Layout";
import Routing from "./routes";

const App = () => {
  return (
    <Layout>
      <Suspense
        fallback={<div className="mt-8 text-center">Page Loading...</div>}
      >
        <Routing />
      </Suspense>
    </Layout>
  );
};

export default App;
