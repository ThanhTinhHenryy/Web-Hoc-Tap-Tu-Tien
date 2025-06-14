import React from 'react';
import Header from '../Header/Header'; // Đảm bảo đường dẫn này chính xác

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      {/* Bạn có thể thêm Footer ở đây nếu cần */}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;