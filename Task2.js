let x = 10,
  res;
switch (typeof x) {
  case "number":
    res = "x - число";
    break;
  case "string":
    res = "x - строка";
    break;
  case "boolean":
    res = "x - логическое";
    break;
  default:
    res = "Тип x не определен";
}
console.log(res);
