import { Route, Routes } from 'react-router-dom';

import Home from './routs/home/home.component';
import Navigation from './routs/navigation/navigation.component';
import SignIn from './routs/sign-in/sign-in.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="signIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
