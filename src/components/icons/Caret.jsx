const Caret = ({ direction }) => {
    if (direction === "asc") {
    return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
            <path d="M13 12H21M13 8H21M13 16H21M6 7V17M6 17L3 14M6 17L9 14" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        );
    } else {
    return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
            <path d="M13 12H21M13 8H21M13 16H21M6 7V17M6 7L3 10M6 7L9 10" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        );
    };
};

export default Caret;