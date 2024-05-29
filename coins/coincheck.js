const checkCoins = 56152 ;
const coins = [10000,5000,1000,500,100,50,10,5,1];

function coincheck (checkCoins) {
    // i < coins.lengthでループが配列のすべての要素を反復処理
    // i++はcoinsの大きい要素から小さい方に順番をプラスしていく
    // let i=0にしたのは10000円からスタートする為、let i=1にすると5000円からスタートするので計算がおかしくなる
    for(let i=0; i<coins.length; i++){
        
        // Math.floorで小数点を切り上げ
        // checkCoins / coins[i])+枚数とcoins[i] + "円": コインの額面 coins[i] を表示し、その後に日本円の通貨単位を表示
    console.log(Math.floor(checkCoins / coins[i])+"枚"+ coins[i] + "円");
    
    //下記はcoinsの大きな数字から順々に割っていき、余りが0の数字のみ割っていき、 checkCoinsの数字が割り切れたら終わる
    //  checkCoins %= coins[i]は最初に56152/10000でわり、余りの数字をcheckCoinsに代入され10000の次数字(5000→1000→と順々で割る
    
    // 参考サイト
    // https://wa3.i-3-i.info/word17814.html
    // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Remainder
    // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Remainder_assignment
    checkCoins %= coins[i];
    }
    // ループの順番はconsole.log()がcheckCoins %= coins[i];の後に実行されています。
    // そのため、checkCoinsの値が更新された後に表示されるため、正しい結果が表示されるのです。
}

coincheck (checkCoins);

