const Questions = [{
    id: 0,
    q: "Qu'est-ce qu'une IST?",
    a: [{ text: "Institut du Sex Toy", isCorrect: false },
        { text: "Initiation à la Sexualité Tantrique", isCorrect: false },
        { text: "Infection Sexuellement Transmissible", isCorrect: true },
        { text: "", isCorrect: false },
        { text: "Interdit de sextoter au travail", isCorrect: false },
    ]

},
{
    id: 1,
    q: "Quel est le moyen de contraception le plus efficace ?",
    a: [{ text: "la pilule contraceptive", isCorrect: true},
        { text: "porter des chaussettes au lit", isCorrect: false },
        { text: "le diaphragme", isCorrect: false },
        { text: "le preservatif",isCorrect: false},
]
},
{
    id: 2,
    q: "Combien de temps dure en moyenne un rapport sexuel ?",
    a: [{ text: "12 minutes", isCorrect: false },
        { text: "25 secondes", isCorrect: false },
        { text: "5,4 minutes", isCorrect: true },
        { text: "ça depend des piles", isCorrect: false }
    ]

},
{
    id: 3,
    q: "L'ejaculation precoce est un problème qui touche...",
    a: [{ text: "moins de 10% des hommes", isCorrect: false},
        { text: "entre 50% et 60% des hommes", isCorrect: true},
        {text: "seulement les mecs bien car ce sont eux qui partent les premiers", isCorrect: false}

]
},
{
    id: 4,
    q: "Outre le VIH/SIDA, quelle est l'IST que l'on garde à vie",
    a: [{ text: "La chlamydiae", isCorrect: false},
        { text: "L'herpès génital", isCorrect: true},
        {text: "La syphillis", isCorrect: false},
        {text: "gonorrhée", isCorrect: false},
 
 ]    

},

{
    id: 5,
    q: "Comment peut on attraper le VIH ou le SIDA",
    a: [{ text: "Par piqûre de moustique", isCorrect: false},
        { text: "Lors de rapports sexuels non protégés par un préservatif", isCorrect: true},
        {text: "En buvant dans le verre d'une personne séropositive", isCorrect: false},
        {text: "En s'asseyant sur des toilettes infectées", isCorrect: false},
 
 ]    

}

]

var start = true;
  
// Iterate
function iterate(id) {
  
    // Getting the result display section
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";
  
    // Getting the question
    const question = document.getElementById("question");
  
  
    // Setting the question text
    question.innerText = Questions[id].q;
  
    // Getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');
  
  
    // Providing option text 
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;
  
    // Providing the true or false value to the options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;
  
    var selected = "";
  
    // Show selection for op1
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "lightgoldenrodyellow";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op1.value;
    })
  
    // Show selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightgoldenrodyellow";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op2.value;
    })
  
    // Show selection for op3
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightgoldenrodyellow";
        op4.style.backgroundColor = "lightskyblue";
        selected = op3.value;
    })
  
    // Show selection for op4
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightgoldenrodyellow";
        selected = op4.value;
    })
  
    // Grabbing the evaluate button
    const Valider = document.getElementsByClassName("Valider");
  
    // Evaluate method
    Valider[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "Vrai";
            result[0].style.color = "green";
        } else {
            result[0].innerHTML = "Faux";
            result[0].style.color = "red";
        }
    })
}
  
if (start) {
    iterate("0");
}
  
// Next button and method
const Suivante = document.getElementsByClassName('Suivante')[0];
var id = 0;
  
Suivante.addEventListener("click", () => {
    start = false;
    if (id < 2) {
        id++;
        iterate(id);
        console.log(id);
    }
  
})