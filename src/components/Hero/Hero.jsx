import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import imageUri from "../../assets/background/auth.png";
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Kiểm tra xem người dùng đã đăng nhập chưa
    const user = localStorage.getItem("user");
    setIsAuthenticated(!!user);
  }, []);

  const handleStartClick = () => {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      navigate("/tu-luyen/practice-goal");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${imageUri})`,
          filter: "brightness(0.7)",
        }}
      />

      {/* Floating petals animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-pink-300 rounded-full opacity-60 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto">
        {/* Logo - Extra Large */}
        <div className="mb-6">
          <div className="flex justify-center mb-4">
            <img
              src={logo}
              alt="EverLing Logo"
              className="w-80 md:w-[28rem] lg:w-[32rem] xl:w-[36rem] h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Slogan */}
        <p
          className="text-lg md:text-2xl lg:text-3xl xl:text-4xl text-white mb-12 font-medium drop-shadow-lg leading-relaxed tracking-wider font-serif italic"
          style={{
            textShadow:
              "0 0 10px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.2)",
          }}
        >
          Học gia nhập đạo, ngôn giả thành tiên
        </p>

        {/* Action Button */}
        <div className="flex flex-col items-center">
          <button
            onClick={handleStartClick}
            className="bg-[#2B003F] hover:bg-[#3D0059] text-white font-semibold py-2.5 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] w-40 text-base inline-block text-center"
          >
            {isAuthenticated ? "Bắt đầu" : "Đăng nhập"}
          </button>
          
          <div className={`overflow-hidden transition-all duration-500 ${!isAuthenticated ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="text-white text-sm mt-2 opacity-80">
              Bạn cần đăng nhập để bắt đầu tu luyện
            </p>
            <div className="mt-1">
              <Link to="/register" className="text-amber-300 text-sm hover:text-amber-200 hover:underline transition-colors">
                Chưa có tài khoản? Đăng ký ngay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
