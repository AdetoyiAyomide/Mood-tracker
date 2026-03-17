import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from './components/Login'
import './App.css'

function App() {
    const [loading, setLoading] = useState(true);

     useEffect(() => {
    // simulate loading time before showing login
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer); // cleanup
  }, []);


  return (
   <BrowserRouter>
         {/* Loader overlay */}
      {loading && (
        <div className="bg-gradient-to-r from-[#f6f6fe] to-blue-200 fixed inset-0 flex items-center justify-center bg-white z-50">
          <div className="loader"></div>
        </div>
      )}

      {/* Render Login page only after loading is false */}
      {!loading && (
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/home" element={<Home />} /> */}
        </Routes>
      )}
    </BrowserRouter>
  )
}

export default App
