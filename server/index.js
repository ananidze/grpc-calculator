
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');


const PROTO_PATH = '../calculator.proto';

const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const calculatorProto = grpc.loadPackageDefinition(packageDefinition).Calculator;


function Add(call, callback) {
    console.log('Add invoked', call.request)
    const result = call.request.a + call.request.b;
    callback(null, { result })
}

function Subtract(call, callback) {
    console.log('Subtract invoked', call.request)
    const result = call.request.a - call.request.b;
    callback(null, { result })
}

function Multiply(call, callback) {
    console.log('Multiply invoked', call.request);
    const result = call.request.a * call.request.b;
    callback(null, { result })
}

function Divide(call, callback) {
    console.log('Divide invoked', call.request)
    const result = call.request.a / call.request.b;
    callback(null, { result })
}


function main() {
    const address = '127.0.0.1:50051';
    const server = new grpc.Server();
    server.addService(calculatorProto.service, {
        Add,
        Subtract,
        Multiply,
        Divide
    });

    server.bindAsync(address, grpc.ServerCredentials.createInsecure(), () => {
        server.start();
        console.log(`Server running at ${address}`);
    });
}

main();