import { useState } from 'react';
import { UseInputState } from '../hooks/UseInputState';

export default function Form() {

    const [firstName, setFirstName] = UseInputState("");
    
    return (
        <form>
            <label>Name</label>
            <input 
                type="text" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
        </form>

    );
}
