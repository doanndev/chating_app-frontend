// actions.js
export const sendMessage = (message) => ({
    type: 'SEND_MESSAGE',
    payload: message,
});

export const messageSent = () => ({
    type: 'MESSAGE_SENT',
});
export const emojiSend = () => ({
    type: 'EMOJI_SENT',
});
