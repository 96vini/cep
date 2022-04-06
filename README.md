# Integração ViaCEP
Integração da API do ViaCEP com Lumen e React

# Configurando o projeto

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

Crie um arquivo .env igual ao exemplo abaixo:

```
APP_NAME=CEP
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost
APP_TIMEZONE=UTC

LOG_CHANNEL=stack
LOG_SLACK_WEBHOOK_URL=

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=cep
DB_USERNAME=cep
DB_PASSWORD=cep123

CACHE_DRIVER=redis
QUEUE_CONNECTION=sync

REDIS_CLIENT=predis

REDIS_HOST=127.0.0.1
REDIS_PORT=6379
REDIS_DATABASE=0
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