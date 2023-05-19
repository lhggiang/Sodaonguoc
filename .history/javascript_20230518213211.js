//So dao nguoc
//C1:
let num = document.getElementById("num").value;
let res = 0;
while (num != 0) {
  res += res * 10 + (num % 10);
  num /= 10;
}
let yes = document.getElementById("yes");
yes.onClick = function () {
  let ketqua = document.getElementById("result");
  ketqua.innerHTML = res;
};
//C2:
