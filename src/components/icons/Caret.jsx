const Caret = ({ direction }) => {
    if (direction === "asc") {
    return "▼";
    } else {
    return "▲";
    }
};

export default Caret;