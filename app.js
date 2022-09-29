// const yosh =10
// const a = yosh > 18
// const b = yosh < 20 
// console.log(a && b);
// console.log(a || b);
// console.log(!a);
// console.log(!b);
// const htmlPassed =true;
// const cssPassed =false;
// let massage = '';
// if (htmlPassed && cssPassed){
//     massage ="siz bootsrap kursini boshlashngiz kerak"
// }
// if (htmlPassed || cssPassed){
//     massage ='siz scss kursini ham tugating'
// }
// console.log(massage);

// const yosh = '23'//string
// console.log(yosh);//string
// console.log(Number(yosh));//Number
// console.log( yosh + 1);//231 (concatinetion)
// console.log(Number(yosh)+1);//24
// const ism ='temur'
// console.log(Number(ism));//NON
// const yil =2022
// console.log(yil);//Number
// console.log(String(yil));//String
// console.log('Men '+ 2004 + ' chi yilda tavalut topkaman');
// console.log('30'- '10'- 5);

// console.log(Boolean(false));//false
// console.log(Boolean(0));//false
// console.log(Boolean(''));//false
// console.log(Boolean(undefined));//false
// console.log(Boolean(null));//false
// console.log(Boolean(NaN));//false
// console.log(Boolean(0n));//false

// console.log(Boolean('temur'));//true
// console.log(Boolean(23));//true
// console.log(Boolean([]));//true
// console.log(Boolean({}));//true
// console.log(Boolean('0'));//true
// console.log(Boolean(false));//true

// const ism ='';
// if(ism){
//     console.log('sizning ismingiz' + ism);
// }else{
//     console.log('iltimos ismni kiriting');
// }

// function meningFunksiyam(son1,son2){
//     return son1 + son2;
// }
// const result = meningFunksiyam (30,40);//70
// console.log(result + 10 );//80

// console.log(kvadrat(2));//4
// function kvadrat(son){
//     return son * son
// }
// console.log(kvadrat(10));//100

// const kvadrat = function(son) {
//     return son * son
// }
// console.log(kvadrat(10));//100;

// const kvadrat =son=> {
// return son * son;
// }
// console.log(kvadrat(10));//100

// const volume =(a,b,c)=> a*b*c;
// console.log(volume(1,2,3));//6

// const even0r0ddExp = function(number){
// if (number % 15===00){
//     console.log(`${number}is even`);
// }else{
//     console.log(`${number}is odd`);
// }
// }
// even0r0ddExp(5)

// const even0r0ddExp =number=>{
//     if (number % 2==0){
//         console.log(`${number}is even`);
//     } else{
//         console.log(`${number}is odd`);
//     }
// }
// even0r0ddExp(3)

// const maxArov =(number1,number2)=>{
//     if (number1>=number2){
//         return number1;
//     }
//     return number2;
// }
// console.log(maxArov(20,10));
// console.log(maxArov(10,3));

// const reversAre = number =>{
//     const numberStr =String(number);
//     const reverStr =numberStr.split (''). reverse().join('');
//     return Number (reverStr);
// }
// console.log(reversAre(123));

// const helloAre =[ 'h',  'e',  'l',  'l',  'o' ];
// console.log(helloAre[3]);
// console.log(helloAre[0]);

// let logvich = ['java', 'js', ];
// console.log(logvich);
// console.log(logvich[0]);

// const longvich =['js', 'java','go'];
// console.log(longvich);
// longvich [1]='siwit';
// console.log(longvich);
// const delatetLongich = longvich.shift();
// console.log(longvich);
// console.log(delatetLongich);
// console.log(longvich.length);

// const arey1 =[1,2];
// const arey2 =[3,4,5,7,];
// const result =arey1.concat (arey2)
// console.log(arey1);
// console.log(result);

// const filterValyu =number => number > 5;
// const filterdValyu = result.filter(number => number >5);
// console.log(filterdValyu);

// const dasturchi ={
//     ism: 'Temur',
//     yoshi:18
// }
// console.log(dasturchi);
// console.log(dasturchi.ism);
// console.log(dasturchi['yoshi']);

// const number = -2;
// if (number > 0){
//     console.log('berilgan son musbat');
// }else{
//     console.log('berilgan son manfi');
// }

// const number = -1;
// if (number > 0){
//     console.log('berilgan son musbat');
// }else if (number === 0){
//     console.log('berilgan son nolga teng');
// } else{
//     console.log('berilgan son manfi');
// }

const arre =[];
const question =[
    'Assalomu alekum ismingizni kiriting',
    'salom SHarofat telwfon raqamingizni kiriting',
    'yoshingizni kiriting'
]
for (let i=0; i< question.length;i++){
    arre[i]=prompt(question[i])
}
console.log(arre);
alert('biroz kuting')
alert('siz haqigizda biz hama narsani bilamiz') 
