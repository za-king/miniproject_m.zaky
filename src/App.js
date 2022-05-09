import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./admin/AdminDashboard";
import Result from "./components/Result";
import Login from "./components/Login";
import { UserContextProvider } from "./helper/UserContext";
import { QuizNameContextProvider } from "./helper/QuizNameContext";
import ProtectRouter from "./protectrouter/ProtectRouter";
import AdminProtectRoute from "./protectrouter/AdminProtectRoute";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import QuizDetail from "./components/QuizDetail";
import AddQuiz from "./admin/AddQuiz";
import EditQuiz from "./admin/EditQuiz";
import DetailQuiz from "./admin/DetailQuiz";
function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <QuizNameContextProvider>
          <Navbar />
          <Routes>
            <>
              <Route element={<ProtectRouter />}>
                <Route path="/dashboard" element={<Dashboard />} />
               
                <Route path="/" element={<HomePage />} />
                <Route path="result/:id" element={<Result />} />
              </Route>

              <Route element={<AdminProtectRoute />} >
              <Route path="/admindashboard" element={<AdminDashboard />} />
              <Route path="/addquiz" element={<AddQuiz />} />
                <Route path="/editquiz/:id" element={<EditQuiz />} />
                <Route path="/detailquiz/:id" element={<DetailQuiz />} />
                <Route path="/quizdetail/:id" element={<QuizDetail />} />
              </Route>

              
              <Route index path="login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </>
          </Routes>
        </QuizNameContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
