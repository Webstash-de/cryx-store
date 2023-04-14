import { Route, Routes } from 'react-router-dom';

import Home from './routs/home/home.component';
import Navigation from './routs/navigation/navigation.component';
import Authentication from './routs/authentication/authentication.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
