//if (条件){
//　条件が真なら実行
//}　else{
//  　条件が偽なら実行
//}

const height =91;

console.log(typeof height);

if (height >= 91){
  console.log('身長は'+ height + 'cmです');
}

if (height <= 90){
  console.log('身長は'+ height + 'cmなります');
}

if (height !== 90){  //否定　！＝＝型も否定
  console.log('身長は'+ height + 'cmになりません');
}

// == 一致
// === 型も一致 　こちらが主流で使う

const  signal = 'blue';

if (signal === 'red'){
  console.log('止まれ')
} else if (signal === 'yellow'){
  console.log ('一旦停止');
} else{
  console.log('進む')
}

const speed =60;

if(signal ==='blue'){
  if(speed >= 60){//ネスト
    console.log('スピード違反');
   }
  }

// AND ,OR



