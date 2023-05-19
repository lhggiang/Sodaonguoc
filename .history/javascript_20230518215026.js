//So dao nguoc
//C1:
let num = document.getElementById("num").value;
let newNum = parseInt(num);
let res = 0;
while (newNum != 0) {
  res = res * 10 + (newNum % 10);
  newNum /= 10;
}
let yes = document.getElementById("yes");
yes.onclick = function () {
  let result = document.getElementById("result");
  result.innerText = res;
};
//C2:
