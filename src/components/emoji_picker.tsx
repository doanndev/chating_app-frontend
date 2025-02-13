import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';

interface EmojiPickerComponentProps {
    onSelect: (emoji: string) => void;
}

const EmojiPickerComponent: React.FC<EmojiPickerComponentProps> = ({ onSelect }) => {
    const [showPicker, setShowPicker] = useState(false);

    const handleEmojiSelect = (emojiData: EmojiClickData) => {
        onSelect(emojiData.emoji); // Extract emoji string
        setShowPicker(false);
    };

    return (
        <div>
            <button onClick={() => setShowPicker(!showPicker)}>😊</button>
            {showPicker && <EmojiPicker onEmojiClick={handleEmojiSelect} />}
        </div>
    );
};

// Define prop types for JavaScript compatibility (optional)
EmojiPickerComponent.propTypes = {
    onSelect: PropTypes.func.isRequired,
};

export default EmojiPickerComponent;
