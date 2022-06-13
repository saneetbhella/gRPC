import { Payment } from './proto/payment/payment_pb.js';
import { PaymentServiceClient } from './proto/payment/payment_grpc_web_pb.js';

const paymentService = new PaymentServiceClient('http://localhost:8081');

const pay = () => {
    const id = document.getElementById('id').value;
    const price = document.getElementById('price').value;
    const currency = document.getElementById('currency').value;

    if (!id || !price || !currency) {
        respond('Form elements empty!');
        return;
    }

    const payment = new Payment()
        .setId(id)
        .setPrice(price)
        .setCurrency(currency);

    paymentService.pay(payment, {}, function(err, response) {
        if (err) {
            console.error(err);
            response(`There has been an error ${err.code} - ${err.message}`);
        }
        respond(response.getStatus());
    });
};

const respond = (response) => document.getElementById('response').innerHTML = response;

window.pay = pay;
