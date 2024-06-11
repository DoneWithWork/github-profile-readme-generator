import React, { useState } from "react";
import "../styles/global.css";
import { socialsData } from "../utils/constants";
export default function Content() {
  const [selection, setSelection] = useState("mainSticker"); // 'mainSticker' or 'customUrl'

  const handleMainStickerChange = () => {
    setSelection("mainSticker");
  };

  const handleCustomUrlChange = () => {
    setSelection("customUrl");
  };

  const [socialInputs, setSocialInputs] = useState(
    socialsData.reduce((acc, social) => {
      acc[social.id] = "";
      return acc;
    }, {})
  );

  const handleChange = (id, event) => {
    setSocialInputs({
      ...socialInputs,
      [id]: event.target.value,
    });
  };

  return (
    <div>
      <div>
        <label className={selection === "mainSticker" ? "" : "not-checked"}>
          Add main sticker?
          <input
            type="checkbox"
            checked={selection === "mainSticker"}
            onChange={handleMainStickerChange}
          />
          <img
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWcwZ3l0bTVvdGdtamY4Yzk0MTN3eGJlYTVjejRoOTkzMTVxZmU2bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/5eLDrEaRGHegx2FeF2/giphy.webp"
            alt="coding person"
            width={40}
          />
        </label>
        <label className={selection === "customUrl" ? "" : "not-checked"}>
          <p>or enter custom url to select own sticker?</p>
          <input
            type="checkbox"
            checked={selection === "customUrl"}
            onChange={handleCustomUrlChange}
          />
          {selection === "customUrl" && (
            <input type="text" placeholder="Enter URL" />
          )}
        </label>
      </div>
      <div className="socials">
        <p className="title">Socials</p>
        <div className="grid">
          {socialsData.map((social) => (
            <div key={social.id} className="social-icon">
              <img src={social.icon} width={30} alt={`${social.id} icon`} />
              <input
                type="text"
                placeholder={social.placeholder}
                value={socialInputs[social.id]}
                onChange={(e) => handleChange(social.id, e)}
                data-link={social.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
