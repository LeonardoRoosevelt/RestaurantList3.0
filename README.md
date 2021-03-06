# Restaurant List 3.0
A simple web application for lovely restaurant

## Features
- listing restaurant from restaurant.json
- searching restaurant by name, english name and category
- create, edit and delete the restaurant data
- sort restaurants by name, category and rating
- user login and register feature
- user can login by facebook

### Searching
type the name or category of the restaurant in search bar

### Create
click the create button to add new restaurant information

### Restaurant Details
click the restaurant card or detail button bellow to get more details

### Restaurant Edit
click the edit button bellow to edit the information

### Restaurant Delete
click the delete button bellow to delete the information

### Sort Restaurant List
select to sort the list by method you want

### Environment SetUp - 環境建置
mongoDB: 3.6.0
mongoose: 5.10.2
Node.js
Express: 4.17.1
Express-Handlebars: 5.1.0
nodemon
body-parser: 1.19.0
method-override: 3.0.0
bcryptjs: 2.4.3
connect-flash: 0.1.1
passport: 0.4.1


### Installing - 專案安裝流程
打開你的 terminal，Clone 此專案至本機電腦
```
git clone https://github.com/LeonardoRoosevelt/restaurantList
```
開啟終端機(Terminal)，進入存放此專案的資料夾
```
cd restaurantList
```
安裝 npm 套件
```
在 Terminal 輸入 npm install 指令
```
安裝 nodemon 套件
```
在 Terminal 輸入 nodemon app.js 指令
```
啟動伺服器，執行 app.js 檔案
```
nodemon app.js
```
導入預設資料
```
npm run seed
```
當 terminal 出現以下字樣，表示預設資料已成功建立
```
done
當 terminal 出現以下字樣，表示伺服器與資料庫已啟動並成功連結
```
The Express server is running on http://localhost:3000
```

現在，你可開啟任一瀏覽器瀏覽器輸入 "http://localhost:3000" 開始使用



### Contributor - 專案開發人員
[Leonardo Roosevelt](https://github.com/LeonardoRoosevelt)