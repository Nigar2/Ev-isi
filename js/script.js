const Name = document.querySelector("#name")
const Surname = document.querySelector("surname")
const Phone = document.querySelector("phone")
const Score = document.querySelector("score")
const Loginform = document.querySelector("login-form")

function Book(name,surname,phone,score){
    (this.name = name),(this.surname = surname),(this.phone = phone),(this.score = score)

}

function UI() {}
Loginform.addEventListener("submit", function(e) {
    const name= Name.value,
    surname = Surname.value,
    phone = Phone.value,
    score = Score.value;
    e.preventDefault();
    const book = new Book(name,surname,phone,score);
    const ui = new UI();
    ui.clearFiled()
    if(name.trim() ==="" || surname.trim() ==="" || phone.trim() ==="" || score.trim()===""){
        ui.ShowAlert("Zəhmət olmasa boşluğu doldurun.", 'error');
    } 
    else{
        ui.adBookList(book);
        ui.ShowAlert("Əlavə olundu.", 'success')
    }
    Store.addBook(book)
   
});

UI.prototype.deleteBook=function(target){
    if(target.className==='delete'){
        target.parentElement.parentElement.remove()
    }
}

document.getElementById('book-list').addEventListener('click',function(e){
    e.preventDefault()
    const ui=new UI()
    ui.deleteBook(e.target)
    ui.ShowAlert("Book Removed", 'success')
})

UI.prototype.adBookList = function (book){
    const list = document.getElementById("book-list");
    const row = document.createComment("tr");
    row.innerHTML += `
    <td>${book.name}</td>
    <td>${book.surname}</td>
    <td>${book.phone}</td>
    <td>${book.score}</td>
    <td> <a href="#" class="delete">X</></td>
    `;
    list.appendChild(row);
    console.log(list.appendChild(row));
};
UI.prototype.clearFiled = function(){
    Name.value = " ";
    Surname.value = " ";
    Phone.value = " ";
    Score.value = " "
};
UI.prototype.ShowAlert = function(sms,className){
    (tihs.sms = sms),(this.className= className);
    const div = document.createElement("div");
    div.className = `${className}`;
    div.appendChild(document.createTextNode(sms));
    const container = document.querySelector("login-form");
    container.insertBefore(div,form)
    setTimeout(function(){
        document.querySelector(".alert").remove()},3000)
};

class Store{
    static getBooks(){
        let books;
        if(localStorage.getItem("books")===null){
            books=[]
        }
        else{
            books=JSON.parse(localStorange.getItem('books'))
        }
        return books
    }
    static displayBooks(){
        const books = Store.getBooks()
        books.forEach(books => {
            const ui=new UI()
            ui.addBookToList(book)
        });
    }
    static addBook(book){
        const books = Store.getBooks()
        book.push(book)
        localStorange.setItem('books',JSON.stringify(books))

    }
    static removebook(){}
}




function check(){
    var nbr;
    nbr = Number(document.getElementById("age").value);
    if(nbr < 20)
    {
       alert("Yaş həddi çatmır");
    }
    else
    {
       alert("Yaş həddi çatır");
    }
}

// 2ci tapsiriq


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (20)) ;
  }


//   3cü tapşırıq
function check(){
    var number;
    number = Number(document.getElementById("card").value)

    if(number<= 1234567812345678)
    {
        alert("Kard məlumatı doğrudur.");
    }
    else{
        alert("Kard məlumatı yanlışdır.");
    }
}
