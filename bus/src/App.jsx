import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/NAvbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Router>
        <main className="w-full flex felx-col bg-neutral-50 min-h-screen">
          
          <Navbar/>


          <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>



        
      </main>
      </Router>
     
    </>
  );
};

export default App;
