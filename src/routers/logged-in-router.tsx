import { isLoggedInVar } from "../apollo";

const LoggedInRouter: React.FC = () => {
  const onClick = () => {
    isLoggedInVar(false);
  };
  return (
    <div>
      <h1>logged In</h1>
      <button onClick={onClick}>Click to LoggedOut</button>
    </div>
  );
};

export default LoggedInRouter;
