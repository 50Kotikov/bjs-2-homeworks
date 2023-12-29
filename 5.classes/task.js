class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
    };
    fix() {
        this.state *= 1.5;
    };

    get state() {
        return this.newState;
    };

   set state(value){
           let newState;
           if (value < 0){
           this.newState = 0;
        }else if (value > 100){
            this.newState = 100
        }else{this.newState = value};
    };
};   
    
   
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    };
};

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    };
};

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    };
};

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    };
};

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    };
};

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];       
    };

    addBook(book) {
       if(book.state > 30) {
        this.books.push(book);
       };
    };

    findBookBy(type, value) {
            return this.books.find(book => book[type] === value) || null
        };
    

    giveBookByName(bookName) {
        let readersBook = this.findBookBy("name", bookName);
            if (readersBook !== null) {
              this.books.splice(this.books.indexOf(readersBook), 1);
            }
            return readersBook;
          }
};



const library = new Library("Библиотека № 3 им. Тютчева");

 library.addBook(
  new NovelBook(
    "Вашингтон Ирвин",
    "Легенда о сонной лощине и другие рассказы",
    2005,
    130
  )
);

library.addBook(
    new DetectiveBook(
      "Сергей Петрушкин",
      "Как мы на рыбалку сходили",
      1919,
      270
    )
  );

library.addBook(
  new Magazine(
    "VOUGE",
    2023,
    75
  )
);

console.log(library.findBookBy("releaseDate", 1919).name);

console.log("Количество книг до выдачи: " + library.books.length);

let readersBook = library.giveBookByName("Легенда о сонной лощине и другие рассказы");

console.log(readersBook);

readersBook.state = 40;

console.log(readersBook);

readersBook.fix();

console.log(readersBook);

library.addBook(readersBook);

console.log(library);


