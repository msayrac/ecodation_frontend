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


// const promTutorials = () => {

//     // catch 1 tane olmak zorunda
//     let data = new Promise((resolve, reject) => { 
//         let status = 400;

//         if(status===200){
//             resolve("Çalıştı");
//         } else
//         reject("çalışmadı")
//     }).then(
//             () => { console.log("OLUMLU"); }
//         ).catch(
//             (err) => {console.error(err);}
//         );
// };

// promTutorials();


// arrays

// let arr = () => {
//     const numbers = [1, 3, 5, "str", true,66,99,852,65];
//     return numbers;

// };

// arr()


// let arrResult = () => {
//     let data = arr();
//     console.log(data);
//     console.log(data[data.length - 1]);
//     //Iterative for loop

//     for (let i = 0; i < data.length; i++) {
//         document.write(data[i] + " ");

//     }
//     document.write("<br/>+++++++++++++++++++++++ <br/>")

//     for(let temp in data){
//         document.writeln(data[temp] + " ");
//     }
//     document.write("<br/>+++++++++++++++++++++++ <br/>")
//     for(let temp of data){
//         document.write(temp + " ")
//     }

//     document.write("<br/>+FOREACH++++++++++++++++++++++ <br/>")

//     data.forEach(function(value,index,array){

//         //document.write(index + " ==> "+ value + "<br/>");
//         document.write(`${index} ==> ${value} <br/>`);

//     });
//     document.write("<br/>+FOREACH++++++++++++++++++++++ <br/>")
//     document.write("Eleman sayısı : " + data.length)
//     document.write("<br/>+FOREACH++++++++++++++++++++++ <br/>")
//     data.push("Eklendi")
//     document.write("<br/>+FOREACH++++++++++++++++++++++ <br/>")
//     data.unshift("Basa eklendi");
//     document.write("Eleman sayısı : " + data.length)

//     document.write("<br/>+FOREACH++++++++++++++++++++++ <br/>")

//     data.pop(); // sonran bır eleman cıkar

//     data.shift();



//     document.write("<br/>+FOREACH++++++++++++++++++++++ <br/>")
//     data.forEach(function(value,index,array){

//         //document.write(index + " ==> "+ value + "<br/>");
//         document.write(`${index} ==> ${value} <br/>`);

//     });

//     document.write("<br/>+FOREACH++++++++++++++++++++++ <br/>")
//     data.sort();
//     console.log(data)

//     data.reverse();
//     console.log(data)

// }

// arrResult();


// callback - promise practice

let callbackFunctionComputer = () => {

    const computerArray = [];
    //{computerName: "callBack computer 1", price:100}

    for (let i = 0; i < 5; i++) {
        let computerObject = {
            computerName: `computer ${i + 1}`,
            price: `${(i + 1) * 100}`
        }
        computerArray.push(computerObject);
    }
    console.log(computerArray);

    const arrayInComputerName = () => {

        computerArray.map((temp) => {

            // console.log(`${temp.computerName}`);

        });
    }

    arrayInComputerName();

    // call back function price

    const arrayInComputerObject = (obj, callBackFnc) => {
        computerArray.push(obj);
        callBackFnc();
    };

    arrayInComputerObject({ computerName: "computer 6", price: 600 }, arrayInComputerName)

}

//callbackFunctionComputer();


// object
let objectTutorials = () => {

    const personObj = {
        "name": "Hamit",
        "surname": "Mızrak",
        "number": 44,
        "isLogin": true,
        "software": ["Html5", "css3", "js"]
    }

    console.log(personObj);
};

// objectTutorials();


// object constructor

let objectConstructor = () => {

    let personConstructor = function (name, surname) {

        this.name = name;
        this.surname = surname;
        console.log(this);

    }

    let personResult = new personConstructor("Hamit", "Mızrak");
    console.log(personResult.name);
}

//objectConstructor();

let noParameterCallAppliedBind = () => {

    let funcitonOtherObject = () => {
        document.writeln(`Parametresiz Function : ${this.adi}<br/>`)

    }

    let objectData = {
        "adi": "Spora gidiyorum"
    }

    funcitonOtherObject.call(objectData);
    funcitonOtherObject.apply(objectData);

    let deneme = functionOtherObject.bind(objectData);
    deneme();

}

//noParameterCallAppliedBind();

let eventFunction = () => {

    alert("Calistı");


};

let newDataDate = () => {
    let now = document.getElementById("text_data");
    //HTML
    now.innerHTML ="<b><i><mark>"+new Date().getFullYear() +"</b></i></mark>";

    //Text
    now.innerText =`<b><i><mark> ${new Date().getFullYear()} </b></i></mark>`;




}






























