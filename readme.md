# Project Summary

Summary is in the [requirements.md](./requirements.md)

# Local App Usage

## Starting services

### Collector

```
PORT=8080 npm run start
```

or

```
PORT=8080 npm run dev
```

#### Endpoints

`/am-i-up` -> `String`

`/infected/city/:city/` ->

```json
{
  "source-a": Number,
  "source-b": Number
}
```

### Aggregator

```

PORT=8081 COLLECTOR_URL="localhost:8080" npm run start

```

or

```

PORT=8081 COLLECTOR_URL="localhost:8080" npm run dev

```

#### Endpoints

`/am-i-up` -> `String`

`/average/city/:city/` ->

```json
{
  "city": String,
  "infected": Number,
  "time": String,
  "sources": Number[]
}
```

## Minikube

### Starting up everything

- Bring up minikube
  - `> minikube start` (WSL2 `> minikube start driver=docker`)
- Create a tunnel
  - In another terminal `> minikube tunnel`
  - [LoadBalancer access](https://minikube.sigs.k8s.io/docs/handbook/accessing/#loadbalancer-access)
- Bring up the deployments and services
  - `> make k8s-up`

### Accessing the service

`> curl localhost:8080/average/city/:city/`

### Clean up

`> make k8s-down`
