//if (条件){
//　条件が真なら実行
//}　else{
//  　条件が偽なら実行
//}

const height =91;

console.log(typeof height);

if (height === 90){
  console.log('身長は'+ height + 'cmです');
} else {
  console.log('身長は90cmではありません');
}

// == 一致
// === 型も一致 　こちらが主流で使う

const  signal = 'red';

if (signal === 'red'){
  console.log('止まれ')
} else if (signal === 'yellow'){
  console.log ('一旦停止');
} else{
  console.log('進む')
}

const speed =60;

