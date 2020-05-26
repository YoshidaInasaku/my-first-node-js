// strictモード. 宣言後の記述ミスをエラーとして呼び出してくれる.
'use strict';

// const・let共にブロックスコープ. constは再代入不可
// process.argv[]でnodeのコマンドライン引数が入った配列を取得できる（indexは2が最初の引数に当たる）
const number = process.argv[2] || 0;  // 条件付き論理和を用いて、選択的な代入を行う（左側が0/undefinded/nullの際には右側の値を出力する）
let sum = 0;
for(let i = 1; i <= number; i++) {
    sum = sum + i;
}
console.log(sum);
