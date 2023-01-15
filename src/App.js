
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navcomp from './components/navcomp';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Homepag from './components/homepag';
import Acercademipag from './components/acercademipag';
import Estudiosycursos from './components/estudiosycursos';


function App() {
  return (
    <div className="App">
      <header>
        <Navcomp></Navcomp>
      </header>
      <body>
        <BrowserRouter>
        <Routes>
            <Route path='' element={<Homepag></Homepag>}></Route>
            <Route path='/home' element={<Homepag></Homepag>}></Route>
            <Route path='/acercademi' element={<Acercademipag></Acercademipag>}></Route>
            <Route path='/estudiosycursos' element={<Estudiosycursos></Estudiosycursos>}></Route>
            <Route path='/proyectos' element={<h1>Proyectos</h1>}></Route>
        </Routes>
         </BrowserRouter>
      </body>
    
    
    </div>
 

  );
}

export default App;
