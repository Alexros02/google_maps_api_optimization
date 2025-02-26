import Home from './components/Home/Home';
import './App.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
    return (
        <Router>
            <div data-theme={"mytheme"} className="App">
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;