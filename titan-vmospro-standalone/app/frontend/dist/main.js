const statusEl = document.getElementById("status");
const pingBtn = document.getElementById("pingBtn");
const pingOut = document.getElementById("pingOut");

async function boot() {
  try {
    const out = await window.go.main.App.GetStatus();
    statusEl.textContent = `Health: ${out.health} | Name: ${out.name}`;
  } catch (err) {
    statusEl.textContent = `Backend unavailable: ${String(err)}`;
  }
}

pingBtn.addEventListener("click", async () => {
  try {
    const out = await window.go.main.App.Ping("rdp-user");
    pingOut.textContent = out;
  } catch (err) {
    pingOut.textContent = String(err);
  }
});

boot();
