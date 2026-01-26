# Tóm Tắt Các Bước Tạo Trang Web Trường Mầm Non Trúc Đào

## 1. Thanh Điều Hướng (Header - "Trúc Đào")

**Các thành phần:**
- Logo **"Trúc Đào"** bên trái
- **Nút chuông thông báo** 🔔 - hiển thị số thông báo mới, nhấn vào mở popup thông báo
- Menu điều hướng bên phải gồm: **Hoạt động**, **Góc Phụ Huynh**, **Lịch Học**, **Chat Bot**

**Cách tạo:**
1. Tạo thanh ngang cố định ở trên cùng trang
2. Đặt logo chữ "Trúc Đào" bên trái với màu cam đặc trưng
3. Thêm nút chuông thông báo với badge đỏ hiển thị số thông báo chưa đọc
4. Tạo popup thông báo khi nhấn chuông - hiển thị danh sách thông báo về nhà trường (lịch họp, đóng phí, nghỉ lễ...)
5. Nhấn vào từng thông báo sẽ mở chi tiết thông báo
6. Các mục menu điều hướng đến các phần tương ứng trên trang
7. **"Góc Phụ Huynh"** và **"Lịch Học"** mở popup xem ảnh toàn màn hình

---

## 2. Phần Giới Thiệu Chính (Hero Section)

**Tiêu đề:** *"Trúc Đào, ươm mầm yêu thương, vững bước tương lai"*

**Các thành phần:**
- Nội dung giới thiệu về trường bên trái
- Hai nút: **"Theo dõi nhà trường"** và **"Khám phá"**
- Bộ 3 hình ảnh xếp chồng nghệ thuật bên phải

**Cách tạo:**
1. Chia layout thành 2 cột (nội dung trái - hình ảnh phải)
2. Viết tiêu đề lớn và đoạn mô tả về sứ mệnh nhà trường
3. Thêm 2 nút hành động - "Theo dõi nhà trường" liên kết Facebook, "Khám phá" cuộn xuống trang
4. Tạo bố cục 3 hình ảnh xếp chồng với hiệu ứng phóng to khi di chuột
5. Hình ảnh lấy từ thư mục `general/`

---

## 3. Phần Hoạt Động Của Bé (Section "Trường mầm non Trúc Đào")

**Tiêu đề:** *"Để bé được phát triển một cách toàn diện nhất"*

**3 mục chính:**
- **01 - Bé được học tập một cách bài bản, khoa học**
- **02 - Tham gia các hoạt động vui chơi, ngoại khóa**
- **03 - Thưởng thức bữa ăn thơm ngon, dinh dưỡng**

**Cách tạo:**
1. Chia thành 3 phần đánh số lớn (01, 02, 03)
2. Mỗi phần có tiêu đề và mô tả chi tiết
3. Xen kẽ vị trí nội dung và hình ảnh (trái-phải luân phiên)
4. Thêm vòng tròn trang trí phía sau mỗi hình ảnh
5. Sử dụng hình ảnh từ thư mục `khoanhKhac/`

---

## 4. Phần Hình Ảnh Hoạt Động & Lời Nhắn Từ Cô Giáo

**Tiêu đề:** *"Khám phá khoảng khắc của bé qua từng tấm hình"*

**Hai phần:**
- **Lời nhắn từ 3 cô giáo:** Cô Bích Trâm, Cô Thu, Cô Hiệp
- **Gallery ảnh:** Lưới ảnh các hoạt động của bé

**Cách tạo:**
1. Chia 2 cột: lời nhắn cô giáo (trái) - gallery ảnh (phải)
2. Mỗi lời nhắn có: avatar cô giáo, nội dung, và tên cô
3. Tạo lưới ảnh 3 cột với các ảnh từ thư mục `khoanhKhac/`
4. Thêm hiệu ứng zoom khi di chuột vào từng ảnh
5. Phía dưới thêm slideshow ảnh với thư viện react-image-gallery

---

## 5. Popup Góc Phụ Huynh

**Cách tạo:**
1. Nhấn vào mục **"Góc Phụ Huynh"** trên menu sẽ mở popup
2. Popup chiếm 90% màn hình, nền trắng
3. Hiển thị 1 ảnh lớn tại một thời điểm
4. Có nút mũi tên trái/phải để chuyển ảnh
5. Hiển thị số thứ tự ảnh hiện tại
6. Ảnh lấy từ thư mục `tuyenTruyen/`
7. Nút X góc trên phải để đóng popup

---

## 6. Popup Lịch Học

**Cách tạo:**
1. Tương tự popup Góc Phụ Huynh
2. Nhấn vào mục **"Lịch Học"** trên menu để mở
3. Hiển thị các hình ảnh lịch học từ thư mục `lichHoc/`
4. Có nút điều hướng qua lại giữa các ảnh

---

## 7. Phần Chat Bot

**Tiêu đề:** *"Gặp gỡ Chat Bot của chúng tôi để được tư vấn"*

**Các thành phần:**
- Chat bot tương tác trả lời câu hỏi về trường
- Mô tả hướng dẫn sử dụng

**Cách tạo:**
1. Tích hợp thư viện chat bot (react-chatbotify)
2. Kết nối với API để trả lời câu hỏi tự động
3. Chat bot có thể trả lời về: chương trình học, hoạt động ngoại khóa, quy trình nhập học...
4. Thiết kế giao diện chat hiện đại, dễ sử dụng

---

## 8. Chân Trang (Footer - "Trúc Đào")

**Các thành phần:**
- Logo **"Trúc Đào"**
- **Liên hệ với chúng tôi:** Số điện thoại, email
- **Địa chỉ:** 20 Lý Tự Trọng, Thạch Thang, Hải Châu, Đà Nẵng

**Cách tạo:**
1. Tạo phần footer với 3 cột thông tin
2. Cột 1: Logo trường
3. Cột 2: Thông tin liên hệ (điện thoại, email có thể nhấn vào để gọi/gửi mail)
4. Cột 3: Địa chỉ trường
5. Thêm đường viền trên để phân cách với nội dung

---

## Công Nghệ Sử Dụng

- **React** + **TypeScript**: Xây dựng giao diện
- **Styled-components**: Tạo CSS trong JavaScript
- **Webpack**: Đóng gói ứng dụng
- **react-image-gallery**: Thư viện slideshow ảnh
- **react-chatbotify**: Thư viện chat bot

---

## Cấu Trúc Thư Mục Ảnh

- `img/general/` - Ảnh cho phần Hero
- `img/khoanhKhac/` - Ảnh các khoảnh khắc hoạt động
- `img/tuyenTruyen/` - Ảnh cho Góc Phụ Huynh
- `img/lichHoc/` - Ảnh lịch học

