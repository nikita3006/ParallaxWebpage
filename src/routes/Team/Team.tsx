import React, { Suspense } from "react";
const TeamMember = React.lazy(() => import("../../Components/Team/TeamMember"));
import { Parallax } from "react-parallax";
import sanjeev from "../../assets/images/sanjeev.jpg";
import pankaj from "../../assets/images/pankaj.jpg";
import vikas from "../../assets/images/vikas.jpg";
import "./Team.css";
import { useTranslation } from "react-i18next";
import team from "../../assets/images/team-background.jpg";

const Team: React.FC = () => {
    const { t } = useTranslation("team");

    return (
        <Parallax strength={800} style={{
            height: "100%",
            backgroundImage: `url(${team})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <div className="team-page">
                <h1>{t("title")}</h1>
                <Suspense fallback={<div>Loading...</div>}>
                    <TeamMember
                        imageSrc={pankaj}
                        name={t("team_member_1_name")}
                        designation={t("team_member_1_designation")}
                        about={t("team_member_1_about")}
                    />
                    <TeamMember
                        imageSrc={sanjeev}
                        name={t("team_member_2_name")}
                        designation={t("team_member_2_designation")}
                        about={t("team_member_2_about")}
                    />
                    <TeamMember
                        imageSrc={vikas}
                        name={t("team_member_3_name")}
                        designation={t("team_member_3_designation")}
                        about={t("team_member_3_about")}
                    />
                </Suspense>
            </div>
        </Parallax>
    );
};

export default Team;
