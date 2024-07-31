import { Route, Routes } from 'react-router-dom';
import './App.css'
import { Navbar } from './components/Navbar';
import { Home, Paciente, Enfermedad, ExamenFisico, Diagnostico, Tratamiento, LoginPage, RegisterPage } from './components/pages';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/paciente' element={<Paciente/>}></Route>
        <Route path='/enfermedad' element={<Enfermedad/>}></Route>
        <Route path='/examenfisico' element={<ExamenFisico/>}></Route>
        <Route path='/diagnostico' element={<Diagnostico/>}></Route>
        <Route path='/tratamiento' element={<Tratamiento/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App
