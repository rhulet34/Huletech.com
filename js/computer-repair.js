let normal = document.getElementById("normal");
let student = document.getElementById("student");
let business = document.getElementById("business");
let tabs = document.querySelectorAll(".tabs");
let tabscontent = document.querySelectorAll(".tabcontent");

document.getElementById("normal-price").style.display = "block";
normal.classList.add("active");

let addEvent = (tab) => {
    tab.addEventListener("click", event => {
        event.preventDefault();

        tabscontent.forEach(content => {
            content.style.display = "none";
        });

        tabs.forEach(tab => {
            tab.classList.remove("active");
        })

        document.getElementById("normal-price").style.display = "none";
        document.getElementById("student-price").style.display = "none";
        document.getElementById("business-price").style.display = "none";
        switch (event.target.id){
            case "normal":
                document.getElementById("normal-price").style.display = "block";
                normal.classList.add("active");
                break;
            case "student":
                document.getElementById("student-price").style.display = "block";
                student.classList.add("active");
                break;
            case "business":
                document.getElementById("business-price").style.display = "block";
                business.classList.add("active");
                break;
        }

    })
};

addEvent(normal);
addEvent(student);
addEvent(business);

