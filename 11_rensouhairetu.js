const array = [1,2,3];

const array_2 = [
["赤","青","黄"],
["緑","紫","黒"]
];
//0から始まる
console.log(array_2 [0][2]);

//オブジェクト（もの）
const menber ={
  //キー：　バリュー
  'name': '本田',
  'height': 170,
  'hobby' :'サッカー'

};

console.log(menber.name);

const member_2 ={
  '本田':{
    'height':170,
    'hobby':'サッカー'
  },
  '香川':{
    'height':160,
    'hobby':'サッカー'
  }
};

console.log(member_2['香川']['height'])

const member_3 ={
 '1kumi':{
  '本田':{
    'height':170,
    'hobby' : 'サッカー'
  },
  '香川':{}
 },
 '2kumi':{}
};

console.log(member_3['1kumi']['本田']['hobby']);