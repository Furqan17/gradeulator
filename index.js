// required DOM elements.
var grade_head = document.getElementById("grade_head");
var grade_final = document.getElementById("grade_final");
var grade_weight = document.getElementById("grade_weight");
var calculate_button = document.getElementById("calculate_button");
var all_form = document.getElementsByClassName("input");

// this function is used to prevent users from entering non-numeric characters.
// this solution is much easier than going through random user inputs.
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    } else {
    return true; 
    }
};

// initiates calculate button
calculate_button.addEventListener("click", function() {

    // dirty_list is the variable name of an array that has not been clean yet.
    dirty_list = get_grades();
    // clean_list is a list that has gone through the clean_list function
    clean_list = clean_grades(dirty_list);

    // if the number of inputs entered is odd, then an error is thrown
    // think about why this is...
    if (clean_list.length % 2 == 1) {
        error();
        return;
    }
    // if the error is thrown then the bottom half is not initiated.

    grades_list = get_grade_list(clean_list);
    weights_list = get_weight_list(clean_list);
    // now we have 2 parallel lists 

    weighted_average = get_weighted_average(weights_list);
    // we now have the total weighted average

    final_grade = get_final_grade(grades_list, weights_list);
    // we now have the final grade calculated

    // we ROUND the number to 3 digits.
    var fixed_grade = final_grade;
    final_grade = fixed_grade.toFixed(3);

    // We finally display the grade and the weighted average
    display_final_grade(final_grade, weighted_average);


});

// the main error function.
function error() {
    grade_head.innerHTML = "Your average grade is...";
    grade_final.innerHTML = "N/A";
    grade_weight.innerHTML = "make sure your inputs are correct, and try again."
}

function display_final_grade(f_grade, f_weight) {
    grade_head.innerHTML = "Your average grade is...";
    grade_final.innerHTML = f_grade;
    grade_weight.innerHTML = "with a combined weight of " + f_weight + " percent";
}

// this function collects all the grades from the input forms.
function get_grades() {
    var list = [];
    for (i = 0; i < all_form.length; i++) {
        list.push(all_form[i].value);
    }
    return list;
}

// this function essentially gets rid of empty spaces and no entry inputs.
function clean_grades(list) {

    // this line gets rid of empty spaces
    clean_list = list.filter(Boolean);
    return clean_list;
}

function get_grade_list(list_1) {
    grade_list = []
    for (i = 0; i < list_1.length; i++) {
        if (i % 2 == 0) {
            grade_list.push(list_1[i]);
        }
    }
    return grade_list;
}

function get_weight_list(list_2) {
    weight_list = []
    for (i = 0; i < list_2.length; i++) {
        if (i % 2 == 1) {
            weight_list.push(list_2[i]);
        }
    }
    return weight_list;
}

function get_weighted_average(list_3) {
    total_weight = 0;
    for (i = 0; i < list_3.length; i++) {
        total_weight += Number(list_3[i]);
    }
    return total_weight;
}

function get_final_grade(grade_list, weight_list) {
    full_grade = 0;
    for (i = 0; i < grade_list.length; i++) {
        decimal_weight = Number(weight_list[i] * 0.01);
        temp_grade = Number(grade_list[i]);
        full_grade += Number(decimal_weight * temp_grade);            
    }
    return full_grade;
}


