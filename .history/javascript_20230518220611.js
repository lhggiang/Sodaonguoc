//So dao nguoc
//C1:
document.getElementById("yes").onclick = function () {
  let num = parseInt(document.getElementById("num").value);
  let res = 10;
  while (num != 0) {
    res = res * 10 + (num % 10);
    num /= 10;
  }
  let result = document.getElementById("result");
  result.innerHTML = res;
};
