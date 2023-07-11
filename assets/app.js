// Highlight Text (2 No Word)
const paragraph = document.getElementById("highlight-text");
const words = paragraph.innerHTML.split(" ");

if (words.length >= 2) {
    const modifiedText = words.map((word, index) => {
        if (index === 2) {
            return '<span class="themeColor">' + word + '</span>';
        } else {
            return word;
        }
    }).join(" ");

    paragraph.innerHTML = modifiedText;
}

// Line Break Text (1 No Word)
const lineBreak = document.getElementById("lineBreak-text");
const breakWords = lineBreak.innerHTML.split(" ");

if (breakWords.length >= 0) {
    const modifiedText = breakWords.map((word, index) => {
        if (index === 1) {
            return '<span class="d-block">' + word + '</span>';
        } else {
            return word;
        }
    }).join(" ");

    lineBreak.innerHTML = modifiedText;
}