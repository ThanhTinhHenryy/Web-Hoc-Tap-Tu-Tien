import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const navLinks = [
  { href: "/gioi-thieu", label: "Trang chủ" },
  { href: "/tai-lieu", label: "Tài liệu" },
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
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md text-gray-800"
      style={{}}
    >
      <div className="w-full px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-lg md:text-xl font-bold text-[#2A0A4A] hover:text-[#779341] flex items-center pl-0 font-serif tracking-wider"
          >
            <span
              className="border-l-4 border-red-500 h-6 inline-block"
              style={{ marginRight: "8px" }}
            ></span>
            EVERLING
          </Link>

          {/* Desktop navigation menu */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-base font-medium hover:text-gray-600 transition-all duration-300 text-gray-800 flex items-center"
              >
                {link.label}
              </Link>
            ))}

            {user ? (
              <div className="relative">
                <button
                  className="flex items-center text-gray-800 hover:text-gray-600 focus:outline-none"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <img
                    src={
                      user.avatar && user.avatar.length > 0
                        ? user.avatar.startsWith("../../") ||
                          user.avatar.startsWith("./")
                          ? user.avatar
                          : user.avatar
                        : "https://randomuser.me/api/portraits/men/1.jpg"
                    }
                    alt="Avatar"
                    className="w-8 h-8 rounded-full border border-gray-300"
                    onError={(e) => {
                      console.error("Error loading avatar:", user.avatar);
                      e.target.onerror = null;
                      e.target.src =
                        "https://randomuser.me/api/portraits/men/1.jpg";
                    }}
                  />
                  <span className="ml-2 text-sm font-medium text-gray-800 mr-1">
                    {user.fullName}
                  </span>
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                    {/* <Link
                      to="/home"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Trang chủ
                    </Link> */}
                    <Link
                      to="/ho-so"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Hồ sơ & Thành tựu
                    </Link>
                    <Link
                      to="/choose-avatar"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Đổi Avatar
                    </Link>
                    <Link
                      to="/tu-luyen/practice-goal"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Luyện tập
                    </Link>
                    <Link
                      to="/game"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Game
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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
                  className="text-sm font-medium text-gray-800 hover:text-gray-600 border-2 border-red-500 rounded-md px-6 py-2 w-28 text-center"
                  style={{
                    // padding: "10px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                  }}
                >
                  Đăng nhập
                </Link>
                <Link
                  to="/register"
                  // className="text-sm font-medium text-gray-800 hover:text-gray-600 bg-yellow-400 hover:bg-yellow-500 rounded-md px-6 py-2"
                  className="text-sm font-medium text-gray-800 hover:text-gray-600 bg-yellow-400 border-2 border-yellow-500 rounded-md px-6 py-2 w-28 text-center"
                  style={{
                    // padding: "10px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                  }}
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
              className="text-gray-800 hover:text-gray-600 focus:outline-none p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition-all duration-300 shadow-sm hover:shadow"
              aria-label="Menu"
            >
              <svg
                className="h-6 w-6 transition-all duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{
                  transform: menuOpen ? "rotate(90deg)" : "rotate(0deg)",
                }}
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
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {user ? (
              <>
                <div className="flex flex-col items-center mb-4">
                  <img
                    src={
                      user.avatar && user.avatar.length > 0
                        ? user.avatar
                        : "https://randomuser.me/api/portraits/men/1.jpg"
                    }
                    alt="Avatar"
                    className="w-16 h-16 rounded-full border border-gray-300 mb-2"
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
                  <span className="text-lg font-medium text-gray-800">
                    {user.fullName}
                  </span>
                </div>

                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-100 rounded-md"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
                  to="/home"
                  className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-100 rounded-md"
                  onClick={() => setMenuOpen(false)}
                >
                  Trang chủ
                </Link>

                <Link
                  to="/ho-so"
                  className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-100 rounded-md"
                  onClick={() => setMenuOpen(false)}
                >
                  Hồ sơ & Thành tựu
                </Link>

                <Link
                  to="/choose-avatar"
                  className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-100 rounded-md"
                  onClick={() => setMenuOpen(false)}
                >
                  Đổi Avatar
                </Link>

                <Link
                  to="/tu-luyen/practice-goal"
                  className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-100 rounded-md"
                  onClick={() => setMenuOpen(false)}
                >
                  Luyện tập
                </Link>

                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-100 rounded-md"
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
                    className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-100 rounded-md"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
                  to="/login"
                  className="block mx-3 my-2 text-base font-medium text-gray-800 hover:text-gray-600 border-2 border-red-500 rounded-md px-4 py-2 text-center w-28"
                  onClick={() => setMenuOpen(false)}
                >
                  Đăng nhập
                </Link>

                <Link
                  to="/register"
                  className="block mx-3 my-2 text-base font-medium text-gray-800 hover:text-gray-600 bg-yellow-400 border-2 border-red-500 rounded-md px-4 py-2 text-center w-28"
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
