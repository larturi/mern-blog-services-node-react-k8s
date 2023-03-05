# MERN Blog Services App

- Services: Node & Express
- Frontend: React & Bootstrap
- Infra: K8S

# Frontend

Run the development server:

```bash
npm install

npm start
```

Listening at <http://localhost:3000>

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

# Docker

```bash
# Generate Image Comments Service
cd blog-service-comments-node
docker build -t larturi/comments:0.0.1 .
docker push larturi/comments:0.0.1

# Generate Image Moderation Service
cd blog-service-moderation-node
docker build -t larturi/moderation:0.0.1 .
docker push larturi/moderation:0.0.1

# Generate Image Posts Service
cd blog-service-posts-node
docker build -t larturi/posts:0.0.1 .
docker push larturi/posts:0.0.1

# Generate Image Query Service
cd blog-service-query-node
docker build -t larturi/query:0.0.1 .
docker push larturi/query:0.0.1

# Generate Image Event Bus
cd blog-event-bus-node
docker build -t larturi/eventbus:0.0.1 .
docker push larturi/eventbus:0.0.1

# Deployments
cd blog-infra-k8s/k8s
kubectl apply -f comments-deploy.yaml
kubectl apply -f moderation-deploy.yaml
kubectl apply -f posts-deploy.yaml
kubectl apply -f query-deploy.yaml
kubectl apply -f eventbus-deploy.yaml
```

##### Made with ❤️ by Leandro Arturi
