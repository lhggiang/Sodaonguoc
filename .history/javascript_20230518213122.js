//So dao nguoc
//C1:
let number = document.getElementById("num").value;
let res = 0;
while (number != 0) {
  res += res * 10 + (number % 10);
  n /= 10;
}
let yes = document.getElementById("yes");
yes.onClick = function () {
  let ketqua = document.getElementById("result");
  ketqua.innerHTML = res;
};
//C2:
