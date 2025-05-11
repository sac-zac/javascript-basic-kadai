// HTML要素がクリックされたときにイベント処理を実行する
// 「ボタンをクリックしました」に変更
const btn = document.getElementById('btn');
const txt = document.getElementById('text');

btn.addEventListener('click', () => {
  txt.textContent = 'ボタンをクリックしました';
  console.log(txt);
});