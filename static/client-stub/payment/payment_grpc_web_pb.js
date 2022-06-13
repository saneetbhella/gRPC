/**
 * @fileoverview gRPC-Web generated client stub for payment
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.payment = require('./payment_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.payment.PaymentServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.payment.PaymentServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.payment.Payment,
 *   !proto.payment.Response>}
 */
const methodDescriptor_PaymentService_Pay = new grpc.web.MethodDescriptor(
  '/payment.PaymentService/Pay',
  grpc.web.MethodType.UNARY,
  proto.payment.Payment,
  proto.payment.Response,
  /**
   * @param {!proto.payment.Payment} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.payment.Response.deserializeBinary
);


/**
 * @param {!proto.payment.Payment} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.payment.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.payment.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.payment.PaymentServiceClient.prototype.pay =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/payment.PaymentService/Pay',
      request,
      metadata || {},
      methodDescriptor_PaymentService_Pay,
      callback);
};


/**
 * @param {!proto.payment.Payment} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.payment.Response>}
 *     Promise that resolves to the response
 */
proto.payment.PaymentServicePromiseClient.prototype.pay =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/payment.PaymentService/Pay',
      request,
      metadata || {},
      methodDescriptor_PaymentService_Pay);
};


module.exports = proto.payment;

