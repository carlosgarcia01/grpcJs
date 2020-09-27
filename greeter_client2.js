const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const packageDef = protoLoader.loadSync("helloworld.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const helloworld = grpcObject.helloworld;

const num = process.argv[3];
const option = process.argv[2];

const client = new helloworld.Greeter(
  "0.0.0.0:50051",
  grpc.credentials.createInsecure()
);

/* 
client.SayHello({
    "name": name
}, (err, response) => {

    console.log("Recieved from server " + JSON.stringify(response))

}) */

switch (option) {
  case '1':
    client.getValue(null, (err, response) => {
        console.log("Recieved from getValue " + JSON.stringify(response));
      });
    break;
  case '2':
    client.setValue({ value: parseInt(num) }, (err, response) => {
        console.log("Recieved from server " + JSON.stringify(response));
      });
    break;
  case '3':
    client.getPathologies(null, (err, response) => {
        console.log("Recieved from getPatologies " + JSON.stringify(response));
      });
    break;
}
