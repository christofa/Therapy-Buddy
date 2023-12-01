import "./Avater.scss";
import { Link } from "react-router-dom";

function Avater() {
  return (
    <div className="Avater">
      <div className="male-section">
        <Link to="/male-chatbot">
          <img src="/Images/male-bot.jpg" alt="" />
        </Link>
        <h2>Chris</h2>
      </div>

      <div className="female-section">
        <Link to="/female-chatbot">
          <img src="/Images/female-bot.png" alt="" />
        </Link>
        <h2>Grace</h2>
      </div>
    </div>
  );
}

export default Avater;
