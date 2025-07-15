import React, { useState } from "react";
import { updateUserAvatar } from "../../../data/api";

// Import các avatar
import swordCultivator from "../../assets/avatar/chooseAVT/Sword Cultivator.jpg";
import alchemyCultivator from "../../assets/avatar/chooseAVT/Alchemy Cultivator.jpg";
import demonicCultivator from "../../assets/avatar/chooseAVT/Demonic Cultivator.jpg";
import buddhistCultivator from "../../assets/avatar/chooseAVT/Buddhist Cultivator.jpg";
import beastTamer from "../../assets/avatar/chooseAVT/Beast Tamer.jpg";
import arrayMaster from "../../assets/avatar/chooseAVT/Array Master.jpg";
import lightningCultivator from "../../assets/avatar/lightning-cultivator.svg";
import iceCultivator from "../../assets/avatar/ice-cultivator.svg";

const avatarOptions = [
  {
    id: "sword",
    image: swordCultivator,
    title: "Sword Cultivator",
    description: "Master of the blade and speed",
  },
  {
    id: "alchemy",
    image: alchemyCultivator,
    title: "Alchemy Cultivator",
    description: "Potions and elixirs genius",
  },
  {
    id: "demonic",
    image: demonicCultivator,
    title: "Demonic Cultivator",
    description: "Harness dark power",
  },
  {
    id: "buddhist",
    image: buddhistCultivator,
    title: "Buddhist Cultivator",
    description: "Peaceful yet powerful",
  },
  {
    id: "beast",
    image: beastTamer,
    title: "Beast Tamer",
    description: "Companion of spirit beasts",
  },
  {
    id: "array",
    image: arrayMaster,
    title: "Array Master",
    description: "Expert in formations and traps",
  },
  {
    id: "lightning",
    image: lightningCultivator,
    title: "Lightning Cultivator",
    description: "Swift and destructive power",
  },
  {
    id: "ice",
    image: iceCultivator,
    title: "Ice Cultivator",
    description: "Cold and precise force",
  },
];

const AvatarSelector = ({ onClose, onAvatarChange }) => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSelectAvatar = (avatar) => {
    setSelectedAvatar(avatar);
  };

  const handleConfirm = async () => {
    if (!selectedAvatar) return;

    // Lấy đường dẫn avatar từ selectedAvatar
    const avatarPath = selectedAvatar.image;
    console.log("Selected avatar path:", avatarPath);

    // Lấy thông tin người dùng từ localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) return;

    try {
      // Cập nhật avatar trong API (đây là hàm bất đồng bộ)
      const response = await updateUserAvatar(storedUser.id, avatarPath);
      console.log("Updated user:", response.user);

      // Cập nhật localStorage với thông tin người dùng mới
      localStorage.setItem("user", JSON.stringify(response.user));

      // Phát sự kiện storage để thông báo cho các component khác
      window.dispatchEvent(new Event("storage"));

      // Phát sự kiện tùy chỉnh avatarChange
      const avatarChangeEvent = new CustomEvent("avatarChange", {
        detail: response.user,
      });
      window.dispatchEvent(avatarChangeEvent);

      // Gọi callback onAvatarChange nếu được cung cấp
      if (onAvatarChange) {
        onAvatarChange(response.user);
      }

      // Đóng modal
      onClose();
    } catch (error) {
      console.error("Lỗi khi cập nhật avatar:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 pt-10">
      <div className="bg-[#2A0A4A] rounded-xl shadow-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <h2 className=" font-bold mb-6 text-center text-yellow-300">
          Choose Your Avatar
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {avatarOptions.map((avatar) => (
            <div
              key={avatar.id}
              className={`bg-[#1a0a2e] rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                selectedAvatar?.id === avatar.id
                  ? "ring-2 ring-yellow-300 transform scale-105"
                  : "hover:bg-[#2d1654]"
              }`}
              onClick={() => handleSelectAvatar(avatar)}
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

        {error && <div className="mt-4 text-red-500 text-center">{error}</div>}

        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            Hủy
          </button>
          <button
            onClick={handleConfirm}
            disabled={isLoading || !selectedAvatar}
            className={`px-4 py-2 bg-purple-700 hover:bg-purple-600 text-white rounded-lg transition-colors ${
              isLoading || !selectedAvatar
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            {isLoading ? "Đang xử lý..." : "Xác nhận"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvatarSelector;
