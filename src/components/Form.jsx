import { useState } from 'react';
import FormInput from './FormInput';
import { UseInputState } from '../hooks/UseInputState';
import Button from './Button';

import './Form.css';

export default function Form() {

    const [username, setUsername, usernameError] = UseInputState("");
    const [password, setPassword, passwordError] = UseInputState("");
    const [passwordConfirm, setPasswordConfirm, passwordConfirmError] = UseInputState("");
    const [email, setEmail, emailError] = UseInputState("");
    const [formError, setFormError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAccount = {
            username,
            password,
            email
        };
        for(const input in newAccount) {
            if(!newAccount[input]) {
                setFormError(true);
                return;
            }
        }
    }

    return (
        <form className="form">
            <h2>Create An Account</h2>
            <fieldset>
            <FormInput
                label="Username"
                id="username"
                type="text"
                value={username}
                onChange={setUsername}
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
            {passwordConfirmError && <p className="invalid">Passwords must match</p>}
            <FormInput
                label="Email"
                id="email"
                type="email"
                value={email}
                onChange={setEmail}
            />
            {emailError && <p className="invalid">please provide a valid email</p>}
            </fieldset>
            <fieldset>
                <Button 
                    disabled={usernameError || passwordError || emailError} 
                    onClick={handleSubmit}
                />
                {formError && <p className="invalid">Missing field</p>}
            </fieldset>
        </form>

    );
}
