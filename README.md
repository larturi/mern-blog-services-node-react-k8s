# MERN Blog Services App

- Services: Node & Express
- Frontend: React & Bootstrap
- Infra: K8S

<br />

# Frontend

Run the development server:

```bash
npm install

npm start
```

Listening at <http://localhost:3000>

<br />

# Services

## Posts Service

Run the development app:

```bash
npm install

npm start
```

Listening at <http://localhost:4000>

## Comments Service

Run the development app:

```bash
npm install

npm start
```

Listening at <http://localhost:4001>

## Query Service

Run the development app:

```bash
npm install

npm start
```

Listening at <http://localhost:4002>

## Moderation Service

Run the development app:

```bash
npm install

npm start
```

Listening at <http://localhost:4003>

## Bus Event Service

Run the development app:

```bash
npm install

npm start
```

Listening at <http://localhost:8000>

<br />

# Docker

```bash
docker build -t larturi/posts:0.0.1 .

docker run -d --name blog-moderation-service larturi/posts:0.0.1
```

##### Made with ❤️ by Leandro Arturi
