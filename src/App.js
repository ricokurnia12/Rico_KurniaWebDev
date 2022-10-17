import { Navbar } from './Components/Navbar';
import Footer from './Components/Footer';
import { Router } from './Routes/';
import css from './style/main.css';

function App() {
  return (
    <div>
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
