import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Users from "./components/Users";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Register />
      <Login />
      <Users />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
