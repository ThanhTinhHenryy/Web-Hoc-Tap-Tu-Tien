import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Hero from "./components/Hero/Hero";
import Welcome from "./pages/Welcome";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import HomePage from "./pages/HomePage";
import Choose from "./pages/TuLuyen/Choose";
import ChooseYourOrigin from "./pages/TuLuyen/ChooseYourOrigin";
import CultivationLevels from "./pages/TuLuyen/CultivationLevels";
import Exercises from "./pages/TuLuyen/Exercises";
import Training from "./pages/TuLuyen/Training";
import MentalTraining from "./pages/TuLuyen/MentalTraining";
import EnergyTraining from "./pages/TuLuyen/EnergyTraining";
import PhysicalTraining from "./pages/TuLuyen/PhysicalTraining";
import MemoryGame from "./pages/ThiLuyen/MemoryGame";
import LinhTuLibrary from "./pages/ThuVienLinhTu/LinhTuLibrary";
// import exerciseQuestions from "./data/exercises.js";
import ReviewExercises from "./pages/TuLuyen/ReviewExercises";
import CreateQuestion from "./pages/TuLuyen/CreateQuestion";
import PracticeQuestions from "./pages/TuLuyen/PracticeQuestions";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/tu-luyen" element={<Choose />} />
          <Route path="/tu-luyen/co-ban" element={<ChooseYourOrigin />} />
          <Route
            path="/tu-luyen/co-ban/healing-cultivator"
            element={<CultivationLevels />}
          />
          <Route
            path="/tu-luyen/co-ban/healing-cultivator/exercises/:levelId"
            element={<Exercises />}
          />
          <Route path="/tu-luyen/huan-luyen" element={<Training />} />
          <Route path="/tu-luyen/huan-luyen/mental" element={<MentalTraining />} />
          <Route path="/tu-luyen/huan-luyen/energy" element={<EnergyTraining />} />
          <Route path="/tu-luyen/huan-luyen/physical" element={<PhysicalTraining />} />
          <Route path="/tu-luyen/luyen-tap-lai" element={<ReviewExercises />} />
          <Route path="/tu-luyen/tao-cau-hoi" element={<CreateQuestion />} />
          <Route path="/tu-luyen/luyen-tap-cau-hoi" element={<PracticeQuestions />} />
          <Route path="/thi-luyen" element={<MemoryGame />} />
          <Route path="/thu-vien-linh-tu" element={<LinhTuLibrary />} />
          <Route path="/" element={<Hero />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
