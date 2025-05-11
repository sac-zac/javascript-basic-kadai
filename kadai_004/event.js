$(window).on('load', function() {
  // windowが読み込まれた時に実行する処理
  console.log('loadイベントが発生しました');
});

$(window).scroll(function() {
  // windowがスクロールされた時に実行する処理
  console.log('scrollイベントが発生しました');
});