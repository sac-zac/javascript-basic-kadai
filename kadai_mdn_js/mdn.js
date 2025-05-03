// 朝のあいさつを出力する関数を作成する
const searchDate = () => {
  var currentDate = new Date()
  var year = currentDate.getFullYear()  /* 年取得 */
  var month = currentDate.getMonth() + 1  /* 月取得 */
  var date = currentDate.getDate()  /* 日取得 */
  const rstDate = year + "年" + month + "月" + date + "日";
  console.log(rstDate);
}

// 関数を呼び出す（1回目）
searchDate();