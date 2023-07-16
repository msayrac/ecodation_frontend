// const birinci = () => {

//     let user = Number(prompt("Lütfen sayi giriniz"));

//     return user;
// }

// const ikinci = () => {

//     let data = birinci();
//     console.log(Math.sqrt(data));
// }
// ikinci();


// setTimeOut(), setInterval()

// setTimeout(function(){

//     console.log("SetTimeOut çalıştı");

// },2000)

// setInterval(function(){

//     console.log("SetInterval çalıstı");

// },3000)

// callbackFunction

// const birinci = (data) => {
//     return Math.pow(2,data);

// };

// const ikinci = (callbackFunction) => {

//     let user = Number(prompt("Lutfen sayi giriniz..."));
//     let data = callbackFunction(user);
//     console.log(data);
// }

// ikinci(birinci);


const promTutorials = () => {

    // catch 1 tane olmak zorunda
    let data = new Promise((resolve, reject) => { 
        let status = 400;

        if(status===200){
            resolve("Çalıştı");
        } else
        reject("çalışmadı")
    }).then(
            () => { console.log("OLUMLU"); }
        ).catch(
            (err) => {console.error(err);}
        );
};

promTutorials();





































