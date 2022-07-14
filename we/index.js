let arr = JSON.parse(localStorage.getItem("student")) || [];

function Student(n, c, u, i, b) {
    this.Name = n,
        this.course = c,
        this.unit = u,
        this.img = i,
        this.batch = `Ft-Web${b}`;
}

function storedata(e) {
    e.preventDefault()
    let form = document.querySelector("#form");
    let Name = form.name.value;
    let course = form.course.value;
    let unit = form.unit.value;
    let img = form.image.value;
    let batch = form.batch.value;

    let s1 = new Student(Name, course, unit, img, batch)


    arr.push(s1)

    localStorage.setItem("student", JSON.stringify(arr))

    // console.log(s1)
}


function calculate() {
    let data = JSON.parse(localStorage.getItem("student")) || [];

    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i].batch]) {
            obj[arr[i].batch] = 0;
        }

    }

    for (let i = 0; i < data.length; i++) {
        obj[arr[i].batch]++

    }

    // console.log(obj);
}
calculate();