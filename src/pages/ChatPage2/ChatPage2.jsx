import "./ChatPage2.scss";
import SideBar from "../../components/SideBar/SideBar";

function ChatPage2() {
  return (
    <div className="chatbot-section">
      <div className="chat-cover1">
        <SideBar />
      </div>
      <div className="chat-cover2">
        <iframe
          src="https://demo.diddo.chat/chatbot/a33275ee-fde9-42ac-8932-1c846ec145e7"
          id="a33275ee-fde9-42ac-8932-1c846ec145e7"
          className="chat-section"
        ></iframe>
      </div>
    </div>
  );
}

export default ChatPage2;
