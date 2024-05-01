
import './App.css';
import {Routes, Route} from 'react-router-dom'

import Weather from './components/Weather';


function App() {
  return (
   <>

<Routes>
  <Route index element={<Weather/>}/>
  
</Routes>
</>
  );
}

export default App;