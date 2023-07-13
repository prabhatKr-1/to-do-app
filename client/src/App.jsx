import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useContext, useEffect } from "react";
import { AuthContext } from "./main";
import axios from "axios";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";

function App() {
  const {  setUser, setIsAuth } = useContext(AuthContext);

  useEffect(() => {
    async function helper() {
      const { data } = await axios.get(
        "http://localhost:5000/api/v1/user/profile",
        {
          withCredentials: true,
        }
      );
      if (data.success) {
        setUser({ name: data.name, email: data.email });
        setIsAuth(true);
      } else {
        setUser({});
        setIsAuth(false);
      }
    }
    helper();
  }, [setUser, setIsAuth]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/me" element={<Profile />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Toaster />
    </Router>
  );
}
export default App;
