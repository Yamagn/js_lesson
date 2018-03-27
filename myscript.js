/*
    タイマー処理
     setInterval
     setTimeout
*/

// var i = 0;

// function show() {
//     console.log(i++);
//     var tid = setTimeout(function() {
//         show();
//     }, 1000);
//     if (i > 3) {
//         clearTimeout(tid);
//     }
// }
// show();

/*
    配列: グループ化されたデータ
*/
// var score_1 = 100, score_2 = 200;

// var score = [100, 300, 500, "taguchi"];
// // console.log(score[0]); // 添字 0,1,...
// score[2] = 400;
// console.log(score);

// var m = [
//     [1, 2, 3],
//     [4, 5, 6]
// ];
// console.log(m[1][1]);

//オブジェクト
//   名前と値 
// var user = {
//     email: "hoge@gmail.com", // プロパティ
//     score: 80,
//     greet: function(name) { // メソッド
//         console.log("hello, " + name + " from " + this.email);
//     }
// };

// console.log(user["email"]);
// console.log(user.email);
// user.score = 100;
// console.log(user);
// user.greet("Tom");

/* 組み込みオブジェクト
    - String
    - Array
    - Math
    - Date
*/

// String
// var s = "hoge";
// // var s = new String("hoge"); // mdn string
// console.log(s.length); //文字数
// console.log(s.replace("h", "H")); // 置換
// console.log(s.substr(1, 3)); //部分参照 (何文字目から,何文字)

// Array
// var a = new Array(100, 300, 200);
// var a = [100, 300, 200]
// console.log(a.length);
// unshift -> array <- push
// shift   -> array -> pop

// a.push(500);
// console.log(a);
// splice 途中に追加
// a.splice(1, 2, 800, 1000); // (追加削除をしたい場所, 削除した要素の数) 
// console.log(a);

// Math

console.log(Math.PI);
console.log(Math.ceil(5, 3));
console.log(Math.floor(5, 3));
console.log(Math.round(5, 3));
console.log(Math.random());

// Date

var d = new Date();
// var d = new Date(2018, 3, 27, 17, 03, 30);
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getTime());