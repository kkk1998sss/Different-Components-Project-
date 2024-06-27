import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectDisplay from "./components/ProjectDisplay";
import Folders from "./components/Folders";
import explorer from "./Dummy-data/folderData";
import Signup from "./components/Signup";
import Backbutton from "./components/BackButton";
import OtpLogin from "./auth/OtpLogin";

function App() {
  return (
    <>
      <div className="App">
        <div className="">
          <Backbutton />
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<OtpLogin />} />
            <Route path="/ProjectDisplay" element={<ProjectDisplay />} />
            <Route path="/Folders" element={<Folders explorer={explorer} />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
