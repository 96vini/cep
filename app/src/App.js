import React from "react";
import RoutesMap from "./routes";

import { GlobalStyles } from './styles/GlobalStyles';

export default function App() {
    return (
        <div className="main-theme">
            <RoutesMap/>
            <GlobalStyles />
        </div>
    );
}