import './App.css';
// import Header from './Components/Header/Header';
import Header2 from './Components/Header/Header2';
import Home from './Components/Sections/Home/Home';
import About from './Components/Sections/About/About';
import Qualifications from './Components/Sections/Qualifications/Qualifications';
import Projects from './Components/Sections/Projects/Projects';
import Publications from './Components/Sections/Publications/Publications';
import Activities from './Components/Sections/Activities/Activities';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/**************** HEADER ****************/}
      <Header2 />

      {/**************** MAIN ****************/}
      <main className="main">
        {/**************** HOME SECTION ****************/}
        <section className="home section" id="home">
          <Home />
        </section>

        {/**************** ABOUT SECTION ****************/}
        <section className="about section" id="about">
          <About />
        </section>

        {/**************** QUALIFICATIONS SECTION ****************/}
        <section className="qualification section" id="qualification">
          <Qualifications />
        </section>

        {/**************** PROJECTS SECTION ****************/}
        <section className="projects section" id="projects">
          <Projects />
        </section>

        {/**************** PUBLICATIONS SECTION ****************/}
        <section className="publications section" id="publications">
          <Publications />
        </section>

        {/**************** ACTIVITIES SECTION ****************/}
        <section className="activities section" id="activities">
          <Activities />
        </section>
      </main>

      {/**************** FOOTER ****************/}
      <Footer/>

    </div>
  );
}

export default App;
