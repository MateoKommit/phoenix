import { Socket, Presence } from "phoenix";

let socket = new Socket("/socket", { params: { token: window.userToken } });
let channel = socket.channel("room:lobby", {
  name: window.location.search.split("=")[1],
});
let presence = new Presence(channel);

function renderOnlineUsers(presence) {
  let response = "";

  presence.list((id, { metas: [first, ...rest] }) => {
    let count = rest.length + 1;
    response += `<br>${id} (count: ${count})</br>`;
  });

  document.querySelector("main[role=main]").innerHTML = response;
}

socket.connect();

presence.onSync(() => renderOnlineUsers(presence));

channel.join();
