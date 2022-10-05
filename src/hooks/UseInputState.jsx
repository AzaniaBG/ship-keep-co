import { useState } from 'react';
const { ValidateService } = require('../modules/ValidateService');

export const UseInputState = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        let eType = e.target.type;
        let eValue = e.target.value;
        let eName = e.target.name;
        let eObject = { [eName]: eValue };
        setValue(eValue);
        ValidateService.validateInput(eType, eValue, setError, eObject);
    };

    const resetValue = () => {
        setValue("");
    };

    return [value, handleChange, error, resetValue];
};
