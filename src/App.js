import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PhoneList from './Pages/PhoneList';

function App() {
  return (
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PhoneList/>} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
