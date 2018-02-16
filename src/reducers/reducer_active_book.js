// State argument is not apllication state, only the state this reducer is responsible for

export default (state = null, action) => {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
}