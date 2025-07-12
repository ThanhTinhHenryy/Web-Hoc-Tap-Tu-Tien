import React from "react";
import stone from "../assets/stone.png";

const Introduction = () => {
  return (
    <div
      className="min-h-screen pt-16 sm:pt-18 md:pt-20 pb-6 sm:pb-8 md:pb-10 text-gray-800 relative overflow-x-hidden"
      style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(245, 245, 245, 0.95))`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* Blue section sized relative to page - responsive width and height */}
      <div
        className="absolute bg-[#0D2859E5] hidden sm:block"
        style={{
          height: "95vh",
          width: "calc(100vw / 3)",
          left: "0",
          top: "0",
          zIndex: 0,
          boxShadow: "0 0 15px rgba(37, 99, 235, 0.7)",
        }}
      ></div>
      <div className="container mx-auto px-4 py-4 sm:py-6 md:py-8 mt-2 sm:mt-4">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Left side - Image */}
          <div className="w-full md:w-5/12 flex justify-center items-center md:items-start overflow-visible mb-8 md:mb-0">
            <div className="relative max-w-xs sm:max-w-sm md:max-w-md w-full overflow-visible">
              <div className="overflow-visible relative">
                <img
                  src={stone}
                  alt="Ngũ Linh Thạch"
                  className="w-full h-auto relative z-20 scale-100 sm:scale-110 transform origin-center"
                  style={{
                    maxWidth: "100%",
                    margin: "0 auto",
                    filter: "drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.15))",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-7/12">
            <div
              className="bg-white bg-opacity-20 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg border border-amber-100"
              style={{ backdropFilter: "blur(5px)" }}
            >
              <div className="mb-8 sm:mb-12 md:mb-20">
                {/* <div className="w-32 sm:w-40 md:w-48 h-1 bg-amber-500 mb-2 sm:mb-3 md:mb-4"></div> */}
                <h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#F7C93F] tracking-wide sm:tracking-wider drop-shadow-md sm:drop-shadow-lg py-2 sm:py-3 mb-2 sm:mb-3 md:mb-4"
                  style={{ textShadow: "1px 1px 2px rgba(205, 133, 63, 0.3)" }}
                >
                  Cốt truyện
                </h1>
                {/* <div className="w-16 sm:w-20 md:w-24 h-1 bg-amber-400 ml-1 sm:ml-2 mb-1 sm:mb-2"></div> */}
              </div>

              <div className="space-y-4 sm:space-y-5 md:space-y-6 text-gray-700 mt-8 sm:mt-12 md:mt-16 pt-2 sm:pt-3 md:pt-4 border-t border-amber-200">
                <div>
                  <h2 className="text-lg sm:text-xl font-medium mb-2 sm:mb-3 text-gray-900">
                    Khởi nguyên:
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    Ngan Linh Thạch và Cuộc Đại Phân Hóa
                    <br />
                    Từ xa xưa, thế giới EverLing được nuôi dưỡng bởi một loại
                    năng lượng gọi là Ngữ Linh Khí – sinh ra từ "Cổ Ngữ", thứ
                    ngôn ngữ sơ khai làm gốc rễ cho mọi tri thức và pháp lực.
                  </p>
                </div>

                <div>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    Tâm mạch của Ngữ Linh Khí chính là Ngôn Linh Thạch – viên đá
                    kết tinh toàn bộ tri thức của thế giới.
                  </p>
                </div>

                <div>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    Nhưng khi thiên mệnh thay đổi, Ngôn Linh Thạch vỡ thành 8
                    mảnh, bay khắp 8 vùng pháp vực, mỗi mảnh kết nối với một
                    nhánh tu luyện đặc biệt – và là hiện thân của một lĩnh vực
                    học thuật nhân loại.
                  </p>
                </div>

                <div>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    Mỗi mảnh được một tông phái giữ gìn, do 8 chân nhân lĩnh hội
                    – những bậc truyền thừa cuối cùng mang danh.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
