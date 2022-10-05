import { useState } from 'react';
import FormInput from './FormInput';
import { UseInputState } from '../hooks/UseInputState';
import { UseError } from '../hooks/UseError';

import './Form.css';

export default function Form() {

    const [firstName, setFirstName, firstNameError] = UseInputState("");
    const [lastName, setLastName, lastNameError] = UseInputState("");
    const [password, setPassword, passwordError] = UseInputState("");
    const [passwordConfirm, setPasswordConfirm, passwordConfirmError] = UseInputState("");
    const [email, setEmail, emailError] = UseInputState("");
    const [error, setError] = useState("");

    return (
        <form className="form">
            <h2>Create An Account</h2>
            <fieldset>
            <FormInput
                label="First Name"
                id="firstName"
                type="text"
                value={firstName}
                onChange={setFirstName}
            />
            <FormInput
                label="Last Name"
                id="lastName"
                type="text"
                value={lastName}
                onChange={setLastName}
            />
            <FormInput
                label="Password"
                id="password"
                type="password"
                value={password}
                onChange={setPassword}
            />
            {passwordError && <p className="invalid">must include a capital letter, special character, and number</p>}
            <FormInput
                label="Confirm Password"
                id="passwordConfirm"
                type="password"
                value={passwordConfirm}
                onChange={setPasswordConfirm}
            />
            <FormInput
                label="Email"
                id="email"
                type="email"
                value={email}
                onChange={setEmail}
            />
            {emailError && <p className="invalid">please provide a valid email</p>}
            </fieldset>
        </form>

    );
}
