
const http = require("http");

const Users = [
  {
    name: "Bruce",
    age: 25,
  },
  {
    name: "Tony",
    age: 30,
  },
  {
    name: "Steve",
    age: 70,
  },
];

const server = http.createServer((request, response) => {
  const paths = request.url.split("/");

  console.log("---methods--- ", request.method);

  if (request.method === "GET" && paths[1] === "users" && paths.length === 2) {
    response.write(JSON.stringify(Users));
  } else if (
    request.method === "GET" &&
    paths[1] === "users" &&
    paths[2]
  ) {
    const idx = paths[2];
    const user = Users[idx];
    if (user) {
      response.write(JSON.stringify(user));
    }
  } else if (request.method === "POST" && paths[1] === "users") {
    let data = "";

    request.on("data", (chunk) => {
      data += chunk;
    });

    request.on("end", () => {
      const obj = JSON.parse(data.toString());
      Users.push(obj);
    });
  } else if (request.method === "PUT" && paths[1] === "users" && paths[2]) {
    const idx = paths[2];
    let data = "";

    request.on("data", (chunk) => {
      data += chunk;
    });

    request.on("end", () => {
      const obj = JSON.parse(data.toString());
      Users[idx] = obj;
    });
  } else if (
    request.method === "DELETE" &&
    paths[1] === "users" &&
    paths[2]
  ) {
    const idx = paths[2];
    Users.splice(idx, 1);
  } else {
    response.write("Not Found");
  }

  response.end();
});

server.listen(3000, () => {
  console.log("server is running on port number 3000");
});
