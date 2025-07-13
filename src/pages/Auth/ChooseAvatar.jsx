import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { updateUserAvatar } from "../../../data/api";

// Import background image
import backgroundImg from "../../assets/background/auth.png";

// Import avatar images
import swordCultivatorImg from "../../assets/avatar/sword-cultivator.svg";
import alchemyCultivatorImg from "../../assets/avatar/alchemy-cultivator.svg";
import demonicCultivatorImg from "../../assets/avatar/demonic-cultivator.svg";
import buddhistCultivatorImg from "../../assets/avatar/buddhist-cultivator.svg";
import beastTamerImg from "../../assets/avatar/beast-tamer.svg";
import arrayMasterImg from "../../assets/avatar/array-master.svg";

const ChooseAvatar = () => {
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Avatar options with descriptions
  const avatarOptions = [
    {
      id: "sword-cultivator",
      name: "Sword Cultivator",
      image: swordCultivatorImg,
      description: "Master of the blade and speed",
    },
    {
      id: "alchemy-cultivator",
      name: "Alchemy Cultivator",
      image: alchemyCultivatorImg,
      description: "Potions and elixirs genius",
    },
    {
      id: "demonic-cultivator",
      name: "Demonic Cultivator",
      image: demonicCultivatorImg,
      description: "Harness dark power",
    },
    {
      id: "buddhist-cultivator",
      name: "Buddhist Cultivator",
      image: buddhistCultivatorImg,
      description: "Peaceful yet powerful",
    },
    {
      id: "beast-tamer",
      name: "Beast Tamer",
      image: beastTamerImg,
      description: "Companion of spirit beasts",
    },
    {
      id: "array-master",
      name: "Array Master",
      image: arrayMasterImg,
      description: "Expert in formations and traps",
    },
  ];

  // Load user data from localStorage on component mount
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      // Redirect to login if no user data found
      navigate("/login");
    }
  }, [navigate]);

  // Handle avatar selection
  const handleSelectAvatar = async (avatarId) => {
    if (loading) return;

    setSelectedAvatar(avatarId);
    setLoading(true);

    try {
      // Get the selected avatar image path
      const selectedAvatarObj = avatarOptions.find(
        (avatar) => avatar.id === avatarId
      );
      const avatarPath = selectedAvatarObj.image;

      // Update user avatar in the API
      const response = await updateUserAvatar(user.id, avatarPath);

      // Update local storage with new user data
      localStorage.setItem("user", JSON.stringify(response.user));

      // Navigate to home page after successful update
      setTimeout(() => {
        navigate("/home");
      }, 500);
    } catch (error) {
      console.error("Error updating avatar:", error);
      setLoading(false);
    }
  };

  // Use imported background image

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center py-8 px-4"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(25, 23, 82, 0.7)",
      }}
    >
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl font-bold text-center text-white mb-12 relative">
          Choose Your Avatar
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full"></span>
          <span className="absolute top-0 right-0 w-1 h-1 bg-white rounded-full"></span>
          <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full"></span>
          <span className="absolute bottom-0 left-0 w-1 h-1 bg-white rounded-full"></span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {avatarOptions.map((avatar) => {
            const isSelected = selectedAvatar === avatar.id;

            return (
              <div
                key={avatar.id}
                className="relative bg-white/20 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300"
              >
                <div className="p-6 flex flex-col items-center">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {avatar.name}
                  </h3>
                  <div className="w-32 h-32 mb-4">
                    <img
                      src={avatar.image}
                      alt={avatar.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-white/80 text-center mb-10">
                    {avatar.description}
                  </p>
                  <button
                    onClick={() => handleSelectAvatar(avatar.id)}
                    disabled={loading}
                    className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 ${
                      isSelected ? "bg-[#2B003F]/80" : "bg-[#2B003F]"
                    } hover:bg-[#2B003F]/80 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300 disabled:opacity-50`}
                  >
                    {isSelected && loading ? "Processing..." : "Select"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChooseAvatar;
