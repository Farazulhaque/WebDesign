function calculate() {
    var score = 0;
    var name = document.getElementById("name").value;
    if (document.querySelector("input[name=q1]:checked")) {
        student_answer = document.querySelector("input[name=q1]:checked").value;
        correct_answer = "Cascading Style Sheets";
        if (student_answer == correct_answer) {
            score = score + 1;
        }
    }

    if (document.querySelector("input[name=q2]:checked")) {
        student_answer = document.querySelector("input[name=q2]:checked").value;
        correct_answer = "style";
        if (student_answer == correct_answer) {
            score = score + 1;
        }
    }

    if (document.querySelector("input[name=q3]:checked")) {
        student_answer = document.querySelector("input[name=q3]:checked").value;
        correct_answer = "background-color";
        if (student_answer == correct_answer) {
            score = score + 1;
        }
    }

    if (document.querySelector("input[name=q4]:checked")) {
        student_answer = document.querySelector("input[name=q4]:checked").value;
        correct_answer = "color";
        if (student_answer == correct_answer) {
            score = score + 1;
        }
    }

    if (document.querySelector("input[name=q5]:checked")) {
        student_answer = document.querySelector("input[name=q5]:checked").value;
        correct_answer = "font-size";
        if (student_answer == correct_answer) {
            score = score + 1;
        }
    }

    if (document.querySelector("input[name=q6]:checked")) {
        student_answer = document.querySelector("input[name=q6]:checked").value;
        correct_answer = "font-weight:bold;";
        if (student_answer == correct_answer) {
            score = score + 1;
        }
    }

    if (document.querySelector("input[name=q7]:checked")) {
        student_answer = document.querySelector("input[name=q7]:checked").value;
        correct_answer = "comma";
        if (student_answer == correct_answer) {
            score = score + 1;
        }
    }

    if (document.querySelector("input[name=q8]:checked")) {
        student_answer = document.querySelector("input[name=q8]:checked").value;
        correct_answer = "static";
        if (student_answer == correct_answer) {
            score = score + 1;
        }
    }

    if (document.querySelector("input[name=q9]:checked")) {
        student_answer = document.querySelector("input[name=q9]:checked").value;
        correct_answer = "#demo";
        if (student_answer == correct_answer) {
            score = score + 1;
        }
    }

    if (document.querySelector("input[name=q10]:checked")) {
        student_answer = document.querySelector("input[name=q10]:checked").value;
        correct_answer = "no";
        if (student_answer == correct_answer) {
            score = score + 1;
        }
    }

    
    if (score <= 4) {
        alert("Keep trying. " + name + "! You answered " + score + " out of 10 correctly");
    }
    else if (score <= 9) {
        alert("Way to go. " + name + "! You got " + score + " out of 10 correct");
    }
    else {
        alert("Congratulations. " + name + "! You got " + score + " out of 10");
    }


}
