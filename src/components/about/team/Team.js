import React from "react";
import TeamCard from "./TeamCard";
import "./team.css";
import "../about.css";

const teamData = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
    phone: "+998913224435",
    instagramLink: "",
    telegram: "",
    mentorName: "Allayarov Otabek",
    profession: "Android Dasturlash",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    phone: "+998913224435",
    instagramLink: "",
    telegram: "",
    mentorName: "Abdullayev Sultonbek",
    profession: "Kompyuter Savodxonligi",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=400",
    phone: "+998913224435",
    instagramLink: "",
    telegram: "",
    mentorName: "Tursinbayev Shukurulla",
    profession: "Front End (Web Dasturlash)",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400",
    phone: "+998913224435",
    instagramLink: "",
    telegram: "",
    mentorName: "Samandar ",
    profession: "IT Matematika",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400",
    phone: "+998913224435",
    instagramLink: "",
    telegram: "https://t.me/user",
    mentorName: "Ubaydullayev Xumoyun ",
    profession: "Python",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400",
    phone: "+998913224435",
    instagramLink: "",
    telegram: "https://t.me/user",
    mentorName: "Batir ",
    profession: "Grafik Gizayn",
  },
];

const Team = () => {
  return (
    <section className="team__about">
      <div className="container">
        <h1 className="section-title">Meet Our Team</h1>

        <div className="team-about__row">
          {teamData.map((item) => {
            return (
              <TeamCard
                key={item.id}
                img={item.img}
                phone={item.phone}
                instagramLink={item.instagramLink}
                telegram={item.telegram}
                mentorName={item.mentorName}
                profession={item.profession}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
