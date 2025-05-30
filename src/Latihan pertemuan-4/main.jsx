import {createRoot} from "react-dom/client"
import FrameworkList from "./FrameworkList";
import './tailwind.css';
import { ResponsiveText, ResponsiveWidth, ResponsiveLayout } from './components/ResponsiveDesign';

createRoot(document.getElementById("root"))
    .render(
        <div>
            <FrameworkList/>
        </div>
    )