import { gql, useQuery } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Restaurants } from "../pages/client/restaurants";
import { meQuery } from "../__generated__/meQuery";

const ClientRouter = () => (
  <Routes>
    <Route path="/res" element={<Restaurants />} />
  </Routes>
);

const ME_QUERY = gql`
  query meQuery {
    me {
      id
      email
      role
      verified
    }
  }
`;

const LoggedInRouter: React.FC = () => {
  const { data, loading, error } = useQuery<meQuery>(ME_QUERY);

  if (!data || loading || error) {
    return (
      <div className=" h-screen flex justify-center items-center">
        <span className=" font-medium text-xl tracking-wide">loading...</span>
      </div>
    );
  }

  return <Router>{data.me.role === "Client" && <ClientRouter />}</Router>;
};

export default LoggedInRouter;
