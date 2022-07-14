function append() {
    let data = JSON.parse(localStorage.getItem("student")) || [];
    let container = document.getElementById("#container")
    container.innerHTML = null

    data.forEach(function (el) {
        console.log(el)
        let box = document.createElement("div");
        let img = document.createElement("img")
        img.src = el.img
        let p = document.createElement("p")
        p.innerText = el.Name
        let p1 = document.createElement("p")
        p1.innerText = el.course
        let p2 = document.createElement("p")
        p2.innerText = el.unit
        let p3 = document.createElement("p")
        p3.innerText = el.batch
        let btn = document.createElement("button")
        btn.innerText = "Remove"
        btn.addEventListener("click", function () {
            remove(index);
        });
        box.append(img, p, p1, p2, p3, btn)
        document.querySelector("#container").append(box)
    });
}
append();
function remove(index) {
    let data = JSON.parse(localStorage.getItem("student")) || [];

    let newdata = data.filter(function (el, i) {
        if (i == index) {
            let trash = JSON.parse(localStorage.getItem("trash")) || []
            trash.push(el);
            localStorage.setItem("trash", JSON.stringify(trash))
        } else {
            return i !== index;
        }
    })
    localStorage.setItem("students", JSON.stringify(newdata))
    append()
    console.log(newdata)
}