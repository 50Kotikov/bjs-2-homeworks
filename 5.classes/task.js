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
        return this.state = this.newState;
    };

    set state(value){
        let newState;
        if (value < 0){
            this.newState = 0;
        }else if (value > 100){
            this.newState = 100
        }else{this.newState = value};
    };

}


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
        let findType = type;
        for(let i = 0; i < this.books.length; i++) {
            if(this.books[i].hasOwnProperty("findType") === true && this.books[i][findType] === value) {
                return this.books[i];
            } else {
                return null;
            };
        };
    };

    giveBookByName(bookName) {
        for(let i = 0; i < this.books.length; i++) {
            if(this.books[i].name === bookName) {
                delete this.books[i];
                return this.books[i];
            } else {
                return null;
            };
        };
    };
};

