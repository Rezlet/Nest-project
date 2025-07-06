# 1. Chọn image Node nhẹ & ổn định
FROM node:18-alpine

# 2. Tạo thư mục làm việc trong container
WORKDIR /app

# 3. Copy file package.json và package-lock.json (nếu có)
COPY package*.json ./

# 4. Cài đặt dependencies
RUN npm install

# 5. Copy toàn bộ source code vào container
COPY . .

# 6. Build project NestJS (ra thư mục dist)
RUN npm run build

# 7. Chạy file chính của NestJS sau khi build
CMD ["node", "dist/main"]

# 8. Mở cổng 3000 (NestJS mặc định)
EXPOSE 3000