import React, { Component } from "react";
import Row from "./Row.js";

// Member data
const members = [
  {
    name: "Jin",
    realName: "Kim Seok-jin",
    enlistmentDate: "December 13, 2022",
    dischargeDate: "June 12, 2024",
    instagramLink: "https://www.instagram.com/jin",
    spotifyLink: "https://open.spotify.com/artist/5vV3bFXnN6D6N3Nj4xRvaV",
    tiktokLink: "",
  },
  {
    name: "J-Hope",
    realName: "Jung Ho-seok",
    enlistmentDate: "April 18, 2023",
    dischargeDate: "October 17, 2024",
    instagramLink: "https://www.instagram.com/uarmyhope",
    spotifyLink: "https://open.spotify.com/artist/0b1sIQumIAsNbqAoIClSpy",
    tiktokLink: "",
  },
  {
    name: "Suga",
    realName: "Min Yoon-gi",
    enlistmentDate: "September 22, 2023",
    dischargeDate: "June 21, 2025",
    instagramLink: "https://www.instagram.com/agustd",
    spotifyLink: "https://open.spotify.com/artist/0ebNdVaOfp6N0oZ1guIxM8",
    tiktokLink: "",
  },
  {
    name: "RM",
    realName: "Kim Nam-joon",
    enlistmentDate: "December 11, 2023",
    dischargeDate: "June 10, 2025",
    instagramLink: "https://www.instagram.com/rkive",
    spotifyLink: "https://open.spotify.com/artist/2auC28zjQyVTsiZKNgPRGs",
    tiktokLink: "",
  },
  {
    name: "V",
    realName: "Kim Tae-hyung",
    enlistmentDate: "December 11, 2023",
    dischargeDate: "June 10, 2025",
    instagramLink: "https://www.instagram.com/thv",
    spotifyLink: "https://open.spotify.com/artist/3JsHnjpbhX4SnySpvpa9DK",
    tiktokLink: "",
  },
  {
    name: "Jimin",
    realName: "Park Ji-min",
    enlistmentDate: "December 12, 2023",
    dischargeDate: "June 11, 2025",
    instagramLink: "https://www.instagram.com/j.m",
    spotifyLink: "https://open.spotify.com/artist/1oSPZhvZMIrWW5I41kPkkY",
    tiktokLink: "",
  },
  {
    name: "Jungkook",
    realName: "Jeon Jung-kook",
    enlistmentDate: "December 12, 2023",
    dischargeDate: "June 11, 2025",
    instagramLink: "",
    spotifyLink: "https://open.spotify.com/artist/6HaGTQPmzraVmaVxvz6EUc",
    tiktokLink: "https://www.tiktok.com/@jungkook",
  },
];

const profilePicBaseUrl = "https://ibighit.com/bts/images/profile/proof/member/";

const profilePicUrls = members.map((member) => {
  if (member.name === "Jungkook") {
    return "https://ibighit.com/bts/images/profile/proof/member/member-jk.jpg";
  }
  const name = member.name.toLowerCase().replace("-", "");
  return `${profilePicBaseUrl}member-${name}.jpg`;
});

function calculateDaysLeft(dischargeDate) {
  const distance = new Date(dischargeDate).getTime() - new Date().getTime();
  const days = Math.ceil(distance / (1000 * 60 * 60 * 24));
  return days <= 0 ? "Discharged from the military" : days;
}

const membersWithDaysLeft = members.map((member, index) => ({
  ...member,
  profilePic: profilePicUrls[index],
  daysLeft: calculateDaysLeft(member.dischargeDate),
}));

class Info extends Component {
  render() {
    return (
      <div className="container">
        {membersWithDaysLeft.map((member, index) => (
          <Row
            key={index}
            profilePic={member.profilePic}
            name={member.name}
            realName={member.realName}
            enlistmentDate={member.enlistmentDate}
            dischargeDate={member.dischargeDate}
            daysLeft={member.daysLeft}
            instagramLink={member.instagramLink}
            spotifyLink={member.spotifyLink}
            tiktokLink={member.tiktokLink}
          />
        ))}
      </div>
    );
  }
}

export default Info;
