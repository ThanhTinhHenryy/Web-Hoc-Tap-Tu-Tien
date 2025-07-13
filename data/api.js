// Dữ liệu người dùng mẫu
const users = [
  {
    id: 1,
    username: "nguyenvan",
    email: "nguyenvan@gmail.com",
    password: "password123",
    fullName: "Nguyễn Văn A",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    level: "Luyện Khí kỳ 3",
    progress: 45,
    achievements: [
      "Hoàn thành 5 bài học cơ bản",
      "Đạt 80% trong bài kiểm tra từ vựng",
      'Mở khóa kỹ năng "Ngữ Pháp Cơ Bản"',
    ],
    tasks: [
      "Hoàn thành bài kiểm tra ngữ pháp",
      "Luyện tập 10 bài đọc hiểu",
      "Tham gia thử thách hàng tuần",
    ],
  },
  {
    id: 2,
    username: "thuylinh",
    email: "thuylinh@gmail.com",
    password: "password123",
    fullName: "Nguyễn Thùy Linh",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    level: "Trúc Cơ kỳ 1",
    progress: 20,
    achievements: [
      "Hoàn thành 10 bài học nâng cao",
      "Đạt 90% trong bài kiểm tra nghe",
      'Mở khóa kỹ năng "Đàm Thoại Cơ Bản"',
    ],
    tasks: [
      "Hoàn thành bài kiểm tra nghe nâng cao",
      "Luyện tập 5 bài viết",
      "Tham gia diễn đàn thảo luận",
    ],
  },
  {
    id: 3,
    username: "minhtuan",
    email: "minhtuan@gmail.com",
    password: "password123",
    fullName: "Phạm Minh Tuấn",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    level: "Luyện Khí kỳ 5",
    progress: 75,
    achievements: [
      "Hoàn thành 15 bài học trung cấp",
      "Đạt 85% trong bài kiểm tra tổng hợp",
      'Mở khóa kỹ năng "Ngữ Pháp Nâng Cao"',
    ],
    tasks: [
      "Hoàn thành bài kiểm tra viết",
      "Luyện tập 8 bài thuyết trình",
      "Tham gia cuộc thi hàng tháng",
    ],
  },
  {
    id: 4,
    username: "tinh",
    email: "nguyenthithu@gmail.com",
    password: "1",
    fullName: "Nguyễn Thị Thu",
    avatar: "https://randomuser.me/api/portraits/man/2.jpg",
    level: "Luyện Khí kỳ 4",
    progress: 60,
    achievements: [
      "Hoàn thành 12 bài học trung cấp",
      "Đạt 90% trong bài kiểm tra tổng hợp",
      'Mở khóa kỹ năng "Ngữ Pháp Nâng Cao"',
    ],
    tasks: [
      "Hoàn thành bài kiểm tra nghe",
      "Luyện tập 7 bài thuyết trình",
      "Tham gia cuộc thi hàng tháng",
    ],
  },
];

// Hàm giả lập đăng nhập
export const login = (username, password) => {
  return new Promise((resolve, reject) => {
    // Giả lập độ trễ của mạng
    setTimeout(() => {
      // Tìm người dùng theo username hoặc email
      const user = users.find(
        (u) =>
          (u.username === username || u.email === username) &&
          u.password === password
      );

      if (user) {
        // Tạo bản sao của user nhưng không bao gồm password
        const { password, ...userWithoutPassword } = user;
        resolve({
          success: true,
          user: userWithoutPassword,
          token: "fake-jwt-token-" + user.id,
        });
      } else {
        // In ra thông tin để debug
        console.log("Thông tin đăng nhập:", { username, password });
        console.log("Danh sách người dùng:", users);

        reject({
          success: false,
          message: "Tên đăng nhập hoặc mật khẩu không đúng",
        });
      }
    }, 800); // Độ trễ 800ms
  });
};

// Hàm giả lập đăng ký
export const register = (userData) => {
  return new Promise((resolve, reject) => {
    // Giả lập độ trễ của mạng
    setTimeout(() => {
      // Kiểm tra xem username hoặc email đã tồn tại chưa
      const existingUser = users.find(
        (u) => u.username === userData.username || u.email === userData.email
      );

      if (existingUser) {
        reject({
          success: false,
          message: "Tên đăng nhập hoặc email đã tồn tại",
        });
      } else {
        // Tạo user mới với ID tự động tăng
        const newUser = {
          id: users.length + 1,
          ...userData,
          // Nếu avatar rỗng, sử dụng avatar mặc định
          avatar:
            userData.avatar && userData.avatar.length > 0
              ? userData.avatar
              : "https://randomuser.me/api/portraits/men/1.jpg",
          level: "Luyện Khí kỳ 1",
          progress: 0,
          achievements: [],
          tasks: [
            "Hoàn thành bài kiểm tra đầu vào",
            "Luyện tập 5 bài học cơ bản",
            "Tham gia diễn đàn giới thiệu",
          ],
        };

        // Trong ứng dụng thực tế, bạn sẽ lưu vào database
        // Ở đây chúng ta chỉ thêm vào mảng để giả lập
        users.push(newUser);

        // Tạo bản sao của user nhưng không bao gồm password
        const { password, ...userWithoutPassword } = newUser;
        resolve({
          success: true,
          user: userWithoutPassword,
          token: "fake-jwt-token-" + newUser.id,
        });
      }
    }, 800); // Độ trễ 800ms
  });
};

// Hàm giả lập lấy thông tin người dùng
export const getUserInfo = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((u) => u.id === parseInt(userId));

      if (user) {
        // Tạo bản sao của user nhưng không bao gồm password
        const { password, ...userWithoutPassword } = user;
        resolve({
          success: true,
          user: userWithoutPassword,
        });
      } else {
        reject({
          success: false,
          message: "Không tìm thấy thông tin người dùng",
        });
      }
    }, 500); // Độ trễ 500ms
  });
};

// Hàm giả lập cập nhật avatar người dùng
export const updateUserAvatar = (userId, newAvatarUrl) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userIndex = users.findIndex((u) => u.id === parseInt(userId));

      if (userIndex !== -1) {
        // Cập nhật avatar cho người dùng
        // Xử lý cả trường hợp đường dẫn tệp cục bộ và URL
        users[userIndex].avatar = newAvatarUrl || "https://randomuser.me/api/portraits/men/1.jpg";
        
        // Nếu là đường dẫn tệp cục bộ, chỉ lấy tên tệp
        if (typeof newAvatarUrl === 'string' && newAvatarUrl.includes('/assets/avatar/')) {
          console.log("Đường dẫn avatar cục bộ:", newAvatarUrl);
        }

        console.log("Avatar updated to:", newAvatarUrl);

        // Tạo bản sao của user nhưng không bao gồm password
        const { password, ...userWithoutPassword } = users[userIndex];
        resolve({
          success: true,
          user: userWithoutPassword,
          message: "Cập nhật avatar thành công",
        });
      } else {
        reject({
          success: false,
          message: "Không tìm thấy thông tin người dùng",
        });
      }
    }, 500); // Độ trễ 500ms
  });
};
