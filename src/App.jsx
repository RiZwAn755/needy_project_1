import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import HomePage from './pages/homepage';
import FloatingContactButtons from './components/floating-contact-buttons';

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans text-gray-900 flex flex-col">
        <Navbar />
        <FloatingContactButtons />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
