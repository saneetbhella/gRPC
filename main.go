package main

import (
	"github.com/saneetbhella/logger"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
	"grpc/proto/payment"
	"net"
	"net/http"
	"os"
)

func main() {
	// Start HTTP server for static files
	go func() {
		logger.Info("Static content served on port 8080")
		http.Handle("/", http.FileServer(http.Dir("./static")))
		http.ListenAndServe(":8080", nil)
	}()

	// Start TCP server for gRPC
	lis, err := net.Listen("tcp", ":50051")
	if err != nil {
		logger.Error("Could not start net server", err)
		os.Exit(1)
	}

	grpcServer := grpc.NewServer()

	// Register payment service to gRPC server
	payment.RegisterPaymentServiceServer(grpcServer, &payment.Server{})

	// Allows dynamic clients such as CLI tools for debugging
	reflection.Register(grpcServer)

	logger.Info("gRPC server started on port 50051")

	// Start gRPC server
	if err := grpcServer.Serve(lis); err != nil {
		logger.Error("Could not start gRPC server", err)
		os.Exit(1)
	}
}
