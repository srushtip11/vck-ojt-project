import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CoursePage from "./pages/CoursesPage";
import './styles/pages.css'

const App = () => {
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/courses" element={<CoursePage/>}/>

        </Routes>
      </Router>
    </div>
  )
}

export default App;
