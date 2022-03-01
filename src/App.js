import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Box from "@mui/material/"
import { ThemeProvider, createTheme } from '@mui/material/styles';

import "./App.css"

import NavHeader from "./components/NavHeader.js";

import HomePage from "./components/HomePage.js";
import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/ProjectsPage";
import FutoshikiPage from "./components/FutoshikiPage";
import AcademicPaperSearch from "./components/AcademicPaperSearchPage";
import WildfireDetection from "./components/WildfireDetection";
import NotFound from "./components/NotFoundPage";

const THEME = createTheme({
  typography: {
   "fontFamily": `"Montserrat"`,
   "fontSize": 20,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightMedium": 500,
  }
});


export default function App() {
  return (
    <div>
      <ThemeProvider theme={THEME}>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet" />
        <BrowserRouter>
        <NavHeader />
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="projects" element={<ProjectsPage />} />
              <Route path="projects/largefutoshikigeneration" element={<FutoshikiPage />} />
              <Route path="projects/academicpapersearch" element={<AcademicPaperSearch />} />
              <Route path="projects/wildfiredetection" element={<WildfireDetection />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));