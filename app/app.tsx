// App.tsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../app/home/page';
import SignIn from '../app/signin/page';

const App = () => (
  <Router>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      {/* Other routes */}
    </Routes>
  </Router>
);

export default App;
