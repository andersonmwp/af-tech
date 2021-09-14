# AF Tech

#### Teste realizado para a entrevista da vaga "Desenvolvedor júnior" na empresa Keener.io

A AF Tech é uma empresa de gestão de produtos, onde você pode cadastrar seus produtos e controlar a movimentação do seu estoque.
<br>
Na plataforma poderemos cadastrar usuários, cadastrar produtos, e registrar as movimentações de entrada ou saída do estoque.

#### Um sistema de informações inteligentes!

### Tecnologias

&#46; <strong>FIGMA:</strong> para o desenvolvimento do wireframe e layout
<br>
&#46; <strong>HTML e CSS:</strong> para  o desenvolvimento do Front-End
<br>
&#46; <strong>Javascript:</strong> para o desenvolvimento do Back-End

### O sistema

O sistema possui cinco páginas, que são:
<br>
<br>
<strong>Login:</strong> <a>https://af-tech.vercel.app/</a>
<br>
O usuário cadastrado efetuará o seu login, a página possui validação e autenticação de usuários.
<br>
<br>
<strong>Cadastro de Usuários:</strong> <a>https://af-tech.vercel.app/registration.html</a>
<br>
Os usuários poderão efetuar seus cadastros, os dados serão enviados para o LocalStorage* do browser, a página também possui validação.
<br>
<br>
<strong>Cadastro de Produtos:</strong> <a>https://af-tech.vercel.app/product.html</a>
<br>
Poderá ser feita o cadastro dos produtos que serão enviado ao banco de dados e retornando os dados em uma tabela de listagem.
<br>
<br>
<strong>Listagem de Produtos:</strong> <a>https://af-tech.vercel.app/list.html</a>
<br>
Página que será exibia após o login do usuário, contendo uma saudação ao usuário e uma tabela com todos os produtos cadastrados.
<br>
<br>
<strong>Movimentação de Estoque:</strong> <a>https://af-tech.vercel.app/movement.html</a>
<br>
Nessa página será possível registrar uma movimentação dos produtos, de entrada e saída. Que será exibia na tabela abaixo, informando qual o status da movimentação e também podendo editar ou deletar a movimentação.

### Desenvolvimento
Para o layout foi utilizado o software <a href="https://www.figma.com/file/o0NQsHuA2EKTzNKfifqrY5/AF-Tech---teste-de-entrevista?node-id=0%3A1">FIGMA</a>, onde foi desenhado o wireframe e desenvolvido a prototipação projeto.
<br>
<br>
Para o Front-End foi utilizado HTML e CSS basicamente.
<br>
<br>
Para o Back-End foi pensado a utilzação do Javascript interligando o banco de dados em MySQL, porém no desenvolvimento foram encontradas algumas dificuldades em relação a essa fase (preciso um pouco mais de estudos em back-end).
<br>
Portanto, a solução foi recorrer ao StorageLocal do browser.
<br>
<br>
O deploy foi utilizado os serviços da Vercel.
<br>
<br>
<strong>Observação:</strong> nas páginas de cadastro de produtos, listagem e movimentação, só está pronto o Front-End.
<br> 
As páginas de login e cadastro foi utilizado o LocalStorage para armazenagem dos dados.
<br>
Na autenticação do usuário, ao efetuar o login é gerado um token para utilização do sistema. Após efetuar o logout o token é removido.

### BUG's
No desenvolvimento da autenticação de login, foram encontrados alguns bugs:
<br>
&#46; Quando o usuário vai efetuar o login, clicando no botão de "Entrar" ele ao invés de ser redirecionado, continua na mesma tela.
<br>
&#46; Ao efetuar o logout, não está removendo a permissão de login, e com isso conseguindo logar no sistema mesmo não tendo efetuado o login.
<br>
&#46; Quando o usuário termina seu cadastro, era para ser redirecionado para a tela de login, porém o mesmo não está acontencendo.

### Próximos passos
&#46; Criação do banco de dados relacional.
<br>
&#46; Requisição ao banco de dados, salvando as informações geradas e as retornando ao Front.
<br>
&#46; Correção dos bugs e melhoria da autenticação
<br>
&#46; Implementação de mais opções de gestão, geração de relatórios e gráficos.

### Imagens do projeto

#### Página de login

#### Página de cadastro de usuários

#### Página de listagens

#### Página de cadastro dos produtos

#### Página de movimentação de estoque


