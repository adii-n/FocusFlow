let map = new Map();
map.set("Physics", ["https://en.wikipedia.org/wiki/Physics", "https://smart.physics.illinois.edu/"]);
map.set("Chemistry", ["https://en.wikipedia.org/wiki/Chemistry"]);

const load = document.querySelector("#load");
load.addEventListener('click', async () => {
  createButtons(map);
});

function createButtons(map) {
  for (let [key, value] of map) {
    const button = document.createElement("button");
    button.className = "button";
    button.innerHTML = key;
    button.addEventListener('click', async () => {
      for (let link of value) {
        await chrome.tabs.create({ url: link });
      }
    });
    document.body.appendChild(button);
  }
}