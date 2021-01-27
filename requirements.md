# Kubernetes for DevOps Beginners Group Final Project

## Project Name: covid-19 number lookup

### Description:

I want to get the infected people number of my area (city level) from two different data sources and use the average number as the truth.

### Requirements:

#### Architecture:

Workflow: Aggregator → Collector → data sources
Collector service: retrieves data from COVID-19 data source either via external APIs (ref: https://rapidapi.com/collection/coronavirus-covid-19) or local mock data, with access point and API like this: http://covid19-collector/infected/city/vancouver/?source=source-a (sample)

Hint: as we want to focus on K8S DevOps learning but not application development, you may use local mock data first and use API later
Aggregator service: gets the numbers from the Collector access point (via RESTful API) and output the average number

#### Deployment:

Run under minikube
Run within one cluster, each service has its own deployment, scalable (replica = 3 by default)
Access points are defined in deployment environment variables
Only the Aggregator can be exposed for localhost query
Better to have:

- readiness probe
- liveness probe

User Interface:

Input: http://covid19-aggregator/average/city/vancouver (sample)
Output:
`{ “city”: “Vancouver”, “infected”: 23456, “time”: “2021-01-18 18:23:20”, “sources” : [“source-a”, “source-b”] }`

Divide and conquer:
form 2 groups, each with 2-3 members.

Suggested options:

- Option 1: one group for Collector, one for Aggregator, to get 1 Demo
- Option 2: each group completes both Collector and Aggregator, to get 2 Demos
- Option 3: each member completes both Collector and Aggregator, to get 4 Demos (selected)

Plan:

- Starting: 1/22, two weeks, 4-8 hours in total
- Syncing: 1/29 1:00-1:30pm
- Demo: 2/5 1:00-1:45pm with QA & Review
- Ending: 2/5 1:45pm-2:00:pm Final feedbacks sharing
