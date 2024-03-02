import React from "react";
import "../../routes/Menu/Menu.css";
import ImageComponent from "../Image/ImageComponent";

interface MenuItemProps {
    imageSrc: string;
    name: string;
    blurhash: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ imageSrc, name, blurhash }) => {
    return (
        <div className="menu-item">
            <ImageComponent
                src={imageSrc}
                alt={name}
                blurhash={blurhash}
                style={{
                    width: "100%",
                    height: "60vh",
                    borderRadius: "5px",
                    objectFit: "cover",
                }}
            />
            <h2>{name}</h2>
        </div>
    );
};

export default MenuItem;
