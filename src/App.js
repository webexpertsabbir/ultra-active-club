import logo from './logo.svg';
import './App.css';
import Activities from './components/Activities/Activities';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Activities></Activities>
    </div>
  );
}

export default App;
