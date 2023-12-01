import "./ChatPage1.scss";
import SideBar from "../../components/SideBar/SideBar";

function Home() {
  return (
    <div className="chatbot-section">
      <div className="chat-cover1">
        <SideBar />
      </div>
      <div className="chat-cover2">
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/qpvamlnN1pZnbxact6NDG"
          width="100%"
          className="chat-section"
        ></iframe>
      </div>
    </div>
  );
}

export default Home;
