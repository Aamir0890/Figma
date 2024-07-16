import React, { useState } from 'react';
import '../styles/NameCard.css';

const NameCard = ({name, name1, name2, onSelect}) => {
    const [selectedName, setSelectedName] = useState(name);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const names = [name1, name2];

    const span = () => {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10L12 15L17 10H7Z" fill="black" fillOpacity="0.54"/>
            </svg>
        )
    }

    const handleNameClick = (name) => {
        setSelectedName(name);
        setDropdownVisible(false);
        onSelect(name);  // Call the onSelect prop with the selected name
    };

    return (
        <div className="dropdown-container">
            <div className="dropdown-card" onClick={() => setDropdownVisible(!dropdownVisible)}>
                <span className="name">{selectedName}</span>
                <span className={`arrow ${dropdownVisible ? 'spin' : ''}`}>{span()}</span>
            </div>
            {dropdownVisible && (
                <div className="dropdown-menu">
                    {names.map((name, index) => (
                        <div
                            key={index}
                            className="dropdown-item"
                            onClick={() => handleNameClick(name)}
                        >
                            {name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NameCard;