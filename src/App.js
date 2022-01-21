import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as pages from './components/pages/index';
import * as partials from './components/partials/index';

// Utilities
import ScrollToTop from './classes/utilities/ScrollToTop';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<pages.Landing />}> </Route>
                    <Route exact path="*" element={<pages.PageNotFound />}> </Route>
                </Routes>
                <partials.Footer />
            </div>
        </Router>
    );
}

export default App;
