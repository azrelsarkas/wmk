document.addEventListener('DOMContentLoaded', function() {
    // Kode watermarking di sini
    var images = document.getElementsByTagName("img");

    for (var i = 0; i < images.length; i++) {
        var img = images[i];
        var wrapper = document.createElement("div");
        wrapper.style.position = "relative";

        img.parentNode.insertBefore(wrapper, img);
        wrapper.appendChild(img);

        var watermark = document.createElement("img");
        watermark.src = "https://png.pngtree.com/png-clipart/20231023/ourmid/pngtree-anime-boy-png-image_10341817.png";
        watermark.style.position = "absolute";
        watermark.style.top = "50%";
        watermark.style.left = "50%";
        watermark.style.transform = "translate(-50%, -50%)";
        watermark.style.opacity = "0.3";
        watermark.style.pointerEvents = "none";
        watermark.style.zIndex = "9999";

        wrapper.appendChild(watermark);
    }
});
