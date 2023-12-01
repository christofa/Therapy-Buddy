import ChatPage1 from "./pages/ChatPage1/ChatPage1";
import ChatPage2 from "./pages/ChatPage2/ChatPage2";
import LoginPage from "./pages/LoginPage/Login";
import RegisterPage from "./pages/RegisterPage/Register";
import AvaterPage from "./pages/AvaterPage/Avater";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "/avater",
      element: <AvaterPage />,
    },
    {
      path: "/male-chatbot",
      element: <ChatPage1 />,
    },
    {
      path: "/female-chatbot",
      element: <ChatPage2 />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
