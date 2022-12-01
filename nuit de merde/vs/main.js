
const Questions = [{
    id: 0,
    q: "Qu'est-ce qu'une IST?",
    a: [{ text: "", isCorrect: false },
        { text: "", isCorrect: false },
        { text: "Infection Sexuellement Transmissible", isCorrect: true },
        { text: "", isCorrect: false }
    ]

},
{
    id: 1,
    q: "QUEL EST LE MOYEN DE CONTRACEPTION LE PLUS EFFICACE ?",
    a: [{ text: "la pilule contraceptive", isCorrect: false, isSelected: false },
        { text: "porter des chaussettes au lit", isCorrect: false },
        { text: "le diaphragme", isCorrect: false },
        { text: "le preservatif", isCorrect: true }
    ]

},
{
    id: 2,
    q: "Combien de temps dure en moyenne un rapport sexuel ?",
    a: [{ text: "", isCorrect: false },
        { text: "", isCorrect: false },
        { text: "", isCorrect: true },
        { text: "", isCorrect: false }
    ]

}

]


var start = true;


function iterate(id) {


var result = document.getElementsByClassName("result");
result[0].innerText = "";


const question = document.getElementById("question");



question.innerText = Questions[id].q;


const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


 
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;


op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";


op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})


op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
})


op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
})


op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
})


const evaluate = document.getElementsByClassName("evaluate");


evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}


const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 2) {
    id++;
    iterate(id);
    console.log(id);
}

})