const array = ["media/img1.jpg","media/img2.jpg","media/img3.jpg","media/img4.jpg"];
const imageNode = document.querySelector (".image");
const buttonNode1 = document.querySelector ("#one");
const buttonNode2 = document.querySelector ("#two");
let i = 0;// область видимости переменной шире, чем в фигур. скобках

imageNode.src = array[0];
    buttonNode2.addEventListener ("click", ()=> {
    console.log("begin",i);

    imageNode.src = array[i];
      if (i===array.length-1){
        i=0;
    }else{
       i++; 
    }
    console.log("end",i);
 })

 buttonNode1.addEventListener ("click", ()=> {
    console.log("begin",i);
    if (i===0){
        i=array.length-1;
    }else{
       i--; 
    }
    imageNode.src = array[i];
    console.log("end",i);
 })