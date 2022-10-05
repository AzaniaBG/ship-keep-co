export default function Button({disabled, onClick}) {

    return (
        <button 
            disabled={disabled}
            onClick={onClick}
        >
            Submit
        </button>
    );
};
