const gallery = [
    { type: "image", src: "images/002.jpg" },
    { type: "image", src: "images/0020.jpg" },	
    { type: "image", src: "images/001.jpg" },
    { type: "image", src: "images/003.jpg" },
    { type: "image", src: "images/005.jpg" },
    { type: "video", src: "videos/002.mp4" },
    { type: "image", src: "images/004.jpg" },
    { type: "image", src: "images/007.jpg" },
    { type: "video", src: "videos/004.mp4" },	
];

const mid = Math.ceil(gallery.length / 2);

const lb = document.getElementById("lightbox");
const lbimg = document.getElementById("lbimg");

function fill(id, list) {

    const g = document.getElementById(id);

    list.forEach((item, i) => {

        let element;

        if (item.type === "image") {

            element = document.createElement("img");
            element.src = item.src;
            element.loading = "lazy";

            element.onclick = () => {
                lb.style.display = "flex";
                lbimg.src = item.src;
            };

        } else if (item.type === "video") {

            element = document.createElement("video");
            element.src = item.src;
            element.controls = true;
            element.preload = "metadata";
            element.playsInline = true;

        }

        // Mantiene el mismo patrón de tamaños que ya tenías
        if (i % 3 === 1) {
            element.style.maxWidth = "65%";
            element.style.justifySelf = "center";
        } else {
            element.style.maxWidth = "100%";
        }

        g.appendChild(element);

    });

}

fill("gallery1", gallery.slice(0, mid));
fill("gallery2", gallery.slice(mid));

document.getElementById("close").onclick = () => {
    lb.style.display = "none";
};

lb.onclick = (e) => {
    if (e.target === lb) {
        lb.style.display = "none";
    }
};