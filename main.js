const data = document.getElementById("btn");

//データを削除する
data.addEventListener("click", () => {
  alert("削除しました。");
  window.localStorage.removeItem(key);
});

//データを保存する
let key = "testKey";
let val = {
  list1: "魚",
  list2: "チンアナゴ",
};
let allData = JSON.stringify(val);
window.localStorage.setItem(key, allData);

try {
  //データを取得する
  let getData = window.localStorage.getItem(key);
  let getList = JSON.parse(getData);

  console.log(getList.list1);
  console.log(getList.list2);

  if (getList.list2 === "チンアナゴ") {
    alert("OK");
  } else {
    alert("NO");
  }
} catch (err) {
  console.log(err);
}
