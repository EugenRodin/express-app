Сервер побудований на основі Express.js і має наступну функціональність:  
   1.Кореневий маршрут:  

GET /: Повертає відповідь "GET Response from the Express for the root route".
   
   2.Маршрути для користувачів:  
GET /users: Повертає відповідь "GET Users route".
POST /users: Валідуючи дані за допомогою Joi, повертає відповідь "POST Users route".
GET /users/:userId: Повертає відповідь "GET Users route {userId}".
PUT /users/:userId: Валідуючи дані за допомогою Joi, повертає відповідь "PUT Users by id route with id: {userId}".
DELETE /users/:userId: Повертає відповідь "DELETE Users by id route with id: {userId}".
  
  3.Маршрути для статей:  
GET /articles: Повертає відповідь "GET Users route".
POST /articles: Повертає відповідь "GET Users route".
GET /articles/:ArticleId: Повертає відповідь "GET Users route {ArticleId}".
PUT /articles/:ArticleId: Повертає відповідь "PUT Users by id route with id: {ArticleId}".
DELETE /articles/:ArticleId: Повертає відповідь "DELETE Users by id route with id: {ArticleId}".

Інструкції щодо встановлення та запуску

1.Клонування репозиторію:  
git clone <URL_вашого_репозиторію>
cd express-app
2.Встановлення залежностей: Використовуйте npm або yarn для встановлення залежн��стей:  
npm install
# або
yarn install
Запуск сервера: Використовуйте npm або yarn для запуску сервера:  
npm start
# або
yarn start

Опис кожного оброблюваного маршруту

Кореневий маршрут

GET /:
Опис: Повертає відповідь "GET Response from the Express for the root route".
Контролер: getRootHandler з файлу src/controllers/root.mjs.

Маршрути для користувачів

GET /users:  
Опис: Повертає відповідь "GET Users route".
Контролер: getUsersHandler з файлу src/controllers/users.mjs.

POST /users:  
Опис: Валідує дані за допомогою Joi, повертає відповідь "POST Users route".
Контролер: postUsersHandler з файлу src/controllers/users.mjs.
Валідатор: validateUserPost з файлу src/validarors/userValidator.mjs.

GET /users/:userId:  
Опис: Повертає відповідь "GET Users route {userId}".
Контролер: getUserByIdHandler з файлу src/controllers/users.mjs.

PUT /users/:userId:  
Опис: Валідує дані за допомогою Joi, повертає відповідь "PUT Users by id route with id: {userId}".
Контролер: putUserByIdHandler з файлу src/controllers/users.mjs.
Валідатор: validateUserPut з файлу src/validarors/userValidator.mjs.

DELETE /users/:userId:  
Опис: Повертає відповідь "DELETE Users by id route with id: {userId}".
Контролер: deleteUserByIdHandler з файлу src/controllers/users.mjs.

Маршрути для статей
GET /articles:  
Опис: Повертає відповідь "GET Users route".
Контролер: getArticlesHandler з файлу src/controllers/articles.mjs.

POST /articles:  
Опис: Повертає відповідь "GET Users route".
Контролер: postArticlesHandler з файлу src/controllers/articles.mjs.

GET /articles/:ArticleId:  
Опис: Повертає відповідь "GET Users route {ArticleId}".
Контролер: getArticleByIdHandler з файлу src/controllers/articles.mjs.

PUT /articles/:ArticleId:  
Опис: Повертає відповідь "PUT Users by id route with id: {ArticleId}".
Контролер: putArticleByIdHandler з файлу src/controllers/articles.mjs.

DELETE /articles/:ArticleId:
Опис: Повертає відповідь "DELETE Users by id route with id: {ArticleId}".
Контролер: deleteArticleByIdHandler з файлу src/controllers/articles.mjs.