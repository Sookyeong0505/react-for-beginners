import { useState, useEffect } from "react";
import Detail from "./routes/Detail";

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./routes/Home";

function MovieApp() {
    return <Router>
        <Routes>
            <Route path="/movie/:id" element={<Detail/>} />
            <Route path="/" element={<Home />} />
            
        </Routes>
    </Router>;
}

export default MovieApp;