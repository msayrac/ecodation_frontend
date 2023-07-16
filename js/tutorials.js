const birinci = () => {

    let user = Number(prompt("Lütfen sayi giriniz"));

    return user;


}

const ikinci = () => {

    let data = birinci();
    console.log(Math.sqrt(data));
}



ikinci();




