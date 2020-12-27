"use strict";

{
  // console.log("test");

  // let 
  // const 

  // var var1 = "var変数";

  // console.log(var1);
  
  // var1 = "var変数を上書き";
  // console.log(var1);
  
  // var var1 = "var変数を再宣言";
  // console.log(var1);

  // let val2 = "let変数";
  // console.log(val2);
  
  // val2 = "letは上書きが可能";
  // console.log(val2);
  // //letは再宣言が不可能
  
  // let val2 = "letを再定義";
  // console.log(val2);
  
  // const val3 = "const宣言";
  // console.log(val3);
  // val3 = "const変数は上書き不可能";
  // console.log(val3);
  // const val3 ="constを再宣言する";
  // console.log(val3);

  // const val4 = {
  //   name:"名前",
  //   age:20,
  // }
  // console.log(val4);
  // val4.name = "苗字に変更";
  // console.log(val4);
  //オブジェクトそのものを変更しているわけではないから変更可能
  // val4.address = "埼玉";

  // console.log(val4);

  // const val5 = ["dog","cat",];

  // console.log(val5);
  // val5[0] = "bird";
  // console.log(val5);
  // val5.push("monkey");
  // console.log(val5);

//テンプレートリテラル
// const name = "名前";
// const age = 20;

// const message = "私の名前は" + name + "です。年齢は" + age + "歳です";

// console.log(message);

// const message2 = `私の名前は${name}です。年齢は${age}歳です`;
// console.log(message2);

//アロー関数

// function func1(str){
//   return str;
// }

// const func1 = function(str){
//   return str;
// }

// const func2 = (str) => {
//   return str;
// }

// const func3 = str => str;

// const func4 = (num1 , num2) => num1 + num2;


// console.log(func1("func1です"));
// console.log(func2("func2です"));
// console.log(func3("func3です"));
// console.log(func4(10,20));

//分割代入
//オブジェクトの分割代入
// const myProfile = {
//   name:"とし",
//   age:33,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;

// console.log(message1);

// const {name, age} = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}歳です`;
// console.log(message2);

//配列の分割代入
// const myProfile = ["とし", 33];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;

// console.log(message3);

// const [name , age] = myProfile;
// const message4 = `私の名前は${name}です。年齢は${age}歳です。`;

// console.log(message4);


//デフォルト値と引数//

  // const seyHello = (name = "ゲスト" ) =>{
  //   console.log(`こんにちは${name}さん`);
  // }

  // seyHello("とし");
  // seyHello();

  //スプレッド構文

  //①配列の展開
  // const arr1 = [1,2,3];
  // console.log(arr1);
  // console.log(...arr1);//スプレッド構文にすると、処理をそれぞれに分割して「順番に」実行する。
  // const sumFunc = (num1, num2 ,num3) => console.log(num1 + num2 + num3) ;

  // sumFunc(arr1[0] , arr1[1] , arr1[2]);
  // sumFunc(...arr1);

  //②配列をまとめる
  // const arr2 = [1,2,3,4,5];
  // const [num1 , num2 , ...arr3] = arr2;
  // console.log(num1);
  // console.log(num2);
  // console.log(...arr3);
  // console.log(arr3);

  //③配列のコピー、結合
  // const arr4 = [10,20];
  // const arr5 = [30,40];
  // const arr6 = [...arr4];
  // console.log(arr6);
  
  // const arr7 = [...arr4 , ...arr5];
  // console.log(arr7);

  // const arr8 = arr4;
  // arr8[0] = 100;
  // console.log(arr4);
  //値の参照をそのままコピると、参照元の値も変わってしまう
  //したがって参照元の値を変更したくない場合、内容を展開して格納する必要がある。
  // const arr9 = [...arr4];
  // console.log(arr9);
  // arr9[0] = 1000;
  // console.log(arr9);
  // console.log(arr4);

  //mapやfilterを使った配列の処理

  // const nameArr = ["山田","田中","じゃけぇ"];

  // for (let i = 0 ; i < nameArr.length ; i ++){
  //   console.log(`${i + 1}番目の名前は${nameArr[i]}さんです`);
  // };

  // nameArr.map(name => {
  //   console.log(name);
  // });

  // const nameArr2 = nameArr.map( name => {
  //   return name;
  // });

  // console.log(nameArr2);
  
  // nameArr2[2] = "とし"
  // console.log(nameArr2);
  // console.log(nameArr);
  
  // //第一引数は要素そのもの、第二引数は要素のindex番号
  // nameArr.map( (name,index,array) => {
  //   if(name !== "じゃけぇ"){
  //     name =`${name}さん`;
  //   }
  //   console.log(`${index +1}番目の苗字は${name}です。`)
  // });

  // const numArr = [1,2,3,4,5];

  // const newNumArr = numArr.filter( number => {
  //   return number % 2 === 0;
  // });

  // console.log(newNumArr);

  //三項演算子
  //ある条件 ? 条件がtrueの時の返却 : 条件がfalseの時の返却
  // const val1 = 1 < 0 ? "trueです" : "falseです";

  // console.log(val1);
  // const num = 1500;
  // // console.log(num.toLocaleString());

  // const formattedNum = typeof num === "number" ? num.toLocaleString() : "数値を入力してください";

  // console.log(formattedNum);


  // const checkSum = (num1 , num2)=>{
  //   return num1 + num2 > 100 ? "100を超えています!!" : "許容範囲内です" ;
  // }
  // console.log(checkSum(90,11));

  //論理演算子の本当の意味を知る
  const flag1 = 90;
  const flag2 = 100;
  const num1 = flag1 && flag2;
  console.log(num1);

  const flag3 = 0;
  const flag4 = 1;
  const num2 = flag3 && flag4;
  console.log(num2);

  // if (flag1 > 100 && flag2 < 1000){
  //   console.log(`${flag1}は100より小さいです`);
  // }



  // if (flag1 || flag2) {
  //   console.log("1か2はtrueになります");
  // };
  // if (flag1 && flag2) {
  //   console.log("1も2もtrueになります");
  // } else {
  //   console.log("1か2のいずれかはfalseです")
  // };

  // 「||」の本当の意味 => 左側がfalseの時には右側を返却する 
  // const num = 100;
  // const flag3 = num || "金額未設定です";

  // console.log(flag3);

  // const num2 = 100 ;
  // const fee2 = num2 && "何か設定されました";
  // console.log(fee2);

}