build-aggregator-image:
	docker build -t adriandelisle/k8s-practice-aggregator ./services/aggregator

build-collector-image:
	docker build -t adriandelisle/k8s-practice-collector ./services/collector

k8s-up:
	kubectl create -f kubernetes

k8s-down:
	-kubectl delete service collector-service
	-kubectl delete service aggregator-service
	-kubectl delete deployment k8s-practice-collector
	-kubectl delete deployment k8s-practice-aggregator