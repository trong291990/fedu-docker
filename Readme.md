# 1. Cài đặt

1. Clone project về máy
2. Mở terminal, cd đến thư mục project
3. Chạy lệnh `docker-compose up -d`


# 2. Test

### 2.1. Test API với MongoDB
Mở trình duyệt, gõ `http://localhost:5000/` hoặc 
`http://localhost:5000/create-user`
để xem danh sách / tạo user, sử dụng mongodb


### 2.2. Test API với MySQL
Mở trình duyệt, gõ `http://localhost:5000/mysql` để kiểm tra có kết nối được với mysql không

### 2.3 Sử dụng phần mềm để quản lý MongoDB (ví dụ MongoDB Compass)
- Host: localhost
- Port: 27018
- Username: admin
- Password: 123
- Database: mydb

(Lưu ý trong code api, host phải là `mongodb` chứ không phải `localhost`, port là `27017` chứ không phải `27018`)


### 2.4 Sử dụng phần mềm để quản lý MySQL (ví dụ MySQL Workbench)
- Host: localhost
- Port: 3307
- Username: root
- Password: 123
- Database: mydb

(Lưu ý trong code api, host phải là `mysql` chứ không phải `localhost`, port là `3306` chứ không phải `3307`)


# 3. Sử dụng
### 3.1. API
Code ví dụ đang sử dụng express, mongodb, mysql

- Giữ lại file Dockerfile, thay toàn bộ code bằng code api của bạn. Lưu ý sử dụng thông tin kết nối Database như ví dụ trong index.js

- Nếu muốn cài đặt thêm các thư viện khác, ví dụ dayjs: tại thư mục ngang hàng với docker-compose.yml:
  - Chạy lệnh `docker-compose exec api npm install dayjs --save`
  - Sau khi cài đặt xong, restart lại container `api` bằng lệnh `docker-compose restart api`
  - Nếu bạn sử dung nodemon, không cần restart container

### 3.2. WEB
Code ví dụ đang sử dụng nextjs

- Thay toàn bộ code bằng code web của bạn. Lưu ý sử dụng thông tin kết nối API như ví dụ trong index.html. (Thư mục này không cần Dockerfile)
- Nếu muốn cài đặt thêm các thư viện khác, ví dụ axios: tại thư mục ngang hàng với docker-compose.yml:
  - Chạy lệnh `docker-compose exec web npm install axios --save`
  - Sau khi cài đặt xong, restart lại container `web` bằng lệnh `docker-compose restart web`
  - Thay đổi code thì không cần restart container