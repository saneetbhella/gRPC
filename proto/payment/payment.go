package payment

import (
	"context"
	"github.com/saneetbhella/logger"
)

type Server struct {
	UnimplementedPaymentServiceServer
}

func (*Server) Pay(ctx context.Context, p *Payment) (*Response, error) {
	logger.Info("Received payment for ID", p.Id)
	return &Response{Status: "Payment successful"}, nil
}
