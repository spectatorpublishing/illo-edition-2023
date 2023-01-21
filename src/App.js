import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Illos from './components/Illos';

function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/illos" element={<Illos />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
