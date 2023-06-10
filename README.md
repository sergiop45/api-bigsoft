API BigSoft

API para gerenciamento de emails, posts, usuários e autenticação.

Base URL
https://api-bigsoft-production.up.railway.app/

Endpoints:

Emails

GET /api/email/{id}: Obtém um email pelo ID.

GET /api/email: Obtém todos os emails.

POST /api/email: Cria um novo email.

PATCH /api/email/{id}: Atualiza um email pelo ID. **PROTEGIDA**

DELETE /api/email/{id}: Deleta um email pelo ID.  **PROTEGIDA**



{
	"name": "JOAO",
	"fone": "4188992911",
	"email": "joao@gmail.com",
	"message": "testando email"
}

Posts

GET /api/post/{id}: Obtém um post pelo ID.

GET /api/post: Obtém todos os posts.

POST /api/post: Cria um novo post.

PATCH /api/post/{id}: Atualiza um post pelo ID.  **PROTEGIDA**

DELETE /api/post/{id}: Deleta um post pelo ID.  **PROTEGIDA**


EXEMPLO DE BODY:

{
	"title": "primeiro post",
	"description": "esse é o primeiro post feito em produçao.",
	"author": "Sérgio"
}

Usuários

GET /api/user/{id}: Obtém um usuário pelo ID. *NAO IMPLEMENTADA

GET /api/user: Obtém todos os usuários.  **PROTEGIDA**

POST /api/user: Cria um novo usuário.

PATCH /api/user/{id}: Atualiza um usuário pelo ID. *NAO IMPLEMENTADA

DELETE /api/user/{id}: Deleta um usuário pelo ID. *NAO IMPLEMENTADA

Autenticação

POST /api/login: Realiza o login de um usuário.

GET /api/logout: Realiza o logout de um usuário.


substituir {id} pelos IDs reais dos recursos específicos ao fazer as requisições.

As rotas protegidas devem ser acessadas com token de autenticação.




