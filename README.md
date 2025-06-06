# react digital clock v2

## localhost install

npm i --legacy-peer-deps

### create certificate for localhost

mkcert localhost

### local start

yarn start

## docker

docker build -t react-clock-app .

docker run -p 3080:80 --name react-clock-container react-clock-app
