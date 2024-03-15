import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import HistoryPage from "./pages/HistoryPage.jsx";
import {ToastContainer} from "react-toastify";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/detail/:id' element={<DetailPage />} />
                <Route path='/history' element={<HistoryPage />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
            <ToastContainer position='top-left' newestOnTop />
        </BrowserRouter>
    )
}

export default App
