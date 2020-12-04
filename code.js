let hearts = document.getElementsByClassName("heart");

let heartsArr = ["❤️", "🧡", "💛", "💚", "💙", "💜", "🖤"];

for (let i = 0; i < hearts.length; i++) {
    hearts[i].innerHTML = heartsArr[i % heartsArr.length];
}