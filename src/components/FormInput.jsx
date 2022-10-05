import './Form.css';

export default function FormInput({label, id, type, value, onChange}) {

    return (
        <div className="form-input">
            <label htmlFor={id}>{label}</label><br />
            <input
                id={id}
                type={type}
                name={id}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};
