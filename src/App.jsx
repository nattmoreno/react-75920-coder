import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/item" element={<ItemDetailContainer />} />
                <Route path="/item/:productId" element={<ItemDetailContainer />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
