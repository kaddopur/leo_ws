let ws = new WebSocket("ws://localhost:3000");

ws.onopen = () => {
  console.log("open connection");
};

ws.onclose = () => {
  console.log("close connection");
};

//接收 Server 發送的訊息
ws.onmessage = (event) => {
  console.log(event);

  const appNode = document.querySelector("#app");

  appNode.innerText = event.data;
};
