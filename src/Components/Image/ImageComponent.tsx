import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

interface ImageProps {
    src: string;
    alt: string;
    blurhash?: string;
    style?: React.CSSProperties;
}

const ImageComponent: React.FC<ImageProps> = ({
    src,
    alt,
    blurhash,
    style,
}) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setImageLoaded(true);
        };
        img.src = src;
    }, [src]);

    return (
        <div className="image-container" style={style}>
            {!imageLoaded && (
                <Blurhash
                    hash={blurhash? blurhash : "LSH-DTo#Osa$x^bcaeW=GwNGM{n$"}
                    width={style && style.width ? (style.width as number) : 50}
                    height={
                        style && style.height ? (style.height as number) : 50
                    }
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                />
            )}
            {imageLoaded && <img src={src} alt={alt} style={style} />}
        </div>
    );
};

export default ImageComponent;
