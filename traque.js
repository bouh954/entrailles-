
fetch("https://api.ipify.org?format=json")
  .then(res => res.json())
  .then(data => {
    const ip = data.ip;
    console.log("IP détectée :", ip);
    localStorage.setItem("visitor_ip", ip);
    document.title = "Localisation en cours...";
    // Simulation d'une redirection traquée
    setTimeout(() => {
      window.location = "capsule.html";
    }, 7000);
  });
