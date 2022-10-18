import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Main from './Main/Main';
import Contact from "./Contacts/Contacts";
import TimeLine from './TimeLineJobs/TimeLine';
import Port from './Port/Port';
import Layout from "./LayOut/LayOut";



function App() {
  return (
    <BrowserRouter>
      <header>
        <Layout />
      </header>
      <main
        className="flex-shrink-0"
        style={{
          paddingTop: "8rem",
          paddingBottom: "8rem"
        }}
      >
        <React.Suspense fallback={<h6>Loading...</h6>}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="time" element={<TimeLine />} />
        <Route path="portfolio" element={<Port />} />
        <Route path="contact" element={<Contact />} />
          </Routes>
        </React.Suspense>
      </main>
  </BrowserRouter>
  );
}

export default App;
