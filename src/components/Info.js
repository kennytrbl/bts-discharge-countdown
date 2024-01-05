import React, { Component } from "react";
import Row from "./Row.js";

// for future reference: use nested arrays for better data visualization
const name = ["Jin", "J-Hope", "Suga", "RM", "V", "Jimin", "Jungkook"];
const profilePic = [];

for (let i = 0; i < name.length; i++) {
  if (name[i] === "Jungkook") {
    profilePic.push(`https://ibighit.com/bts/images/profile/proof/member/member-jk.jpg`);
  } else if (name[i] === "J-Hope") {
    profilePic.push(
      `https://ibighit.com/bts/images/profile/proof/member/member-${name[i].toLowerCase().replace("-", "")}.jpg`,
    );
  } else {
    profilePic.push(`https://ibighit.com/bts/images/profile/proof/member/member-${name[i].toLowerCase()}.jpg`);
  }
}

const realName = [
  "Kim Seok-jin",
  "Jung Ho-seok",
  "Min Yoon-gi",
  "Kim Nam-joon",
  "Kim Tae-hyung",
  "Park Ji-min",
  "Jeon Jung-kook",
];

const enlistmentDate = [
  "December 13, 2022",
  "April 18, 2023",
  "September 22, 2023",
  "December 11, 2023",
  "December 11, 2023",
  "December 12, 2023",
  "December 12, 2023",
];

const dischargeDate = [
  "June 12, 2024",
  "October 17, 2024",
  "June 21, 2025",
  "June 10, 2025",
  "June 10, 2025",
  "June 11, 2025",
  "June 11, 2025",
];

let daysLeft = [
  calculateDaysLeft("June 12, 2024"),
  calculateDaysLeft("October 17, 2024"),
  calculateDaysLeft("June 21, 2025"),
  calculateDaysLeft("June 10, 2025"),
  calculateDaysLeft("June 10, 2025"),
  calculateDaysLeft("June 11, 2025"),
  calculateDaysLeft("June 11, 2025"),
];

const instagramLink = [
  "https://www.instagram.com/jin",
  "https://www.instagram.com/uarmyhope",
  "https://www.instagram.com/agustd",
  "https://www.instagram.com/rkive",
  "https://www.instagram.com/thv",
  "https://www.instagram.com/j.m",
  "",
];

const spotifyLink = [
  "https://open.spotify.com/artist/5vV3bFXnN6D6N3Nj4xRvaV",
  "https://open.spotify.com/artist/0b1sIQumIAsNbqAoIClSpy",
  "https://open.spotify.com/artist/0ebNdVaOfp6N0oZ1guIxM8",
  "https://open.spotify.com/artist/2auC28zjQyVTsiZKNgPRGs",
  "https://open.spotify.com/artist/3JsHnjpbhX4SnySpvpa9DK",
  "https://open.spotify.com/artist/1oSPZhvZMIrWW5I41kPkkY",
  "https://open.spotify.com/artist/6HaGTQPmzraVmaVxvz6EUc",
];

const tiktokLink = ["", "", "", "", "", "", "https://www.tiktok.com/@jungkook"];

function calculateDaysLeft(dischargeDate) {
  var distance = new Date(dischargeDate).getTime() - new Date().getTime();
  var days = Math.ceil(Math.floor(distance / (1000 * 60 * 60 * 24)));
  if (days === 0) {
    return 0;
  }
  return days;
}

let array = [];
for (let i = 0; i < realName.length; i++) {
  array.push(
    <Row
      profilePic={profilePic[i]}
      name={name[i]}
      realName={realName[i]}
      enlistmentDate={enlistmentDate[i]}
      dischargeDate={dischargeDate[i]}
      daysLeft={daysLeft[i]}
      instagramLink={instagramLink[i]}
      spotifyLink={spotifyLink[i]}
      tiktokLink={tiktokLink[i]}
    />,
  );
}

class Info extends Component {
  render() {
    return <div className="container">{array}</div>;
  }
}

export default Info;
