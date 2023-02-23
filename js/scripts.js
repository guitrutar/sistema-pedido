function getValue() {
  let s1 = document.getElementById("se1");
  let s2 = document.getElementById("se2")

  let v1 = s1.value;
  let v2 = s2.value

  const result = document.getElementById("result");
  result.innerText = v1;

  const result2 = document.getElementById("result2");
  result2.innerText = v2;
}