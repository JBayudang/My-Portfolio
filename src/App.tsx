import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Introduction />
        <AboutMe />
        <Skills />
        <WorkExperience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
