import React, { Suspense } from "react";
import { Parallax } from "react-parallax";
import { useTranslation } from "react-i18next";
import UseQueryWrapper from "../../Components/ReactQuery/UseQueryWrapper";
import menu from "../../assets/images/menu-background.jpg";
import MenuItem from "../../Components/Menu/MenuItem";

interface Dish {
    image: string;
    name: string;
    blurhash: string;
}

const fetchDishes = async (): Promise<Dish[]> => {
    const response = await fetch(
        "https://crudcrud.com/api/2353e98e21364c1cba788d9097a0a779/menu-item",
    );
    if (!response.ok) {
        throw new Error("Error fetching dishes");
    }
    return response.json();
};

function Menu() {
    const { t } = useTranslation("menu");

    return (
        <Parallax
            strength={800}
            style={{
                height: "100%",
                backgroundImage: `url(${menu})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="menu">
                <h1>{t("menu")}</h1>
                <div className="menu-items">
                    <UseQueryWrapper<Dish[]>
                        queryKeyName={["dishes"]}
                        queryFnName={fetchDishes}
                    >
                        {(data) =>
                            data.map((dish, index) => (
                                <Suspense
                                    fallback={<div>Loading...</div>}
                                    key={index}
                                >
                                    <MenuItem
                                        imageSrc={dish.image}
                                        name={t(dish.name)}
                                        blurhash={dish.blurhash}
                                    />
                                </Suspense>
                            ))
                        }
                    </UseQueryWrapper>
                </div>
            </div>
        </Parallax>
    );
}

export default Menu;
