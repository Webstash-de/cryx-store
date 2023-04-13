import {Route, Routes} from "react-router-dom";

import Home from "./routs/home/home.component";
import Navigation from "./routs/navigation/navigation.component";

const App = () => {

    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route index={true} element={<Home />} />
            </Route>
        </Routes>
    );
}

export default App;
