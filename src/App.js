import "./App.css";
import Navbar from "./pages/Shared/Navbar/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import RequireAuth from "./pages/Login/RequireAuth";
import { ThemeProvider } from "./ThemeContext/ThemeContext";
import Background from "./pages/Shared/Theme/Background/Background";
import Appointment from "./pages/Appointment/Appointment/Appointment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import MyAppointments from "./pages/Dashboard/MyAppointments/MyAppointments";
import MyReview from './pages/Dashboard/MyReview/MyReview';
import Users from "./pages/Dashboard/Users/Users";
import RequireAdmin from "./pages/Login/RequireAdmin";

function App() {
  return (
    <div>
      <ThemeProvider>
        <Background>
          <div className="max-w-7xl mx-auto">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="about"
                element={
                  <RequireAuth>
                    <About />
                  </RequireAuth>
                }
              />
              <Route
                path="appointment"
                element={
                  <RequireAuth>
                    <Appointment />
                  </RequireAuth>
                }
              />
              <Route
                path="dashboard"
                element={
                  <RequireAuth>
                    <Dashboard />
                  </RequireAuth>
                }
              >
                <Route index element={<MyAppointments/>}></Route>
                <Route path="review" element={<MyReview/>}></Route>
                <Route path="user" element={<RequireAdmin><Users/></RequireAdmin>}></Route>
              </Route>

              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Routes>
          </div>
        </Background>
      </ThemeProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
