const from = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");


//UI objesini Başlatma
const ui = new UI();

//storage objesi üret
const storage = new Storage();

//tüm eventleri yükleme

eventListeners();

function eventListeners(){
    from.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);

    });
    cardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);

}

function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === ""){
        //hata
        ui.displayMessages("tüm alanları doldurun...","danger");
    }
    else{
        //yeni film
        const newFilm = new Film(title,director,url);
    
    ui.addFilmToUI(newFilm); //arayüze film ekleme
    storage.addFilmToStorage(newFilm);//storageye film ekleme
    

    ui.clearInputs(titleElement,urlElement,directorElement);
}


    e.preventDefault();
}

function deleteFilm(e){

    if(e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        
        ui.displayMessages("silme işlemi başarılı..","success");
    }
}

function clearAllFilms(){

    if(confirm("emin misiniz?")) {
    ui.clearAllFilmsFromUI();
    storage.clearAllFilmsFromStorage();
    }
}