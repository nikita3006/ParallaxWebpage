import React from "react";

interface TeamMemberProps {
    imageSrc: string;
    name: string;
    designation: string;
    about: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ imageSrc, name, designation, about }) => {
    return (
        <div className="team-member">
            <img src={imageSrc} alt={name} />
            <h2>{name}</h2>
            <h3>{designation}</h3>
            <p>{about}</p>
        </div>
    );
};

export default TeamMember;
