// MAP INIT
navigator.geolocation.getCurrentPosition(
  function (pos) {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    const map = L.map("map").setView([lat, lon], 15);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap",
    }).addTo(map);

    L.marker([lat, lon])
      .addTo(map)
      .bindPopup("You are here")
      .openPopup();
  },
  function () {
    alert("Location allow karo map ke liye");
  }
);
