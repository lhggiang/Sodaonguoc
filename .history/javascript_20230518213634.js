//So dao nguoc
//C1:
let num = document.getElementById("num").value;
let res = 0;
while (num != 0) {
  res = res * 10 + (num % 10);
  num /= 10;
  document.write(res);
}
let yes = document.getElementById("yes");
yes.onclick = function () {
  let result = document.getElementById("result");
  result.innerHTML = res;
};
//C2:
