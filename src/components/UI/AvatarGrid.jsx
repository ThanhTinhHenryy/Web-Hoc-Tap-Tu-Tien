import React from "react";

// Import các avatar từ thư mục assets/avatar
import avt1 from "../../assets/avatar/avt-1.jpg";
import avt2 from "../../assets/avatar/avt-2.jpg";
import avt3 from "../../assets/avatar/avt-3.jpg";
import avt4 from "../../assets/avatar/avt-4.jpg";
import avt5 from "../../assets/avatar/avt-5.jpg";
import avt6 from "../../assets/avatar/avt-6.jpg";

const avatarOptions = [
  {
    id: "avt1",
    image: avt1,
    title: "Sword Cultivator",
    description: "Master of the blade and speed",
  },
  {
    id: "avt2",
    image: avt2,
    title: "Alchemy Cultivator",
    description: "Potions and elixirs genius",
  },
  {
    id: "avt3",
    image: avt3,
    title: "Demonic Cultivator",
    description: "Harness dark power",
  },
  {
    id: "avt4",
    image: avt4,
    title: "Buddhist Cultivator",
    description: "Peaceful yet powerful",
  },
  {
    id: "avt5",
    image: avt5,
    title: "Beast Tamer",
    description: "Companion of spirit beasts",
  },
  {
    id: "avt6",
    image: avt6,
    title: "Array Master",
    description: "Expert in formations and traps",
  },
];

const AvatarGrid = ({ onSelectAvatar }) => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6 text-center text-yellow-300">
        Choose Your Avatar
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {avatarOptions.map((avatar) => (
          <div
            key={avatar.id}
            className="bg-[#1a0a2e] rounded-lg p-4 cursor-pointer transition-all duration-300 hover:bg-[#2d1654] hover:scale-105"
            onClick={() => onSelectAvatar && onSelectAvatar(avatar)}
          >
            <img
              src={avatar.image}
              alt={avatar.title}
              className="w-40 h-40 object-cover mb-2 mx-auto rounded-lg"
            />
            <h3 className="text-center font-bold text-yellow-300">
              {avatar.title}
            </h3>
            <p className="text-center text-sm text-amber-100">
              {avatar.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvatarGrid;