Для локального запуску треба зробити: "npm run dev"

Бекенд задеплоєний - https://bitbucket-backend.onrender.com
Код - https://github.com/ledavto/BitBucket_backend

файл .env
"
DB_HOST='mongodb+srv://user-butbucket:LgLLCtgp2oYk69pj@cluster0.4dvwoew.mongodb.net/db-test?retryWrites=true&w=majority'
PORT=3000
"

Роути:

---

post - https://bitbucket-backend.onrender.com/api/farm/ - додавання Аптеки
Приклад: {"title":"Name"}

get - https://bitbucket-backend.onrender.com/api/farm/:id - запит списку аптек

---

post - https://bitbucket-backend.onrender.com/api/product/ - додавання товарів
Приклад:
{
"titleProd": "Цитрамон",
"price": "25",
"picture": "https://root.tblcdn.com/img/goods/af45c99d-56c8-41d0-a9de-165885bad426/1/img_0.jpg?v=AAAAAAnhZ4I",
"ownerFarm": "65ea28c466767052a69de9e7",
}

get - https://bitbucket-backend.onrender.com/api/product/:id - запит списку аптек для Аптеки з "id"

get - https://bitbucket-backend.onrender.com/api/product/id/:id - запит даних товару за його "id"

---

post - https://bitbucket-backend.onrender.com/api/order/ - додавання товарів
Приклад:
{
"name":"Sergii",
"email": "ngfgh5@vtibul.co.uk",
"city": "Dnepr",
"phone":"+381112222999"
}
