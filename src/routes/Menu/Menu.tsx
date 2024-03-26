import  { Suspense, useEffect, useState} from "react";
import { Parallax } from "react-parallax";

import { useTranslation } from "react-i18next";
import menu from "../../assets/images/menu-background.jpg";
import MenuItem from "../../Components/Menu/MenuItem";
import UseQueryWrapper from "../../Components/ReactQuery/UseQueryWrapper";


interface Dish {
    image: string;
    name: string;
    blurhash: string;
}


const mockDishes: Dish[] = [
    
    {
          
        "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMGltYWdlfGVufDB8fDB8fHww",
        "name": "burger",
        "blurhash": "L4Ac6xx[0gnP03EM$fxa02#,~AJ,"
    },
    {
          
        "image": "https://images.unsplash.com/photo-1694923450868-b432a8ee52aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9tb3xlbnwwfHwwfHx8Mg%3D%3D",
        "name": "momo",
        "blurhash": "L3GkzL#u5HNg00^R~nV[00M_qZi{"
    },
    {
        
        "image": "https://images.unsplash.com/photo-1628410040883-c412c8d9a0f9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "name": "noodles",
        "blurhash": "L4Hw*;0L000400~n^$H@00Te4nrC"
    },
    {
          
        "image": "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "name": "fried rice",
        "blurhash": "L99%6Q=_0N0OxtaeWXWV0NEM~9^O"
    },
    {
          
        "image": "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "name": "sushi",
        "blurhash": "L783@O~U1KIpM{NGs:%058Ip$zs:"
    },
]
     
    

const fetchDishes = async (): Promise<Dish[]> => {
    const response = await fetch(
        "https://crudcrud.com/api/cf331822c3b844c69624a2c157d60a33/menu-item/",
    );
    if (!response.ok) {
        throw new Error("Error fetching dishes");
    }
    return response.json();
};

function Menu() {
    const { t } = useTranslation("menu");
    const [apiData, setApiData] = useState<Dish[]>([]);

    useEffect(() => {
        fetchDishes()
            .then((data) => setApiData(data))
            .catch((error) => console.error("Error fetching dishes:", error));
    }, []);

   
    const combinedData = [...mockDishes, ...apiData];

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
                    {combinedData.map((dish, index) => (
                        <Suspense fallback={<div>Loading...</div>} key={index}>
                            <MenuItem
                                imageSrc={dish.image}
                                name={t(dish.name)}
                                blurhash={dish.blurhash}
                            />
                        </Suspense>
                    ))}
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
