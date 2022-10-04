const { ValidateService } = require('./ValidateService');

describe('email validation', () => {
    const testInvalidEmail = [
        {
            invalidEmail: 'ab.com',
            expected: false,
        },
        {
            invalidEmail: 'ab@com',
            expected: false,
        },
        {
            invalidEmail: '\\ab.com',
            expected: false,
        },
        {
            validEmail: 'ab@ab.com',
            expected: true,
        },
    ];
    testInvalidEmail.forEach((test) => {
        it(`returns false if email is invalid: ${test.invalidEmail} which is ${test.expected}`, () => {
            const res = ValidateService.isValidEmail(test.invalidEmail);
            expect(res).toBeFalsy();
        });
    });
    const testValidEmail = [
        {
            validEmail: 'a909b@ab.com',
            expected: true,
        },
        {
            validEmail: 'em.bin@ab.com',
            expected: true,
        },
        {
            validEmail: 'em-o-p.brain-child@ab.com',
            expected: true,
        },
    ];
    testValidEmail.forEach((test) => {
        it(`returns true if email is valid: ${test.validEmail} which is ${test.expected}`, () => {
            const res = ValidateService.isValidEmail(test.validEmail);
            expect(res).toBeTruthy();
        });
    });
});

describe.only('password validation', () => {
    // it('returns false if password is invalid', () => {
    //     expect(ValidateService.isValidPassword("pioioioioioio")).toBeFalsy();
    // });
    const testInvalidPassword = [
        {
            invalidPassword: 'pioioioioioio',
            expected: false,
        },
        {
            invalidPassword: 'pi2oiAoioioioio',
            expected: false,
        },
    ];
    testInvalidPassword.forEach((test) => {
        it(`returns false if password is invalid: ${test.invalidPassword} which is ${test.expected}`, () => {
            const res = ValidateService.isValidPassword(test.invalidPassword);
            expect(res).toBeFalsy();
        });
    });
    const testValidPassword = [
        {
            validPassword: 'Pi-oi3oioioioio',
            expected: false,
        },
        {
            validPassword: 'Z.45pi2oiAoioioioio',
            expected: false,
        },
    ];
    testValidPassword.forEach((test) => {
        it(`returns true if password is valid: ${test.validPassword} which is ${test.expected}`, () => {
            const res = ValidateService.isValidPassword(test.validPassword);
            expect(res).toBeTruthy();
        });
    });
});