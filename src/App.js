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
                    {/* Assessment */}
                    <Route exact path="/assessment/question" element={<pages.Question />}> </Route>
                    <Route exact path="/assessment/introduction" element={<pages.Introduction />}> </Route>
                    <Route exact path="/assessment/background" element={<pages.Background />}> </Route>
                    <Route exact path="/assessment/methodology" element={<pages.Methodology />}> </Route>
                    <Route exact path="/assessment/summary" element={<pages.Summary />}> </Route>
                    <Route exact path="/assessment/ethics-worksheet" element={<pages.EthicsWorksheet />}> </Route>
                    <Route exact path="/assessment/poster" element={<pages.Poster />}> </Route>
                    <Route exact path="/assessment/references" element={<pages.References />}> </Route>
                    <Route exact path="/" element={<pages.Landing />}> </Route>
                    <Route path="*" element={<pages.PageNotFound />}> </Route>
                </Routes>
                <partials.Footer />
            </div>
        </Router>
    );
}

export default App;
