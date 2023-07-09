

// // try catch

// let tryCatchTuto = () => {

//     try {
//         alertx("pop-pop");

//     } catch (error) {
//         console.log("hata mesajı : " + error.message);
//         console.log("hata mesajı : " + error.name);
//         console.error(error);

//     }



//     console.log("Son satir");

// };

// tryCatchTuto();

// // debug
// // 1 ile 10 dahil olmak üzere toplama iişlemini yapan algoritmayı yazınız

// // let userInput = Number(prompt("Lütfen bir sayi giriniz"));
// // const debugData =()=>{

// //     let sum= 0;
// //     for (let i = 1; i <= userInput; i++){
// //         sum = sum+i

// //     }

// //     console.log("sum: " + sum)

// // };

// // debugData();


// //////////////////////////////////////////////////


// // 1<=userData<=50

// let sumExamplesData = () => {

//     let commonSum = 0;
//     let oddSum = 0, oddCounter = 0, oddNumber = 0;
//     let evenSum = 0, evenCounter = 0, evenNUmber = 0;

//     //user data

//     let user = Number(prompt("Lütfen bitiş sayısınız giriniz."));

//     for (let i = 1; i <= user; i++) {
//         if (user === 44) {
//             console.log("secret key number failed " + user);
//             break;
//         }

//         if (user === 50) {
//             console.log("en fazla 50 sayısına kadar hesaplanır " + user);
//             break;
//         }

//         if (user === 7) {
//             console.log("7 sayısının toplama !!! " + user);
//             continue;
//         }

//     }

//     for (let j = 1; j <= user; j++) {
//         if (j % 2 == 0) {
//             evenCounter++;
//             evenSum += j;
//         } else {
//             oddCounter++;
//             oddSum += j;

//         }

//         commonSum+=i;
//     }


//     console.log("Even number count " + evenCounter);
//     console.log("Even number summation " + evenSum);
//     console.log("odd number count " + oddCounter);
//     console.log("odd number summation " + oddSum);


// };

// sumExamplesData()



let userNameAndSurnameMasking = () => {

    const usernameAndSurname = prompt("Lütfen adınızı ve soyadınızı giriniz.");

    const userIndex = usernameAndSurname.indexOf(" ");

    let username = usernameAndSurname.substring(0, userIndex);

    for (let i = 1; i < username.length; i++) {

        username = username.replace(username.charAt(i), "*");
    };
    username = username.toUpperCase();

    console.log(username);

    let surname = usernameAndSurname.substring(userIndex + 1, usernameAndSurname.length);

    for (let i = 3; i < surname.length; i++) {

        surname = surname.replace(surname.charAt(i), "*");
    };
    surname = surname.toUpperCase();

    console.log(surname);

    console.log(username.concat(" ").concat(surname));
};

userNameAndSurnameMasking();








