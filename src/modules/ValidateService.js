const ValidateService = {

    isValidEmail(email) {
        const validEmailFormat = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        const isValid = validEmailFormat.test(email);
        return isValid;
    },

    isValidPassword(password) {
        const validPassword = new RegExp(/(?=.*[A-Z])(?=.*[0-9])(?=.*[\.\-!@#$%^&*])/);
        const isValid = validPassword.test(password);
        return isValid;
    },
};

module.exports = { ValidateService }
