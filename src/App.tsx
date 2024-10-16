import Banner from "./components/banner";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Input from "./components/input";
import Chat from "./components/chat";
import { useCurrentChat } from "./context/currentChatContext";

function App() {

  const {chat} = useCurrentChat()

  return (
    <div className="bg-[#121312] text-zinc-50 min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 overflow-auto relative">
          {chat == undefined ? <Banner /> : <Chat />}
          <Input />
        </div>
      </div>
    </div>
  );
}

export default App;
