let input0 = document.getElementById("input0")
let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")
let input3 = document.getElementById("input3")
let input4 = document.getElementById("input4")
let input5 = document.getElementById("input5")
let input6 = document.getElementById("input6")
let input7 = document.getElementById("input7")
let input8 = document.getElementById("input8")
let input9 = document.getElementById("input9")
let input10 = document.getElementById("input10")
let input11 = document.getElementById("input11")
let input12 = document.getElementById("input12")
let input13 = document.getElementById("input13")
let input14 = document.getElementById("input14")
let input15 = document.getElementById("input15")
let input16 = document.getElementById("input16")
let input17 = document.getElementById("input17")
let input18 = document.getElementById("input18")
let input19 = document.getElementById("input19")
let output1 = document.getElementById("output1")
let output2 = document.getElementById("output2")
let output3 = document.getElementById("output3")
let output4 = document.getElementById("output4")
let output5 = document.getElementById("output5")
let output6 = document.getElementById("output6")
let output7 = document.getElementById("output7")
let output8 = document.getElementById("output8")
function jypi(){
      if(input1 !=" " && input0 !=" "){
         let pul = (+input0.value / +input1.value) * 100;
     output1.innerHTML = pul;
 }
  }
function jyoi(){
      if(input2.value !=" " && input3.value !=" "){
         let pu = +input2.value + +input3.value + +input4.value;
     output2.innerHTML = pu 
 }
  }
function jyp(){
      if(input5.value !=" " && input6.value !=" "){
         let puo = +input5.value * +input6.value;
     output3.innerHTML = puo
 }
  }
function jop(){
if(input7.value !=" " && input8.value !=""){
     let poly = +input7.value/100 + (+input8.value / +input9.value )*100;
     output4.innerHTML = poly
};
 }
function jo(){
if(input10.value !=" " && input11.value !=" "){
     let poj = (+input10.value * +input11.value )/100;
     output5.innerHTML = poj 
};
 }
function jk(){
if(input12.value !="" && input13.value !=""){
     let tatel =+input12.value /100 * (100/100 - +input13.value / 100) * 100;
     output6.innerHTML = tatel
}
}
function jp(){
if(input14.value !=" " && input15.value !=" "){
     let op = 100 * (+input14.value / +input15.value) ;
     output7.innerHTML =  op
};
 }
function jOIPYR(){
     if(input17.value !=" " && input16.value !=" "){
          let  yu = +input16.value;
          let xc = +input17.value * (100/100 - input18.value /100);
          let ghu = (input19.value / 100) ;
          let plp = yu / xc;
          let piop = (plp + ghu);
          let pouyt = piop * 100
          output8.innerHTML =  pouyt
     }
}