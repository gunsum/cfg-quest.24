function textOutputter(bookOne, bookTwo) {
    var newText = `Finished reading ${bookTwo}. Now I'll read ${bookOne}`
    return newText
}

readingList = [
    "Women, Race and Class",
    "One Hundred Years of Solitude",
    "Things Fall Apart",
    "The Bell Jar",
];

myText = textOutputter(readingList[0], readingList[1]);
console.log(myText);

secondNewText = "Next I'll read " + readingList[2] + ". After that, I ll start reading " +readingList[3];

console.log(secondNewText);

//What would be outputted when this code is executed (via the console.logs on Line 16 and Line 20)?

// Hint: Be careful here - make sure to double-check your answer.

// Note: Outputs are not exact to what the code would output, but meant to be exact enough (e.g. some liberty was taken - extra space, abbreviation of longer x text, etc. Don't sweat the small difference essentially).This question is required. *
// A
// Finished reading Women, Race and Class. Now I'll read One Hundred Years of Solitude. Next I'll read Things Fall Apart. After that, I'll start reading The Bell Jar.
// B
// Finished reading The Bell Jar. Now I'll read Things Fall Apart. Next I'll read One Hundred Years of Solitude. After that, I'll start reading Women, Race and Class.
// C
// Finished readingOne Hundred Years of Solitude. Now I'll readTheBellJar. Next I'll read Women, Race and Power. After that, I'll start reading Things Fall Apart.
// D
// Index access error (out of bounds)
// E
// Finished reading One Hundred Years of Solitude. Now I'll read Women, Race and Class. Next I'll read Things Fall Apart. After that, I'll start reading The Bell Jar.


