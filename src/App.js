import logo from './logo.svg';
import './App.css';
import Activities from './components/Activities/Activities';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Question from './components/Question/Question';

function App() {
  return (
    <div>
      <Activities></Activities>
      <Question></Question>
    </div>
  );
}

export default App;
