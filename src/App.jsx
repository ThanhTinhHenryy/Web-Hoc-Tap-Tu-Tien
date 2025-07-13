import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Hero from "./components/Hero/Hero";
import Welcome from "./pages/Welcome";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ChooseAvatar from "./pages/Auth/ChooseAvatar";
import HomePage from "./pages/HomePage";
import Introduction from "./pages/Introduction";
import Choose from "./pages/TuLuyen/Choose";
import ChooseYourOrigin from "./pages/TuLuyen/ChooseYourOrigin";
import CultivationLevels from "./pages/TuLuyen/CultivationLevels";
import Exercises from "./pages/TuLuyen/Exercises";
import Training from "./pages/TuLuyen/Training";
import MentalTraining from "./pages/TuLuyen/mentaltraining";
import EnergyTraining from "./pages/TuLuyen/energytraining";
import PhysicalTraining from "./pages/TuLuyen/physicaltraining";
import MemoryGame from "./pages/ThiLuyen/MemoryGame";
import LinhTuLibrary from "./pages/ThuVienLinhTu/LinhTuLibrary";
// import exerciseQuestions from "./data/exercises.js";
import ReviewExercises from "./pages/TuLuyen/ReviewExercises";
import CreateQuestion from "./pages/TuLuyen/CreateQuestion";
import PracticeQuestions from "./pages/TuLuyen/PracticeQuestions";
import PracticeGoal from "./pages/TuLuyen/PracticeGoal";
import ChooseYourPath from "./pages/TuLuyen/ChooseYourPath";
import PathQuestions from "./pages/TuLuyen/PathQuestions";
import PathInstructions from "./pages/TuLuyen/PathInstructions";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/choose-avatar" element={<ChooseAvatar />} />
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
          <Route path="/tu-luyen/practice-goal" element={<PracticeGoal />} />
          <Route path="/tu-luyen/choose-your-path" element={<ChooseYourPath />} />
          <Route
            path="/tu-luyen/huan-luyen/mental"
            element={<MentalTraining />}
          />
          <Route
            path="/tu-luyen/huan-luyen/energy"
            element={<EnergyTraining />}
          />
          <Route
            path="/tu-luyen/huan-luyen/physical"
            element={<PhysicalTraining />}
          />
          <Route path="/tu-luyen/instructions/:pathId" element={<PathInstructions />} />
          <Route path="/tu-luyen/:pathId" element={<PathQuestions />} />
          <Route path="/tu-luyen/luyen-tap-lai" element={<ReviewExercises />} />
          <Route path="/tu-luyen/tao-cau-hoi" element={<CreateQuestion />} />
          <Route
            path="/tu-luyen/luyen-tap-cau-hoi"
            element={<PracticeQuestions />}
          />
          <Route path="/thi-luyen" element={<MemoryGame />} />
          <Route path="/thu-vien-linh-tu" element={<LinhTuLibrary />} />
          <Route path="/tai-lieu" element={<LinhTuLibrary />} />
          <Route path="/gioi-thieu" element={<Introduction />} />
          <Route path="/" element={<Hero />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
