import Projects from './pages/Projects.js';
import Header from './components/Header';
import Education from './pages/Education.js';
import Experience from './pages/Experience.js';
import TopDesc from './pages/TopDesc.js';
import { Footer } from './components/Footer.js';
import Contact from './pages/Contact.js';


function App() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });

const hiddenElements = document.querySelectorAll(".hide");
hiddenElements.forEach((el) => observer.observe(el));

  return (
    <div className="App bg-red-50 dark:border-gray-700 border-8">
     <Header/>
     <div class="hide">
     <TopDesc/>
     </div>
     <div class="hide">
     <Projects/>
      </div>
     <div id="appAbout"class="grid overflow-hidden md:grid-cols-2 mx-auto md:gap-4 px-24 items-center h-full mt-12 hide">
      
      <div class="box h-full w-full mb-12 font-mono text-7xl flex items-center hide">
        <h1 class="hide">About</h1>
      </div>
      <div class="box col-start-1 md:col-end-2">
        <Education/>
      </div>
      <div class="box md:col-end-3 hide">
        <Experience/>
      </div>
     </div>
  
     <div>
      <Contact/>
     </div>
     
      <div>
      <Footer/>
     </div>
    </div>
  );
}

export default App;
