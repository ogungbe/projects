import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import DegreesPage from './components/Degreepage';
import SingleDegreePage from './components/singledeg';
import Navbar from './components/navbar';
import CreateDegreePage from './components/newdeg'; 
import CohortPage from './components/cohort';
import CohortDetailPage from './components/singcohort'
import CreateCohortPage from './components/newcohort'
import ModulePage from './components/modulepage'
import SingleModulePage from './components/singlemod'
import CohortModulePage from './components/cohortmod'
import CreateModulePage from './components/createmod'
import Homepage from './components/homepage';
import StudentPage from './components/students';
import NewStudentPage from './components/newstudent';
import SetGradePage from './components/setgrade';



function App() {
  return (
    <Router>
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path="/" element={< Homepage/>} />
          <Route path="/degreespage" element={<DegreesPage />} />
          <Route path="/degree/:shortcode" element={<SingleDegreePage />} />
          <Route path="/newdeg" element={<CreateDegreePage />} /> 
          <Route path="/cohort" element={<CohortPage />} /> 
          <Route path="/cohort/:cohortFlag" element={<CohortDetailPage />} />
          <Route path="/newcohort" element={<CreateCohortPage />} />
          <Route path="/module" element={<ModulePage />} />
          <Route path="/module/:modulecode" element={<SingleModulePage />} />
          <Route path="/cohort/:cohortCode/modules" element={<CohortModulePage />} />
          <Route path="/createmod" element={<CreateModulePage />} />
          <Route path="/student/:studentcode" element={<StudentPage />} />
          <Route path="/newstudent" element={<NewStudentPage />} />
          <Route path="/:studentcode/setgrade/:grade_id" element={<SetGradePage />} />

          




        </Routes>
      </header>
    </Router>
  );
}

export default App;
