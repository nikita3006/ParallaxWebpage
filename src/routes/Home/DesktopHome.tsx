import React from "react";
import { Parallax } from "react-parallax";
import { useTranslation } from "react-i18next";
import homepage from "../../assets/images/homepage.jpg";
import "../../routes/Home/Home.css";
import ImageComponent from "../../Components/Image/ImageComponent";

const DesktopView: React.FC = () => {
    const { t } = useTranslation("home");

    return (
        <Parallax
            strength={800}
            style={{
                height: "100%",
                backgroundImage: `url(${homepage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="home-page">
                <div className="background-image">
                    <ImageComponent src={homepage} alt="Restaurant" />
                </div>
                <div className="restaurant-name">
                    <h1>{t("welcome")}</h1>
                </div>
            </div>
        </Parallax>
    );
};

export default DesktopView;
