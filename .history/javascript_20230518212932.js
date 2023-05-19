//So dao nguoc
//C1:
let number = document.getElementById("num").value;
let res = 0;
while (number != 0) {
  res += res * 10 + (n % 10);
  n /= 10;
}
let ketqua = document.getElementById("result");
ketqua.innerHTML = res;
//C2:
