// require your server and launch it here
const server = require("./api/server");

server.listen(4000, () => {
  console.log("Server listening on localhost:4000");
});
