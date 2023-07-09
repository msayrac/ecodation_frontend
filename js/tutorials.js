

// try catch

let tryCatchTuto =() => {

    try{
        alertx("pop-pop");

    } catch(error){
        console.log("hata mesajı : " + error.message);
        console.log("hata mesajı : " + error.name);
        console.error(error);

    }

   

    console.log("Son satir");

};

tryCatchTuto();

// debug
// 1 ile 10 dahil olmak üzere toplama iişlemini yapan algoritmayı yazınız

const debugData =()=>{

    let sum= 0;
    for (let i = 0; i <= 10; i++){
        sum = sum+i

    }

    console.log("sum: " + sum)

};

debugData();










 