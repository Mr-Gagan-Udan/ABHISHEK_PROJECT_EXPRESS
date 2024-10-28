import React from "react";
import DataTypeComponent from "./DataTypeComponent";
import FunctionComponent from "./FunctionComponent";
import ObjectComponent from "./ObjectComponent";

const App: React.FC = () => {
    return (
        <div>
            <h1>TypeScript Demo App</h1>
            <DataTypeComponent />
            <FunctionComponent />
            <ObjectComponent />
        </div>
    );
};

export default App;
