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