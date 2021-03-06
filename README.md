# gRPC Golang Web Example
Simple app that uses gRPC web and Envoy proxy to communicate to a gRPC server.

---

## Pre-requisites
* Brew
* Protobuf CLI
* Golang 1.18
* Yarn
* Node 16
---

## Setup

### Installation
Download Protobuf tools and Envoy for development.
```
brew install protobuf protoc-gen-go protoc-gen-go-grpc protoc-gen-grpc-web
brew install envoy
```

### Start
1. Install frontend dependencies and setup hot-reload.
```
yarn --cwd './static/' install
yarn --cwd './static/' dev
```

2. Start a local Envoy instance.
```
envoy --config-path ./dev/envoy.yaml
```
---

## Generating Protobuf Files
### Backend:
```
protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative ./proto/payment/payment.proto
```

### Frontend:
```
protoc --js_out=import_style=commonjs:./static --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./static ./proto/payment/payment.proto
```
---

## CLI for Debugging
Evans is a [cli tool](https://github.com/ktr0731/evans) that uses reflection which allows you to easily call RPC functions. Some example commands are below.
### To Connect
```
evans -p 50051 -r
```
### Once Connected
```
show package # Shows packages
show service # Show services
show message # Show messages available
desc Payment # Describe a message
service PaymentService # Use a specific service
call Pay # Call a mathod within a service
```
