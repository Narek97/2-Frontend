import React from 'react';
import './App.css';
import HookForm from "./components/hook-form";
import HookFormYup from "./components/hook-form-yup";
import HookFormArray from "./components/hook-form-array";
import HookFormCheckboxArray from "./components/hook-form-checkbox-array";


const App = () => {

    return (
        <div>
            {/*<HookForm/>*/}
            {/*<HookFormYup/>*/}
            {/*<HookFormArray/>*/}
            <HookFormCheckboxArray/>
        </div>
    );
};

export default App;