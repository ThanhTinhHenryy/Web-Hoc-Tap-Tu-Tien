import React from "react";
import Button from "../UI/Button";
import logo from "../../assets/logo.png";
import imageUri from "../../assets/background.jpg";

const Hero = () => {
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

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => (window.location.href = "/home")}
          >
            Bắt đầu Tu luyện
          </Button>
          <Button variant="secondary" size="lg">
            <div
              onClick={() => {
                // Show modal with title and content
                const modal = document.createElement("div");
                modal.className =
                  "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm";

                // Create modal content
                const modalContent = document.createElement("div");
                modalContent.className =
                  "bg-white rounded-lg p-8 max-w-2xl w-full mx-4 relative";
                modalContent.innerHTML = `
                  <div class="bg-gradient-to-br from-indigo-900 to-purple-900 text-white p-8 rounded-lg shadow-2xl border-2 border-purple-400">
                    <h2 class="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">EVERLING – NGỮ LINH TRƯỜNG SINH GIỚI</h2>
                    <div class="prose prose-invert max-w-none">
                      <div class="space-y-4">
                        <div class="bg-black/30 p-4 rounded-lg backdrop-blur-sm">
                          <p class="text-xl font-semibold text-purple-300">Khởi nguyên: Ngôn Linh Thạch và Cuộc Đại Phân Hóa</p>
                          <p class="text-gray-200 leading-relaxed">Từ xa xưa, thế giới EverLing được nuôi dưỡng bởi một loại năng lượng gọi là Ngữ Linh Khí – sinh ra từ "Cổ Ngữ", thứ ngôn ngữ sơ khai làm gốc rễ cho mọi tri thức và pháp lực.</p>
                        </div>
                        <div class="bg-black/30 p-4 rounded-lg backdrop-blur-sm">
                          <p class="text-gray-200 leading-relaxed">Tâm mạch của Ngữ Linh Khí chính là Ngôn Linh Thạch – viên đá kết tinh toàn bộ tri thức của thế giới.</p>
                        </div>
                        <div class="bg-black/30 p-4 rounded-lg backdrop-blur-sm">
                          <p class="text-gray-200 leading-relaxed">Nhưng khi thiên mệnh thay đổi, Ngôn Linh Thạch vỡ thành 8 mảnh, bay khắp 8 vùng pháp vực, mỗi mảnh kết nối với một nhánh tu luyện đặc biệt – và là hiện thân của một lĩnh vực học thuật nhân loại.</p>
                        </div>
                        <div class="bg-black/30 p-4 rounded-lg backdrop-blur-sm">
                          <p class="text-gray-200 leading-relaxed">Mỗi mảnh được một tông phái giữ gìn, do 8 chân nhân lĩnh hội – những bậc truyền thừa cuối cùng mang danh.</p>
                        </div>
                        <div class="bg-black/30 p-4 rounded-lg backdrop-blur-sm border border-purple-500/30">
                          <p class="text-gray-200 leading-relaxed text-center italic">Hãy đăng nhập để biết thêm các vị đó là ai</p>
                        </div>
                      </div>
                    </div>
                    <button class="mt-8 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 w-full font-semibold">Đóng</button>
                  </div>
                  
                  
                `;

                // Add modal content to modal
                modal.appendChild(modalContent);

                // Add close button functionality
                const closeButton = modalContent.querySelector("button");
                closeButton.addEventListener("click", () => {
                  document.body.removeChild(modal);
                });

                // Close modal when clicking outside
                modal.addEventListener("click", (event) => {
                  if (event.target === modal) {
                    document.body.removeChild(modal);
                  }
                });

                document.body.appendChild(modal);
              }}
            >
              Tìm Hiểu Thêm
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
