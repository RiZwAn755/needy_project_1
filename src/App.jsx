import { LazyMotion } from 'framer-motion';
import Navbar from './components/navbar';
import Footer from './components/footer';
import HomePage from './pages/homepage';
import FloatingContactButtons from './components/floating-contact-buttons';

const loadMotionFeatures = () => import('./motion-features').then((mod) => mod.default);

function App() {
  return (
    <LazyMotion features={loadMotionFeatures} strict>
      <div className="min-h-screen font-sans text-gray-900 flex flex-col">
        <Navbar />
        <FloatingContactButtons />
        <main className="flex-grow">
          <HomePage />
        </main>
        <Footer />
      </div>
    </LazyMotion>
  );
}

export default App;
