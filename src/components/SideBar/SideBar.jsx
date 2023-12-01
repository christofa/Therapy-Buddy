import "./SideBar.scss";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="SideBar">
      <div>
        <div>
          <img src="/Images/male-bot.jpg" alt="" />
        </div>
        <Link to="/male-chatbot">
          <button> Chris </button>
        </Link>
      </div>

      <div>
        <div>
          <img src="/Images/female-bot.png" alt="" />
        </div>
        <Link to="/female-chatbot">
          <button> Grace </button>
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
