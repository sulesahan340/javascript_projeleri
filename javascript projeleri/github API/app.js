//elementleri seçme
const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const github = new Github();
const ui = new UI();


eventListeners();

function eventListeners() {

    githubForm.addEventListener("submit", getData);
    clearLastUsers.addEventListener("click", clearAllSearched);
    document.addEventListener("DOMContentLoaded", getAllSearched);
}
function getData(e) {
    let username = nameInput.value.trim();
    if (username === "") {
        alert("Lütfen geçerli bir kullanıcı adı giriniz.");
    } 
    else {
        
        github.getGithubData(username)
            .then(response => {
                if (response.user.message === "Not Found") {
                    ui.showError("Kullanıcı bulunamadı.");
                }
                else {
                    ui.addSearchedUserToUI(username);
                    Storage.addSearchedUserToStorage(username);
                    ui.showUserInfo(response.user);
                    ui.showRepoInfo(response.repo);
                }
            })
            .catch(err => ui.showError(err));
                
            }
            
    ui.clearInput();//input alanını temizleme
    e.preventDefault();
}
function clearAllSearched() {
    //tüm arananları silme

    if (confirm("Tüm aranan kullanıcılar silinecek. Emin misiniz?")) {
        Storage.clearAllSearchedUsersFromStorage();
        ui.clearAllSearchedFromUI();
    }
    
}
function getAllSearched() {
    //arananları storagedan al ve ui'ye ekle

    let users = Storage.getSearchedUsersFromStorage();

    let result = "";
    users.forEach(user => {

        result += `
            <li class="list-group-item">${user}</li>
        `;
    });
    lastUsers.innerHTML = result;

}