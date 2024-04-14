import {HashRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import HistoryPage from "./pages/HistoryPage.jsx";
import {ToastContainer} from "react-toastify";

function App() {

    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/detail/:id' element={<DetailPage />} />
                <Route path='/history' element={<HistoryPage />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
            <ToastContainer position='top-center' autoClose='1000' newestOnTop/>
        </HashRouter>
    )
}

export default App;
