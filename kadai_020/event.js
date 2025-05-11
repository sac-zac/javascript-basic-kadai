// HTML要素がクリックされたときにイベント処理を実行する
// 「ボタンをクリックしました」に変更
btn.addEventListener('click', () => {
  const txt = document.getElementById('text').textContent = 'ボタンをクリックしました';
  console.log(txt);
});