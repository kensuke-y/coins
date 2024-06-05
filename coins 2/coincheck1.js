const btn = document.getElementById("btn");
const coin = document.getElementById("coin");

// ボタンがクリックされたときに実行される関数
btn.addEventListener("click", () => {
    // 使用金額を取得する
    var amountInput = document.getElementById('amount');
    var amountValue = parseInt(amountInput.value); // 入力された値を数値に変換

    // コインの種類と枚数
    const coins = [10000, 5000, 1000, 500, 100, 50, 10, 5, 1];
    let result = ''; // 結果を格納する変数

    // コインの枚数を計算して結果を作成
    for (let i = 0; i < coins.length; i++) {
        const coinCount = Math.floor(amountValue / coins[i]); // コインの枚数を計算
        result += coinCount + '枚' + coins[i] + '円'; // 結果に追加
        amountValue %= coins[i]; // 残りの金額を更新
    }

    // 最後のコインの結果を追加
    result += '残金' + amountValue + '円';

    // 結果を表示する
    coin.textContent = result;
});