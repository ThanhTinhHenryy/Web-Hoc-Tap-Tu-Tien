import React, { useState } from "react";
import AvatarGrid from "./AvatarGrid";
import { updateUserAvatar } from "../../data/api";

const AvatarGallery = ({ onClose, onAvatarChange }) => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSelectAvatar = (avatar) => {
    setSelectedAvatar(avatar);
  };

  const handleConfirm = async () => {
    if (!selectedAvatar) return;

    setIsLoading(true);
    setError("");

    try {
      // Lấy thông tin người dùng từ localStorage
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (!storedUser) {
        throw new Error("Không tìm thấy thông tin người dùng");
      }

      // Cập nhật avatar trong API
      const response = await updateUserAvatar(storedUser.id, selectedAvatar.image);
      
      // Cập nhật localStorage với thông tin người dùng mới
      localStorage.setItem("user", JSON.stringify(response.user));

      // Phát sự kiện storage để thông báo cho các component khác
      window.dispatchEvent(new Event('storage'));

      // Phát sự kiện tùy chỉnh avatarChange
      const avatarChangeEvent = new CustomEvent('avatarChange', { detail: response.user });
      window.dispatchEvent(avatarChangeEvent);

      // Gọi callback onAvatarChange nếu được cung cấp
      if (onAvatarChange) {
        onAvatarChange(response.user);
      }

      // Đóng modal
      onClose();
    } catch (error) {
      setError(error.message || "Đã xảy ra lỗi khi cập nhật avatar");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gradient-to-b from-[#2A0A4A] to-[#3c1a60] rounded-xl shadow-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <AvatarGrid onSelectAvatar={handleSelectAvatar} />

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

export default AvatarGallery;