import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const navLinks = [
  { href: "/home", label: "Trang chủ" },
  { href: "#", label: "Bắt đầu tu luyện" },
  { href: "#", label: "Thư viện Linh Tự" },
  { href: "#", label: "Thi luyện" },
  { href: "#", label: "Lộ trình" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Hàm cập nhật avatar từ localStorage
  const updateAvatarFromLocalStorage = () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        // Chỉ cập nhật nếu dữ liệu thực sự thay đổi
        if (!user || JSON.stringify(userData) !== JSON.stringify(user)) {
          console.log("Cập nhật avatar từ localStorage:", userData.avatar);
          setUser(userData);
        }
      } catch (error) {
        console.error("Lỗi khi phân tích dữ liệu người dùng:", error);
      }
    }
  };

  // Gọi hàm cập nhật mỗi khi component render
  useEffect(() => {
    updateAvatarFromLocalStorage();
  });

  useEffect(() => {
    // Hàm để lấy thông tin người dùng từ localStorage
    const getUserFromLocalStorage = () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        try {
          const userData = JSON.parse(storedUser);
          setUser(userData);
        } catch (error) {
          console.error("Lỗi khi phân tích dữ liệu người dùng:", error);
        }
      }
    };

    // Lấy thông tin người dùng khi component được mount
    getUserFromLocalStorage();

    // Thêm event listener để lắng nghe thay đổi từ localStorage (cho các cửa sổ khác)
    const handleStorageChange = (e) => {
      if (e.key === "user" && e.newValue) {
        try {
          const userData = JSON.parse(e.newValue);
          setUser(userData);
        } catch (error) {
          console.error("Lỗi khi phân tích dữ liệu người dùng:", error);
        }
      }
    };

    // Lắng nghe sự kiện tùy chỉnh avatarChange (cho cùng một cửa sổ)
    const handleAvatarChange = (e) => {
      setUser(e.detail);
      console.log("Avatar changed:", e.detail);
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("avatarChange", handleAvatarChange);

    // Kiểm tra localStorage mỗi 1 giây để cập nhật avatar nếu có thay đổi
    const intervalId = setInterval(getUserFromLocalStorage, 1000);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("avatarChange", handleAvatarChange);
      clearInterval(intervalId);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#2A0A4A] via-[#4B1B87] to-[#2A0A4A] shadow-[0_4px_15px_rgba(138,43,226,0.3)] text-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-lg md:text-2xl lg:text-3xl xl:text-4xl text-white font-medium drop-shadow-lg leading-relaxed tracking-wider font-serif italic"
            style={{
              textShadow:
                "0 0 10px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.2)",
            }}
          >
            EverLing
          </Link>

          {/* Desktop navigation menu */}
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-xl font-medium hover:text-amber-300 hover:glow-gold transition-all duration-300 text-amber-100 flex items-center"
                style={{ lineHeight: "20px" }}
              >
                {link.label}
              </Link>
            ))}

            {user ? (
              <div className="relative">
                <button
                  className="bg-gradient-to-r from-purple-800 to-indigo-900 hover:from-purple-900 hover:to-indigo-950 text-amber-100 hover:text-amber-200 rounded-lg px-4 py-2 shadow-lg transition-all duration-300"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  // className="flex items-center focus:outline-none"
                >
                  <img
                    src={
                      user.avatar.startsWith("../../") ||
                      user.avatar.startsWith("./")
                        ? user.avatar
                        : user.avatar
                    }
                    alt="Avatar"
                    className="w-8 h-8 rounded-full border-2 border-yellow-300"
                    onError={(e) => {
                      console.error("Error loading avatar:", user.avatar);
                      e.target.onerror = null;
                      e.target.src =
                        "https://randomuser.me/api/portraits/men/1.jpg";
                    }}
                  />
                  <span className="ml-2 text-sm font-medium text-amber-200 mr-1">
                    {user.fullName}
                  </span>
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#2A0A4A] rounded-md shadow-lg py-1 z-50">
                    <Link
                      to="/home"
                      className="block px-4 py-2 text-sm text-amber-100 hover:bg-[#3c1a60] hover:text-amber-300"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Hồ sơ
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-amber-100 hover:bg-[#3c1a60] hover:text-amber-300 bg-[#2A0A4A]"
                      style={{ backgroundColor: "#2A0A4A" }}
                    >
                      Đăng xuất
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex gap-4">
                <Link
                  to="/login"
                  className="text-sm font-medium hover:text-amber-300 hover:glow-gold transition-all duration-300 text-amber-100"
                >
                  Đăng nhập
                </Link>
                <Link
                  to="/register"
                  className="text-sm font-medium hover:text-amber-300 hover:glow-gold transition-all duration-300 text-amber-100"
                >
                  Đăng ký
                </Link>
              </div>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a0a2e] shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {user ? (
              <>
                <div className="flex flex-col items-center mb-4">
                  <img
                    src={user.avatar}
                    alt="Avatar"
                    className="w-16 h-16 rounded-full border-2 border-yellow-300 mb-2"
                    onError={(e) => {
                      console.error(
                        "Error loading avatar (mobile):",
                        user.avatar
                      );
                      e.target.onerror = null;
                      e.target.src =
                        "https://randomuser.me/api/portraits/men/1.jpg";
                    }}
                  />
                  <span className="text-lg font-medium text-amber-100">
                    {user.fullName}
                  </span>
                </div>

                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="block px-3 py-2 text-base font-medium text-amber-100 hover:text-amber-300 hover:bg-[#2d1654] rounded-md"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
                  to="/home"
                  className="block px-3 py-2 text-base font-medium text-amber-100 hover:text-amber-300 hover:bg-[#2d1654] rounded-md"
                  onClick={() => setMenuOpen(false)}
                >
                  Hồ sơ
                </Link>

                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-amber-100 hover:text-amber-300 hover:bg-[#2d1654] rounded-md"
                >
                  Đăng xuất
                </button>
              </>
            ) : (
              <>
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="block px-3 py-2 text-base font-medium text-amber-100 hover:text-amber-300 hover:bg-[#2d1654] rounded-md"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
                  to="/login"
                  className="block px-3 py-2 text-base font-medium text-amber-100 hover:text-amber-300 hover:bg-[#2d1654] rounded-md"
                  onClick={() => setMenuOpen(false)}
                >
                  Đăng nhập
                </Link>

                <Link
                  to="/register"
                  className="block px-3 py-2 text-base font-medium text-amber-100 hover:text-amber-300 hover:bg-[#2d1654] rounded-md"
                  onClick={() => setMenuOpen(false)}
                >
                  Đăng ký
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
