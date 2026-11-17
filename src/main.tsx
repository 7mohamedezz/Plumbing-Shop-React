import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./styles/effects.css";

// Lets the reveal CSS hide elements only when JS is actually running.
document.documentElement.classList.add("has-js");

createRoot(document.getElementById("root")!).render(<App />);
