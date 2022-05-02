import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./admin/AdminDashboard";
import Result from "./components/Result";
import Login from "./components/Login";
import { QuizContextProvider } from "./helper/QuizContext";
import { QuizNameContextProvider } from "./helper/QuizNameContext";
import ProtectRouter from "./protectrouter/ProtectRouter";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import HomePage from './pages/HomePage'
import QuizDetail from "./components/QuizDetail";
import AddQuiz from "./admin/AddQuiz";
import EditQuiz from "./admin/EditQuiz";
import DetailQuiz from "./admin/DetailQuiz";
function App() {
  return (
    <BrowserRouter>
      <QuizNameContextProvider>
        
      <Navbar  />
        <Routes>
          <>
          
          <Route element={<ProtectRouter />}>


            
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/addquiz" element={<AddQuiz />} />
            <Route path="/editquiz/:id" element={<EditQuiz />} />
            <Route path="/detailquiz/:id" element={<DetailQuiz />} />
            <Route path="/quizdetail/:id" element={<QuizDetail />} />
            <Route path="/" element={<HomePage />} />
            <Route path="result/:id" element={<Result />} />
          </Route>

          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route index path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          </>
        </Routes>
        
      </QuizNameContextProvider>
    </BrowserRouter>
  );
}

export default App;
