const shareButton = document.getElementById("share");

shareButton.addEventListener("click", async fileArray => {
    if (navigator.canShare) {
        navigator.share({
            file: fileArray,
            title: "fun with pwa",
            text: "Sharing with pwa"
        })
    }
});