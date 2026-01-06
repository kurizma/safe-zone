The right order to start your services is:

Start Order (Sequential):
## 1. First - Start Jenkins (infrastructure)

````
cd infra/jenkins
docker compose up -d --build
````

This runs Jenkins at localhost:9090

## 2. Second - Start SonarQube (code analysis tool)

````
cd /root/java-jenk
docker compose -f sonarqube-compose.yml up -d --build
````
This runs SonarQube at localhost:9000

## 3. Third - Start your Workspace (application services)

````
cd /root/java-jenk
docker compose up -d --build
````
This runs your backend and frontend services

## Why this order?
1. Jenkins first - It's the orchestrator/controller

2. SonarQube second - It's a dependency for the build pipeline (Jenkins will need to reach it)

3. Workspace last - Your app services; they can start anytime, but Jenkins needs to be ready to orchestrate builds

## Verification Commands:
````
# Check all running containers
docker ps

# You should see:
# - jenkins container (port 9090)
# - sonarqube container (port 9000)
# - sonarqube-db container (PostgreSQL)
# - backend services (discovery, gateway, user, product, media)
# - frontend container
````
## Network Communication:
All containers will be in the same Docker network, so:

- Jenkins can reach SonarQube at http://sonarqube:9000 (use this in credentials)

- Jenkins can reach your app services internally

- Your app can communicate with each other

