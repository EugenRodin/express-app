## Функціональність сервера

Сервер побудований на основі `Express.js` і має наступну функціональність:

1. **Кореневий маршрут**:
   - **GET `/`**: Повертає відповідь "GET Response from the Express for the root route".

2. **Маршрути для користувачів**:
   - **GET `/users`**: Повертає відповідь "GET Users route".
   - **POST `/users`**: Повертає відповідь "POST Users route".
   - **GET `/users/:userId`**: Повертає відповідь "GET Users route {userId}".
   - **PUT `/users/:userId`**: Повертає відповідь "PUT Users by id route with id: {userId}".
   - **DELETE `/users/:userId`**: Повертає відповідь "DELETE Users by id route with id: {userId}".

3. **Маршрути для статей**:
   - **GET `/articles`**: Повертає відповідь "GET Users route".
   - **POST `/articles`**: Повертає відповідь "GET Users route".
   - **GET `/articles/:ArticleId`**: Повертає відповідь "GET Users route {ArticleId}".
   - **PUT `/articles/:ArticleId`**: Повертає відповідь "PUT Users by id route with id: {ArticleId}".
   - **DELETE `/articles/:ArticleId`**: Повертає відповідь "DELETE Users by id route with id: {ArticleId}".