# Hướng Dẫn Chi Tiết Tạo Trang Web Trường Mầm Non Trúc Đào

Tài liệu này hướng dẫn từng bước tạo trang web từ đầu đến khi xuất bản lên GitHub Pages.

---

## Bước 1: Tạo Repository Trên GitHub

1. Đăng nhập vào tài khoản GitHub tại https://github.com
2. Nhấn nút **"New"** hoặc **"+"** ở góc trên bên phải để tạo repository mới
3. Điền thông tin:
   - **Repository name:** `ban-tin-thang`
   - **Description:** Trang web Trường Mầm Non Trúc Đào
   - Chọn **Public** (bắt buộc để dùng GitHub Pages miễn phí)
   - Tick chọn **"Add a README file"**
4. Nhấn **"Create repository"**

---

## Bước 2: Clone Repository Về Máy Tính

1. Mở Terminal/Command Prompt
2. Di chuyển đến thư mục muốn lưu dự án
3. Chạy lệnh:
   ```bash
   git clone https://github.com/cogiaomamnon/ban-tin-thang.git
   ```
4. Di chuyển vào thư mục dự án:
   ```bash
   cd ban-tin-thang
   ```

---

## Bước 3: Khởi Tạo Dự Án React + TypeScript

1. Khởi tạo file `package.json`:
   ```bash
   npm init -y
   ```

2. Cài đặt các thư viện cần thiết:
   ```bash
   npm install react react-dom styled-components react-image-gallery react-chatbotify @rcb-plugins/llm-connector
   ```

3. Cài đặt các thư viện phát triển:
   ```bash
   npm install --save-dev typescript webpack webpack-cli webpack-dev-server html-webpack-plugin babel-loader @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript css-loader style-loader file-loader gh-pages @types/react @types/react-dom
   ```

---

## Bước 4: Tạo Cấu Trúc Thư Mục

Tạo cấu trúc thư mục như sau:

```
ban-tin-thang/
├── public/
│   └── index.html          # File HTML gốc
├── src/
│   ├── index.tsx           # Entry point
│   ├── App.tsx             # Component chính
│   ├── App.styled.tsx      # Styled components
│   ├── components/         # Các thành phần UI
│   │   ├── header/
│   │   ├── hero/
│   │   ├── activities/
│   │   ├── rules/
│   │   ├── footer/
│   │   ├── chatbotSection/
│   │   ├── imageGalleryModal/
│   │   └── lichHocModal/
│   ├── containers/
│   │   └── chatbot/
│   ├── css/               # File CSS
│   │   ├── style.css
│   │   ├── general.css
│   │   └── queries.css
│   └── img/               # Hình ảnh
│       ├── general/
│       ├── khoanhKhac/
│       ├── tuyenTruyen/
│       └── lichHoc/
├── package.json
├── tsconfig.json
└── webpack.config.js
```

---

## Bước 5: Cấu Hình Webpack

Tạo file `webpack.config.js` để đóng gói ứng dụng:

- Cấu hình entry point là `src/index.tsx`
- Cấu hình output ra thư mục `dist/`
- Thêm loader cho TypeScript, CSS, và hình ảnh
- Cấu hình HtmlWebpackPlugin để tạo file HTML

---

## Bước 6: Cấu Hình TypeScript

Tạo file `tsconfig.json` với cấu hình:

- Target: ES6
- JSX: react-jsx
- Module: ESNext
- Strict mode: true

---

## Bước 7: Tạo File HTML Gốc

Tạo file `public/index.html`:

- Đặt tiêu đề trang: "Trường Mầm Non Trúc Đào"
- Thêm viewport meta tag cho responsive
- Thêm thẻ div với id="root" để React render vào

---

## Bước 8: Xây Dựng Các Component

### 8.1. Header (Thanh điều hướng)
- Tạo logo "Trúc Đào" bên trái
- Thêm nút chuông thông báo với badge đỏ
- Tạo popup thông báo với danh sách thông báo
- Thêm menu điều hướng: Hoạt động, Góc Phụ Huynh, Lịch Học, Chat Bot

### 8.2. Hero Section (Phần giới thiệu)
- Chia 2 cột: nội dung trái, hình ảnh phải
- Viết tiêu đề và mô tả về trường
- Thêm 2 nút: "Theo dõi nhà trường" và "Khám phá"
- Tạo bố cục 3 hình ảnh xếp chồng nghệ thuật

### 8.3. Rules (Phần hoạt động của bé)
- Tạo 3 mục đánh số: Học tập, Ngoại khóa, Dinh dưỡng
- Xen kẽ vị trí nội dung và hình ảnh

### 8.4. Activities (Hình ảnh & Lời nhắn cô giáo)
- Hiển thị lời nhắn từ 3 cô giáo
- Tạo gallery ảnh dạng lưới
- Thêm slideshow ảnh với react-image-gallery

### 8.5. ChatBot Section
- Tích hợp react-chatbotify
- Kết nối với API để trả lời câu hỏi

### 8.6. Footer (Chân trang)
- Hiển thị logo, thông tin liên hệ, địa chỉ

### 8.7. Popup Góc Phụ Huynh & Lịch Học
- Tạo modal chiếm 90% màn hình
- Hiển thị 1 ảnh với nút điều hướng qua lại

---

## Bước 9: Thêm Hình Ảnh

1. Tạo các thư mục trong `src/img/`:
   - `general/` - Ảnh cho Hero section
   - `khoanhKhac/` - Ảnh các khoảnh khắc
   - `tuyenTruyen/` - Ảnh cho Góc Phụ Huynh
   - `lichHoc/` - Ảnh lịch học

2. Copy các hình ảnh vào thư mục tương ứng

3. Import hình ảnh trong các component

---

## Bước 10: Viết CSS

1. Tạo file `src/css/style.css` - Style chính
2. Tạo file `src/css/general.css` - Style tổng quát
3. Tạo file `src/css/queries.css` - Media queries cho responsive

Các style quan trọng:
- Layout grid 2 cột cho Hero
- Gallery ảnh dạng lưới 3 cột
- Hiệu ứng hover cho ảnh và button
- Responsive cho mobile

---

## Bước 11: Cấu Hình Scripts Trong package.json

Thêm các scripts sau vào `package.json`:

```json
"scripts": {
  "start": "webpack serve --mode development",
  "build": "webpack --mode production",
  "deploy": "gh-pages -d dist"
}
```

- `npm start` - Chạy ứng dụng ở chế độ phát triển
- `npm run build` - Build ứng dụng ra thư mục dist
- `npm run deploy` - Deploy lên GitHub Pages

---

## Bước 12: Cấu Hình Homepage

Thêm dòng sau vào `package.json`:

```json
"homepage": "https://cogiaomamnon.github.io/ban-tin-thang"
```

Thay `cogiaomamnon` bằng username GitHub của bạn.

---

## Bước 13: Chạy Thử Ứng Dụng

1. Chạy ứng dụng ở chế độ phát triển:
   ```bash
   npm start
   ```

2. Mở trình duyệt và truy cập: http://localhost:8080

3. Kiểm tra các chức năng:
   - Thanh điều hướng hoạt động đúng
   - Các popup mở đúng
   - Thông báo hiển thị đúng
   - Chat bot phản hồi đúng
   - Responsive trên mobile

---

## Bước 14: Commit Và Push Code Lên GitHub

1. Thêm tất cả file vào git:
   ```bash
   git add .
   ```

2. Tạo commit:
   ```bash
   git commit -m "Tạo trang web Trường Mầm Non Trúc Đào"
   ```

3. Push lên GitHub:
   ```bash
   git push origin main
   ```

---

## Bước 15: Build Ứng Dụng

Chạy lệnh build để tạo phiên bản production:

```bash
npm run build
```

Lệnh này sẽ tạo thư mục `dist/` chứa các file đã được tối ưu hóa.

---

## Bước 16: Deploy Lên GitHub Pages

1. Chạy lệnh deploy:
   ```bash
   npm run deploy
   ```

2. Lệnh này sẽ:
   - Build ứng dụng (nếu chưa build)
   - Tạo branch `gh-pages`
   - Push nội dung thư mục `dist/` lên branch `gh-pages`

---

## Bước 17: Cấu Hình GitHub Pages

1. Vào repository trên GitHub
2. Nhấn **Settings** → **Pages** (trong menu bên trái)
3. Trong phần **Source**, chọn:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Nhấn **Save**

---

## Bước 18: Truy Cập Trang Web

Sau khi cấu hình xong, trang web sẽ được public tại:

**https://cogiaomamnon.github.io/ban-tin-thang**

(Thay `cogiaomamnon` bằng username GitHub của bạn)

Lưu ý: Có thể mất vài phút để GitHub Pages cập nhật.

---

## Cập Nhật Trang Web

Khi muốn cập nhật nội dung:

1. Sửa code trong thư mục `src/`
2. Commit và push lên GitHub:
   ```bash
   git add .
   git commit -m "Cập nhật nội dung"
   git push origin main
   ```
3. Deploy lại:
   ```bash
   npm run deploy
   ```

---

## Thêm API Key Cho Chat Bot (Tùy chọn)

Nếu sử dụng Chat Bot với API:

1. Tạo file `.env` ở thư mục gốc:
   ```
   API_KEY=your_api_key_here
   ```

2. Trong `webpack.config.js`, thêm:
   ```javascript
   const webpack = require('webpack');
   
   plugins: [
     new webpack.DefinePlugin({
       'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
     }),
   ]
   ```

3. Trong GitHub, vào **Settings** → **Secrets and variables** → **Actions** để thêm secret `API_KEY`

---

## Kết Luận

Sau khi hoàn thành các bước trên, bạn sẽ có một trang web hoàn chỉnh cho Trường Mầm Non Trúc Đào, được host miễn phí trên GitHub Pages.

**Các tính năng chính:**
- ✅ Giao diện đẹp, responsive trên mọi thiết bị
- ✅ Hệ thống thông báo
- ✅ Gallery ảnh với popup xem chi tiết
- ✅ Chat bot tư vấn tự động
- ✅ Host miễn phí trên GitHub Pages

