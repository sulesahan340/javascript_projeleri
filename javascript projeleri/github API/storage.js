class Storage {

    static getSearchedUsersFromStorage() {
        //tüm aranan kullanıcıları al
        let users;

        if (localStorage.getItem("searched") === null) {
            users = [];
        } else {
            users = JSON.parse(localStorage.getItem("searched"));
        }
        return users;
}

static addSearchedUserToStorage(username) {
    //kullanıcı ekle
    let users = this.getSearchedUsersFromStorage();

    // indexof ile kullanıcıyı kontrol et

    if (users.indexOf(username) === -1) {
        users.push(username);
    }
    localStorage.setItem("searched", JSON.stringify(users));
}
static clearAllSearchedUsersFromStorage() {
    //tüm aranan kullanıcıları sil
    
    localStorage.removeItem("searched");
}
}