import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateAccount from "../pages/create-account";
import Login from "../pages/loginx";

const LoggedOutRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default LoggedOutRouter;
