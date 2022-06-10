# gRPC Golang Web Example

Simple app that uses gRPC web and Envoy proxy to communicate to a gRPC server. 

## Generate protobuf files
```
protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative ./payment/payment.proto`
```

---

## CLI
Evans is a [cli tool](https://github.com/ktr0731/evans) that uses reflect which allows you to easily call RPC functions. Some example commands are below.
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
