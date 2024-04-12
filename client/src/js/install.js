const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  // Prevent the default behavior of the event
  event.preventDefault();
  // Store the event for later use
  const installPromptEvent = event;
  // Show the install button
  butInstall.style.display = "block";
  // Add a click event handler to the install button
  butInstall.addEventListener("click", () => {
    // Prompt the user to install the PWA
    installPromptEvent.prompt();
    // Wait for the user to respond to the prompt
    installPromptEvent.userChoice.then((choiceResult) => {
      // Check if the user accepted or dismissed the prompt
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
      // Hide the install button
      butInstall.style.display = "none";
    });
  });
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  // Prompt the user to install the PWA
  installPromptEvent.prompt();
  // Wait for the user to respond to the prompt
  installPromptEvent.userChoice.then((choiceResult) => {
    // Check if the user accepted or dismissed the prompt
    if (choiceResult.outcome === "accepted") {
      console.log("User accepted the install prompt");
    } else {
      console.log("User dismissed the install prompt");
    }
    // Hide the install button
    butInstall.style.display = "none";
  });
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  console.log("App installed successfully");
});
