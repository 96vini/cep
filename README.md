# Integração ViaCEP
Integração da API do ViaCEP com Lumen e React

# Configurando o Back-End

Para que o back-end do projeto funcione são necessárias algumas configurações iniciais. Vamos lá.

Precisamos dos containers do Docker para que a aplicação rode.

Na pasta 'api' digite o comando.

```
docker-compose up -d
```

Digite o comando abaixo para instalar as dependencias do Lumen. 

```
composer install
```

Após isso, digite o comando abaixo para criar a estrutura no banco de dados.

```
php artisan migrate
```

Para rodar a aplicação do backend digite o comando

```
php -S localhost:8000 -t public/
```

Atenção, precisa ser na porta 8000, pois a configuração do front-end está setada para essa porta.

Feito isso, vamos configurar o front-end.

Entre na pasta 'app'.

Digite o comando abaixo para instalar as dependencias do React.

```
npm i
```

E após isso digite

```
npm start
```

Pronto. A aplicação vai estar rodando corretamente na sua máquina 