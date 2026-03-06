import react from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./Components/App";
import 'font-awesome/css/font-awesome.min.css'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BrowserRouter><App /></BrowserRouter>);