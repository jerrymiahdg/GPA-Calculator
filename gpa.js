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
        if(hnr[i].style.backgroundColor !== 'rgba(43, 43, 43, 0.75)') {
            hnr[i].style.backgroundColor = 'rgba(43, 43, 43, 0.75)';
            hnrBoolean[i]
             = true
        } else {
            hnr[i].style.backgroundColor = 'rgba(43, 43, 43, 0.25)'
            hnrBoolean[i] = false
        }
    }
}

var submit = document.getElementsByClassName('submit')[0]
var calcGPA = document.getElementsByClassName('calc-gpa')[0]
let gpa = 0

const grades = []

const gradeToNumber = function(i) {
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
}

submit.addEventListener('click', function() {
    gpa = 0

    for(let i = 0; i <= 5; i++) {
        if(gradeToNumber(i) !== 'noGrade') {grades.push(gradeToNumber(i))}
    }
    
    for(let i = 0; i < grades.length; i++) {
        gpa = gpa + grades[i]
    }

    gpa = gpa/grades.length

    calcGPA.textContent = gpa.toFixed(2)
})
