// Pastikan script ini berjalan setelah halaman dimuat
window.onload = function() {
    // Mengambil semua elemen gambar pada halaman
    var images = document.getElementsByTagName("img");

    // Loop untuk menambahkan watermark pada setiap gambar
    for (var i = 0; i < images.length; i++) {
        var img = images[i];

        // Membuat div kontainer untuk gambar dan watermark
        var wrapper = document.createElement("div");
        wrapper.style.position = "relative";  // Posisi relatif untuk menempatkan watermark di atas gambar

        // Menambahkan div wrapper sebelum gambar
        img.parentNode.insertBefore(wrapper, img);

        // Menambahkan gambar ke dalam wrapper
        wrapper.appendChild(img);

        // Membuat elemen gambar watermark
        var watermark = document.createElement("img");
        watermark.src = "https://w7.pngwing.com/pngs/914/821/png-transparent-orange-and-black-tiger-illustration-tiger-lion-safari-child-cute-watermark-mammal-animals-cat-like-mammal-thumbnail.png";  // Ganti dengan URL watermark Anda
        watermark.style.position = "absolute";  // Posisi watermark di atas gambar
        watermark.style.top = "50%";  // Memposisikan watermark di tengah gambar secara vertikal
        watermark.style.left = "50%";  // Memposisikan watermark di tengah gambar secara horizontal
        watermark.style.transform = "translate(-50%, -50%)";  // Penyesuaian posisi watermark di tengah
        watermark.style.opacity = "0.3";  // Atur transparansi watermark
        watermark.style.pointerEvents = "none";  // Agar watermark tidak menghalangi interaksi dengan gambar
        watermark.style.zIndex = "9999";  // Menjaga watermark tetap di atas gambar

        // Menambahkan watermark ke dalam wrapper
        wrapper.appendChild(watermark);
    }
};
