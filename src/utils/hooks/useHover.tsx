import { useState } from 'react';

const useHover = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    return {
        isHovered,
        hoverProps: {
            onMouseEnter: handleHover,
            onMouseLeave: handleHover,
        },
    };
};

export default useHover;
