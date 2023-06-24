import React from "react";
import "./F6.css";

const TeamMembersGrid = ({ teamMembers }) => {
  return (
    <div className="team-members-grid">
      {teamMembers.map((member) => (
        <div className="team-member" key={member.id}>
          <img
            className="team-member-avatar"
            src={member.avatar}
            alt={member.name}
          />
          <h3 className="team-member-name">{member.name}</h3>
          <p className="team-member-position">{member.position}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamMembersGrid;
