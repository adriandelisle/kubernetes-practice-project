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

### Aggregator

```
PORT=8081 COLLECTOR_URL="localhost:8080" npm run start
```

or

```
PORT=8081 COLLECTOR_URL="localhost:8080" npm run dev
```

## Minikube

TODO
