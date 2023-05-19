//So dao nguoc
//C1:
let yes = document.getElementById("yes");
yes.onclick = function () {
  let num = parseInt(document.getElementById("num").value);
  let res = 0;
  while (num != 0) {
    res = res * 10 + (num % 10);
    num /= 10;
  }
  console.log(res);
  let result = document.getElementById("result");
  result.innerHTML = res;
};
