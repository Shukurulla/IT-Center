import React from "react";

const TeamCard = ({
  img,
  phone,
  instagramLink,
  telegram,
  mentorName,
  profession,
}) => {
  return (
    <div className="team">
      <div className="team__img">
        <img src={img} />
        <div className="team__social-icons">
          <a href={`tel:${phone}`}>
            <i class="bi bi-phone"></i>
          </a>
          <a href={instagramLink}>
            <i class="bi bi-instagram"></i>
          </a>
          <a href={telegram}>
            <i class="bi bi-telegram"></i>
          </a>
        </div>
      </div>
      <h3>{mentorName}</h3>
      <p>{profession}</p>
    </div>
  );
};

export default TeamCard;
