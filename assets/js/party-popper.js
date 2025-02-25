document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("partyButton");

    button.addEventListener("click", () => {
        
        const img = document.createElement("img");
        img.src = "9n9PFAGR.jpg";
        img.id = "poppedImage";
        img.style.position = "fixed";
        img.style.top = "50%";
        img.style.left = "50%";
        img.style.transform = "translate(-50%, -50%) scale(0)";
        img.style.transition = "transform 0.2s ease-out";
        img.style.zIndex = "9999";
        img.style.maxWidth = "80vw";
        img.style.maxHeight = "80vh";
        document.body.appendChild(img);

       
        const hideButton = document.createElement("button");
        hideButton.innerText = "Hide Image";
        hideButton.id = "hideButton";
        hideButton.style.position = "fixed";
        hideButton.style.bottom = "10%"; // Lower position
        hideButton.style.left = "50%";
        hideButton.style.transform = "translate(-50%, 20px)";
        hideButton.style.padding = "12px 24px";
        hideButton.style.fontSize = "18px";
        hideButton.style.cursor = "pointer";
        hideButton.style.zIndex = "10000";
        hideButton.style.opacity = "0";
        hideButton.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        document.body.appendChild(hideButton);

        setTimeout(() => {
            img.style.transform = "translate(-50%, -50%) scale(1)";
            hideButton.style.opacity = "1";
            hideButton.style.transform = "translate(-50%, 0)"; 
        }, 10);

       
        hideButton.addEventListener("click", () => {
            img.style.transform = "translate(-50%, -50%) scale(0)";
            hideButton.style.opacity = "0";
            hideButton.style.transform = "translate(-50%, 20px)";

            setTimeout(() => {
                img.remove();
                hideButton.remove();
            }, 300); 
        });
    });
});
