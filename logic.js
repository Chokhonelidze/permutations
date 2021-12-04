function calculate(object) {
  let target = document.getElementById("body");
  target.innerHTML = "";
  let children = Array.from(object.parentElement.children);
  let text = children[1].value;
  if (text.length > 9) {
    alert("text is too long");
    return false;
  }
  if (text.length < 2) {
    alert("text is too short");
    return false;
  }
  let output = "";
  let style = ["first", "second", "third"];
  let counter = 0;
  let ul = document.createElement("ul");
  permute(text).forEach((item, index, obj) => {
    if (counter > 2) counter = 0;
    let child = document.createElement("li");
    child.className = style[counter];
    counter++;
    child.innerHTML = item;
    ul.appendChild(child);
  });
  target.appendChild(ul);
}
function permute(string) {
  let len = string.length;
  if (len === 1) {
    return string;
  }
  let pick = "";
  let permutations = [];
  for (let i = 0; i < len; i++) {
    pick = string[i];
    var reminder = string.slice(0, i) + string.slice(i + 1, len);
    for (var perm of permute(reminder)) {
      permutations.push(pick + perm);
    }
  }
  return permutations;
}
