import { useState } from 'react';
const { ValidateService } = require('../modules/ValidateService');

export const UseInputState = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState(false);

    const validateError = (value) => {
        if(value === "" ||  value === " " || value.length === 0) {
            setError(true);
        } else {
            setError(false);
        }
    };

    const handleChange = (e) => {
        let eType = e.target.type;
        let eValue = e.target.value;
        validateError(eValue);
        setValue(eValue);
        ValidateService.validateInput(eType, eValue, setError);
        // ValidateService.isPasswordMatch(password, )
    };

    const resetValue = () => {
        setValue("");
    };

    return [value, handleChange, error, resetValue];
};
