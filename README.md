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
# Generate Image Client React App
cd blog-client-react
docker build -t larturi/blog-client:latest .
docker push larturi/blog-client:latest

# Generate Image Comments Service
cd blog-service-comments-node
docker build -t larturi/comments:latest .
docker push larturi/comments:latest

# Generate Image Moderation Service
cd blog-service-moderation-node
docker build -t larturi/moderation:latest .
docker push larturi/moderation:latest

# Generate Image Posts Service
cd blog-service-posts-node
docker build -t larturi/posts:latest .
docker push larturi/posts:latest

# Generate Image Query Service
cd blog-service-query-node
docker build -t larturi/query:latest .
docker push larturi/query:latest

# Generate Image Event Bus
cd blog-event-bus-node
docker build -t larturi/eventbus:latest .
docker push larturi/eventbus:latest

# Deployments
cd blog-infra-k8s/k8s
kubectl apply -f client-deploy.yaml
kubectl apply -f comments-deploy.yaml
kubectl apply -f moderation-deploy.yaml
kubectl apply -f posts-deploy.yaml
kubectl apply -f query-deploy.yaml
kubectl apply -f eventbus-deploy.yaml

# Services
kubectl apply -f posts-service.yaml

# Ingress
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.6.4/deploy/static/provider/cloud/deploy.yaml
kubectl apply -f ingress-srv.yaml

# Add in etc/hosts
127.0.0.1 posts.com

```

##### Made with ❤️ by Leandro Arturi
