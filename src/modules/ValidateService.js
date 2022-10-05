const ValidateService = {

    isValidEmail(email) {
        const validEmailFormat = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        const isValid = validEmailFormat.test(email);
        return isValid;
    },

    isValidPassword(password) {
        const validPassword = new RegExp(/(?=.*[A-Z])(?=.*[0-9])(?=.*[\.\-\\\/<>\|,;:\[\]}\_{"'?!@#$%^&*])/);
        const isValid = validPassword.test(password);
        return isValid;
    },

    isPasswordMatch(password, confirmPassword, setError) {
        if(password === confirmPassword) {
            setError(false);
        } else {
            setError(true);
        };
    },

    validateInput(type, value, setError) {
        if(type === "email") {
            let validEmail = ValidateService.isValidEmail(value);
            if(validEmail) {
                setError(false);
            } else {
                setError(true);
            };
        };
        if(type === "password") {
            let validPassword = ValidateService.isValidPassword(value);
            if(validPassword) {
                setError(false);
            } else {
                setError(true);
            };
        };
    },
};

module.exports = { ValidateService }
