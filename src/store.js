export const increase = (username) => ({type:"INCREMENT", payload: username});
export const decrease = () => ({type:"DECREMENT"});

const initState = {
    username: "jeong",
    number: 1,
};

const reducer = (state = initState, action) => {
    switch(action.type) {
        case "INCREMENT":
            return { number: state.number + 1, username: action.payload };
        case "DECREMENT":
            return { number: state.number - 1 };
        default:
            return state;
    }
}

export default reducer