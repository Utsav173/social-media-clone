import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/Login.jsx";
import Home from "./container/Home";
import { fetchUser } from "./utils/fetchUser";
import { useEffect } from "react";

function App() {

  const navigate = useNavigate();
  useEffect(() => {
  const user = fetchUser();
  if(!user) navigate('/login');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route path="login" element={<Login />} exact />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}

export default App;
