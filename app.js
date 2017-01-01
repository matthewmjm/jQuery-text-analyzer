// Step 1: Define the functions

//   Function to display Unique word count of the submitted text
function uniqueWordCount(inputTokens) {

    var numberOfWordsOutput = [];
    //loop throught the array of tokens ...
    for (var i = 0; i < inputTokens.length; i++) {
        //if the current word we are looping throught, is not already in the distinctWords words ...
        if (numberOfWordsOutput.indexOf(inputTokens[i]) === -1) {
            //we will be pusing it into it ...
            numberOfWordsOutput.push(inputTokens[i]);
        }
    }
    //return the lenght of the numberOfWordsOutput

    return numberOfWordsOutput.length;
}

//   Function to display Average word length in characters of the submitted text
function averageWordLength(inputTokens) {
    // join all tokens together to create one big string
    // then divide that total length by the number
    // of tokens to get average
    var averageOneWordLength = inputTokens.join("").length;;
    var averageWordLengthOutput = (averageOneWordLength / inputTokens.length).toFixed(2);
    return averageWordLengthOutput;
}



//   Function to display Average sentence length in characters of the submitted text

function getAverageWordsPerSentence(text) {
    // get num sentences by splitting on ending punctuation
    // note that this is a naive approach and doesn't account
    // for things like "Mrs. Smith"
    var numSentences = text.match(/[.!?]+/g) ? text.match(/[.!?]+/g).length : 1;
    var wordCount = tokenizeText(text).length;
    return (wordCount / numSentences).toFixed(2);
}


// this is a naive implementation of text tokenization
// https://en.wikipedia.org/wiki/Tokenization_(lexical_analysis).
// the goal is to standardize some of the differences between
// words in a text by converting all to lowercase, removing punctuation
// etc., so that, for instance, the "there" in 'high there.' and "high ThErE "
// would both be converted into the same value ("there")
function tokenizeText(text) {
    //matching evertying that is not matching spaces, tabs or line ends
    return text.toLowerCase().match(/\b[^\s]+\b/g).sort();
}

function removeReturns(text) {
    return text.replace(/\r?\n|\r/g, "");
}







// Step 2: Use the defined functions above
$(document).ready(function () {
    $(".analyze").submit(function (event) {
        event.preventDefault();
        var choice = $("#user-text").val();

        var tokenizedChoice = tokenizeText(choice);

        $(".container main dl").toggleClass("hidden");

        $(".word-count").text(tokenizedChoice.length);
        $(".unique-word-count").text(uniqueWordCount(tokenizedChoice));
        $(".average-word-length").text(averageWordLength(tokenizedChoice));
        $(".average-sentence-length").text(getAverageWordsPerSentence(removeReturns(choice)));

    });
});
