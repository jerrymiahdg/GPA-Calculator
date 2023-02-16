'use strict'

const classes = []
const hnr = []
const hnrBoolean = []


for(let i = 0; i <= 5; i++) {
    classes.push(document.getElementsByClassName(`class-${i+1}`)[0])
}

for(let i = 0; i <= 5; i++) {
    hnr.push(document.getElementsByClassName(`hnr-${i+1}`)[0])
    hnrBoolean.push(false)
    hnr[i].addEventListener('click', hnrClick(i))
}

function hnrClick(i) {
    return function() {
        if(hnr[i].style.color !== 'white') {
            hnr[i].style.color = 'white';
            hnrBoolean[i] = true
        } else {
            hnr[i].style.color = 'rgba(255, 255, 255, 0.25)';
            hnrBoolean[i] = false
        }
    }
}

var submit = document.getElementsByClassName('submit')[0]
var calcGPA = document.getElementsByClassName('calc-gpa')[0]
let gpa = 0
const grades = []
var weight = document.getElementsByClassName('weight')[0]
let weightBoolean = true
let weightsubmit = false

const gradeToNumber = function(i) {
    if(weightBoolean) {
        if(classes[i].value == 'a' || classes[i].value == 'A') {
            if(hnrBoolean[i]) {return 5} else {return 4}
        } else if(classes[i].value == 'b' || classes[i].value == 'B') {
            if(hnrBoolean[i]) {return 4} else {return 3}
        } else if(classes[i].value == 'c' || classes[i].value == 'C') {
            if(hnrBoolean[i]) {return 3} else {return 2}
        } else if(classes[i].value == 'd' || classes[i].value == 'D') {
            if(hnrBoolean[i]) {return 2} else {return 1}
        } else if(classes[i].value == 'f' || classes[i].value == 'F') {
            if(hnrBoolean[i]) {return 1} else {return 0}
        } else {
            return 'noGrade'
        }
    } else {
        if(classes[i].value == 'a' || classes[i].value == 'A') {
            return 4
        } else if(classes[i].value == 'b' || classes[i].value == 'B') {
            return 3
        } else if(classes[i].value == 'c' || classes[i].value == 'C') {
            return 2
        } else if(classes[i].value == 'd' || classes[i].value == 'D') {
            return 1
        } else if(classes[i].value == 'f' || classes[i].value == 'F') {
            return 0
        } else {
            return 'noGrade'
        }
    }
    
}

const submitClick = function() {
    if(weightsubmit) {console.log('giggity')
    gpa = 0
    grades.length = 0

    for(let i = 0; i <= 5; i++) {
        if(gradeToNumber(i) !== 'noGrade') {grades.push(gradeToNumber(i))}
    }

    for(let i = 0; i < grades.length; i++) {
        gpa = gpa + grades[i]
    }

    gpa = gpa/grades.length

    calcGPA.textContent = gpa.toFixed(2)
    weightsubmit = false
} else {
    return function() {
        console.log('giggity')
        gpa = 0
        grades.length = 0

        for(let i = 0; i <= 5; i++) {
            if(gradeToNumber(i) !== 'noGrade') {grades.push(gradeToNumber(i))}
        }
    
        for(let i = 0; i < grades.length; i++) {
            gpa = gpa + grades[i]
        }

        gpa = gpa/grades.length

        calcGPA.textContent = gpa.toFixed(2)
    }}
}

submit.addEventListener('click', submitClick())


weight.addEventListener('click', function() {
    if(weight.textContent == 'weighted') {
        weight.textContent = 'unweighted'
        weightBoolean = false
        weightsubmit = true
        submitClick()
    } else {
        weight.textContent = 'weighted'
        weightBoolean = true
        weightsubmit = true
        submitClick()
    }
})


