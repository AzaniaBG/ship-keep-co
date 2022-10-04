import { useState } from 'react';

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
        let eValue = e.target.value;
        setValue(eValue);
        validateError(eValue);
    };

    const resetValue = () => {
        setValue("");
    };

    return [value, handleChange, error, resetValue];
};
