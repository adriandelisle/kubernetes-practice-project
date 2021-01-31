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

TODO
