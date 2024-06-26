const enter = document.querySelector("#enter");
const audio = document.getElementById("audio");

if (enter) {
    enter.addEventListener("click", () => {
        console.log(audio)
        audio.play();
        document.querySelector(".overlay").style.display = "none";
    })
}


const styleBoxes = () => {

    Array(4).fill(0).forEach((_, i) => {
        const box = document.getElementById(`box${i + 1}`);

        const area = document.getElementById(`area${i + 1}`);

        if (area) {
            const coords = area.coords.split(",");

            box.style.width = (Math.abs(coords[0] - coords[2])) + "px"
            box.style.height = (Math.abs(coords[1] - coords[3])) + "px"
            box.style.left = Number(coords[0]) + "px"
            box.style.top = Number(coords[1]) + "px"
        }
    });

}

setInterval(() => {
    styleBoxes();
}, 1000);


