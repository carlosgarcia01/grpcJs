const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader")
const packageDef = protoLoader.loadSync("helloworld.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const helloworld = grpcObject.helloworld;

const name = process.argv[2];

const client = new helloworld.Greeter("0.0.0.0:50051", 
grpc.credentials.createInsecure())
console.log(name)

client.SayHello({
    "name": name
}, (err, response) => {

    console.log("Recieved from server " + JSON.stringify(response))

})
