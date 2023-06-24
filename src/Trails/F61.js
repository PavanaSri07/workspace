import React from "react";
import TeamMembersGrid from "./F6";
import "./F6.css";
const CompanyWebsite = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Gamayas IT Consulting ",
      position: "SaaS/ERP/CRM/Cloud",
      avatar:
        "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      name: "  Education &Edu-Tech",
      position: "",
      avatar:
        "https://images.pexels.com/photos/3184644/pexels-photo-3184644.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      name: "Healthcare & HealthTech",
      position: "",
      avatar:
        "https://images.pexels.com/photos/3951857/pexels-photo-3951857.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      name: "AgriTech",
      position: "",
      avatar:
        "https://media.istockphoto.com/id/1371885281/photo/smart-farming-argriculture-concept.jpg?b=1&s=612x612&w=0&k=20&c=nCGQsGw6DWNSbgB9P_irk9Ci3vHi0nTxNpTemd2spXg="
    },
   
    {
      id: 5,
      name: "Fine Tech And BFSI",
      position: "",
      avatar:
        "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 6,
      name: "Automobile and Logistics", 
      position: "",
      avatar:
        "https://images.pexels.com/photos/6026765/pexels-photo-6026765.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="industries">
      <h1>Industries We Focus</h1>
      <TeamMembersGrid teamMembers={teamMembers} />
    </div>
  );
};

export default CompanyWebsite;
