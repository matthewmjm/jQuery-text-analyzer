// Step 1: Define the functions
//   Function to display Total word count of the submitted text
function totalWordCount() {

}


//   Function to display Unique word count of the submitted text
function uniqueWordCount() {

}

//   Function to display Average word length in characters of the submitted text
function averageWordLength() {

}



//   Function to display Average sentence length in characters of the submitted text
function averageSentenceLength() {

}









// Step 2: Use the defined functions above
$(document).ready(function () {
    $(".analyze").submit(function (event) {
        event.preventDefault();
        var choice = $("#user-text").val();
        console.log(choice);
    });
});
