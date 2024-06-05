 // 複数のHTML要素を取得し、定数に代入する
const btn =  document.getElementById("btn");
const coin = document.getElementById("coin");

const coins = [10000, 5000, 1000, 500, 100, 50, 10, 5, 1];

// 下記はボタンをクリックすると動作する作業
btn.addEventListener("click", () => {
     // 複数のHTML要素を取得し、変数に代入する
     let amount = document.getElementById('amount').value;

    // 金額が入力されていない場合アラートメッセージを表示
    // 参考サイト https://terakoya.sejuku.net/programs/61/chapters/696
    // この教材ではconfirm(oktとキャンセルが出る)を使用していたが今回はok表示のみ出るalertを使ってみた
    if (amount=== "") {
        alert("金額を入力してください。\nPlease enter the amount");
    }
    
   // 初期化し内容をゼロにする
    coin.textContent = "";
    

    for (let i = 0; i < coins.length; i++) {
        const count = Math.floor(amount / coins[i]);
        coin.textContent += count + "枚" + coins[i] + "円 ";
        amount %= coins[i];
    }
});

// 参考サイト
// https://terakoya.sejuku.net/practices/01H1TREAM4CJGH0SG9XHS3B7WZ/explanation　DOM操作を使用して文字表示を変えよう
// https://terakoya.sejuku.net/programs/60/chapters/672　if文を理解しよう
// https://terakoya.sejuku.net/programs/60/chapters/682　DOM操作について
// https://terakoya.sejuku.net/programs/61/chapters　JavaScriptでタイピングゲームを作ろう
// https://terakoya.sejuku.net/programs/60/chapters/684　イベント処理