import { useNavigate } from "react-router-dom";

function TelegramLogin() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/game");
  };

  return <button onClick={handleLogin}>Login with Telegram</button>;
}

export default TelegramLogin;
