import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Box from "@mui/material/"
import { ThemeProvider, createTheme } from '@mui/material/styles';


import "./App.css"

import NavHeader from "./components/NavHeader.js";
import Footer from "./components/Footer";

import HomePage from "./components/HomePage.js";
import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/ProjectsPage";
import FutoshikiPage from "./components/FutoshikiPage";
import AcademicPaperSearch from "./components/AcademicPaperSearchPage";
import WildfireDetection from "./components/WildfireDetection";
import DigitRecognition from "./components/DigitRecognitionPage"
import RPGGame from "./components/RPGGamePage";
import GameBoyZero from "./components/GameBoyZeroPage"
import VikingsEsports from "./components/VikingsEsportsPage"
import ThisWebsite from "./components/ThisWebsitePage";
import NotFound from "./components/NotFoundPage";

const THEME = createTheme({
  palette: {
    primary: {
      main: "#34ebcc",
      contrastText: "#000000" //button text white instead of black
    }
  },
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
              <Route path="projects/digitrecognition" element={<DigitRecognition />} />
              <Route path="projects/rpggame" element={<RPGGame />} />
              <Route path="projects/gameboyzero" element={<GameBoyZero />} />
              <Route path="projects/vikingsesports" element={<VikingsEsports />} />
              <Route path="projects/thiswebsite" element={<ThisWebsite />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));