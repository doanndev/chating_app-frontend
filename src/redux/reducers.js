// reducers.js
const initialState = {
    messages: [],
    messageSent: false,
    userIdAuth: null,
    emoji: '',

};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEND_MESSAGE':
            return { ...state, messages: [...state.messages, action.payload], messageSent: false };
        case 'MESSAGE_SENT':
            return { ...state, messageSent: true };
        case 'SET_USER_ID':
            return {
                ...state,
                userIdAuth: action.payload,
            };
        case 'EMOJI_SENT':
            return {
                ...state,
                emoji: action.payload
            }
        default:
            return state;
    }
};

export default rootReducer;
