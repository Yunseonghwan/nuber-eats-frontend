import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import { useMe } from "../hooks/useMe";
import { NotFound } from "../pages/client/404";

import { Restaurants } from "../pages/client/restaurants";

const ClientRouter = () => (
  <Routes>
    <Route path="/" element={<Restaurants />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const LoggedInRouter: React.FC = () => {
  const { data, loading, error } = useMe();

  if (!data || loading || error) {
    return (
      <div className=" h-screen flex justify-center items-center">
        <span className=" font-medium text-xl tracking-wide">loading...</span>
      </div>
    );
  }

  return (
    <Router>
      <Header />
      {data.me.role === "Client" && <ClientRouter />}
    </Router>
  );
};

export default LoggedInRouter;
