
setTimeout(() => {
  console.log("Propagation activée...");
  const random = Math.floor(Math.random() * 3);
  const destinations = ["chambre.html", "reflet_v2.html", "capsule.html"];
  window.location = destinations[random];
}, 12000);
