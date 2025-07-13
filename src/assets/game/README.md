# Tài nguyên hình ảnh cho trò chơi học tiếng Anh

Thư mục này chứa các tài nguyên hình ảnh được sử dụng trong trò chơi học tiếng Anh.

## Cấu trúc thư mục

- `/backgrounds`: Chứa các hình nền cho các cấp độ khác nhau
  - `forest-bg.jpg`: Hình nền cho cấp độ rừng
  - `mountain-bg.jpg`: Hình nền cho cấp độ núi
  - `beach-bg.jpg`: Hình nền cho cấp độ bãi biển
  - `city-bg.jpg`: Hình nền cho cấp độ thành phố
  - `space-bg.jpg`: Hình nền cho cấp độ không gian

- `/elements`: Chứa các yếu tố hình ảnh riêng lẻ để tạo nên cảnh nền
  - Các yếu tố rừng: `tree1.svg`, `tree2.svg`, `bird1.svg`, `bird2.svg`
  - Các yếu tố núi: `mountain1.svg`, `mountain2.svg`, `cloud1.svg`, `cloud2.svg`
  - Các yếu tố bãi biển: `palm1.svg`, `palm2.svg`, `boat.svg`, `seagull.svg`
  - Các yếu tố thành phố: `building1.svg`, `building2.svg`, `car.svg`, `plane.svg`
  - Các yếu tố không gian: `planet1.svg`, `planet2.svg`, `rocket.svg`, `star.svg`

- Hình ảnh thumbnail cho các cấp độ (đã chuyển sang thư mục `public/assets/game/thumbnails`):
  - `thumb1.png`: Thumbnail cho cấp độ 1 (Rừng)
  - `thumb2.png`: Thumbnail cho cấp độ 2 (Núi)
  - `thumb3.png`: Thumbnail cho cấp độ 3 (Bãi biển)
  - `thumb4.png`: Thumbnail cho cấp độ 4 (Thành phố)
  - `thumb5.png`: Thumbnail cho cấp độ 5 (Không gian)

## Sử dụng

Các hình ảnh này được sử dụng trong file `data/gameBlock.js` để hiển thị nền và các yếu tố trang trí cho từng cấp độ trong trò chơi.

Mỗi cấp độ sẽ có một hình nền chính và các yếu tố trang trí được đặt ở các vị trí khác nhau trên màn hình.

## Định dạng

Tất cả các hình ảnh đều được tạo dưới dạng SVG (Scalable Vector Graphics) để đảm bảo chất lượng hiển thị tốt trên mọi kích thước màn hình và dễ dàng chỉnh sửa nếu cần.