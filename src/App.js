import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Page/Home/Home";
import Detail from "./Page/Detail/Detail";

function App() {

  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
