import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Home from './components/Home';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {

   return (
    
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>} />
          <Route path="login" element={<LoginPage/>} />
          <Route path="signup" element={<SignupPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
