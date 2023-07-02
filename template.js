
// Dark Mode
let darkMode = () => {
    //alert("Dark Mode");
    document.body.classList.toggle("dark_mode")


}

//input search
$(document).ready(function () {
    const searchApi = ["Adana", "Balıkesir", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Malatya", "Van"]
    $("#tags").autocomplete({
        source: searchApi
    })

}); // end





//Footer
let newDate = () => {
    //JS DOM
    // document.getElementById("date_id").innerHTML= new Date().getFullYear();


    //jquery DOM nasıl çalışır araştır
    const date = new Date().getFullYear();
    $("#date_id").html(date)
}

// Function called.
newDate();



