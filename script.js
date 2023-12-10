let pin = document.getElementById("pin")
let bomb = document.getElementById("bomb")
var ol = document.querySelector('ol');
let modal = document.getElementsByClassName('modal')[0]
let edit = document.getElementById("edit")
let ok = document.getElementById('ok')
let currenttask
let things = []
if (localStorage.getItem('test') == false) {
    localStorage.setItem('test', 1);
};
if (localStorage.getItem('things') == false || localStorage.getItem('things') == null) {
    localStorage.setItem('things', []);
}
else {
    console.log(localStorage.getItem('things'));
    things = localStorage.getItem('things').split(",")
    for (let val of localStorage.getItem('things').split(",")) {
        let crossed = false
        var li = document.createElement('li');
        var p = document.createElement('p');
        p.textContent = val;
        li.appendChild(p)
        ol.appendChild(li)

        document.querySelector('#taskinput').value = "";
        var editbutton = document.createElement('button');
        var deletebutton = document.createElement('button');
        editbutton.innerHTML = "🖊"
        deletebutton.innerHTML = "🗑"
        deletebutton.onclick = function () {
            li.remove()
        }
        editbutton.type = "button"
        deletebutton.type = "button"
        li.appendChild(editbutton)
        li.appendChild(deletebutton)
        editbutton.onclick = function () {
            modal.style.opacity = 1
            modal.style.pointerEvents = "auto"
            edit.value = p.innerHTML
            currenttask = p
            console.log(currenttask);
        }
        p.onclick = function () {
            if (crossed == true) {
                p.style.textDecoration = "none"
                crossed = false
            }
            else {
                p.style.textDecoration = "line-through"
                crossed = true
            }
        }

    }
}


pin.addEventListener('click', function (event) {
    localStorage.test = parseInt(localStorage.getItem('test')) + 1;
    var val = document.querySelector('#taskinput').value;
    things.push(val)
    console.log(things);
    localStorage.things = things
    event.preventDefault()
    if (val != "") {
        let crossed = false
        var li = document.createElement('li');
        var p = document.createElement('p');
        p.textContent = val;
        li.appendChild(p)
        ol.appendChild(li)

        document.querySelector('#taskinput').value = "";
        var editbutton = document.createElement('button');
        var deletebutton = document.createElement('button');
        editbutton.innerHTML = "🖊"
        deletebutton.innerHTML = "🗑"
        deletebutton.onclick = function () {
            li.remove()
            console.log(things.indexOf(val))
            things.splice(things.indexOf(val),1)
            console.log(things)
            localStorage.things = things
        }
        editbutton.type = "button"
        deletebutton.type = "button"
        li.appendChild(editbutton)
        li.appendChild(deletebutton)
        editbutton.onclick = function () {
            modal.style.opacity = 1
            modal.style.pointerEvents = "auto"
            edit.value = p.innerHTML
            currenttask = p
            console.log(currenttask);
        }
        p.onclick = function () {
            if (crossed == true) {
                p.style.textDecoration = "none"
                crossed = false
            }
            else {
                p.style.textDecoration = "line-through"
                crossed = true
            }
        }


    }
})
ok.onclick = function (event) {
    console.log("ok");
    modal.style.opacity = 0
    event.preventDefault()
    modal.style.pointerEvents = "none"
    currenttask.innerHTML = edit.value
}

bomb.onclick = function () {
    let tasks = document.getElementsByTagName("li")
    ol.innerHTML = ""
    localStorage.clear()
    things = []
    // for (let i = 0; i < tasks.length; i++){
    //     console.log(tasks[0]);
    //     tasks[0].remove()
    // // }
}



