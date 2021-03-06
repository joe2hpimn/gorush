// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var gorush_pb = require('./gorush_pb.js');

function serialize_proto_NotificationReply(arg) {
  if (!(arg instanceof gorush_pb.NotificationReply)) {
    throw new Error('Expected argument of type proto.NotificationReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_proto_NotificationReply(buffer_arg) {
  return gorush_pb.NotificationReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_NotificationRequest(arg) {
  if (!(arg instanceof gorush_pb.NotificationRequest)) {
    throw new Error('Expected argument of type proto.NotificationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_proto_NotificationRequest(buffer_arg) {
  return gorush_pb.NotificationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var GorushService = exports.GorushService = {
  send: {
    path: '/proto.Gorush/Send',
    requestStream: false,
    responseStream: false,
    requestType: gorush_pb.NotificationRequest,
    responseType: gorush_pb.NotificationReply,
    requestSerialize: serialize_proto_NotificationRequest,
    requestDeserialize: deserialize_proto_NotificationRequest,
    responseSerialize: serialize_proto_NotificationReply,
    responseDeserialize: deserialize_proto_NotificationReply,
  },
};

exports.GorushClient = grpc.makeGenericClientConstructor(GorushService);
