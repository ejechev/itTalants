function Page(number) {
    this.number = number
    this.heading = '';
    this.text = ''
}
Page.prototype = {
    addHeading: function (heading) {
        this.heading = heading
    },
    addText: function (newText) {
        this.text += newText + '\n'
    },
    deleteText: function () {
        this.text = ''
    },
    viewPage: function () {
        console.log(this.heading.toUpperCase())
        console.log(this.text)
    },
    searchWord: function (word) {
        let theWord = this.text.indexOf(word)
        if (theWord !== -1) {
            return true;
        }
        return false;
    },
    containsDigits: function () {
        var r = /\d+/
        return this.text.match(r)
    }
}

function Notepad(numberOfPages) {
    this.stranici = [];
    for (let i = 1; i <= numberOfPages; i++) {
        this.stranici.push(new Page(i))
    }
}
Notepad.prototype = {
    addHeading: function (heading, pageNumber) {
        this.stranici[pageNumber - 1].addHeading(heading)
    },
    addText: function (newText, pageNumber) {
        this.stranici[pageNumber - 1].addText(newText)
    },
    deleteText: function (pageNumber) {
        this.stranici[pageNumber - 1].deleteText()
    },
    viewPage: function (pageNumber) {
        this.stranici[pageNumber - 1].viewPage()
    },
    viewAllPages: function () {
        for (let i = 0; i < this.stranici.length; i++) {
            this.stranici[i].viewPage()
        }
    },
    searchWord: function (word, pageNumber) {
        console.log(this.stranici[pageNumber - 1].searchWord(word));
    },
    printAllPagesWithDigits: function () {
        for (let i = 0; i < this.stranici.length; i++) {
            let digit = this.stranici[i].containsDigits()
            if (!(isNaN(Number(digit))) && digit !== null) {
                this.stranici[i].viewPage()
            }
        }
    }


}

function SecuredNotePad(parola, stranici) {
    var password = parola;
    var belejnik = new Notepad(stranici)
    this.addHeading = function (heading, pageNumber, parola) {
        if (parola === password) {
            belejnik.stranici[pageNumber - 1].addHeading(heading)
        }
    }
    this.addText = function (newText, pageNumber, parola) {
        if (parola === password) {
            belejnik.stranici[pageNumber - 1].addText(newText)
        }
    },
        this.deleteText = function (pageNumber, parola) {
            if (parola === password) {
                belejnik.stranici[pageNumber - 1].deleteText()
            }
        },
        this.viewPage = function (pageNumber, parola) {
            if (parola === password) {
                belejnik.stranici[pageNumber - 1].viewPage()
            }
        },
        this.viewAllPages = function (parola) {
            if (parola === password) {
                for (let i = 0; i < belejnik.stranici.length; i++) {
                    belejnik.stranici[i].viewPage()
                }
            }
        },
        this.searchWord = function (word, pageNumber, parola) {
            if (parola === password) {
                console.log(belejnik.stranici[pageNumber - 1].searchWord(word));
            }
        },
        this.printAllPagesWithDigits = function (parola) {
            if (parola === password) {
                for (let i = 0; i < belejnik.stranici.length; i++) {
                    let digit = belejnik.stranici[i].containsDigits()
                    if (!(isNaN(Number(digit))) && digit !== null) {
                        belejnik.stranici[i].viewPage()
                    }
                }
            }
        }
}

function ElectronicDevice () {
    this.isStarted = false;
    this.startNow = function () {
        this.isStarted = true;
    };
    this.stop = function () {
        this.isStarted = false;
    }
}
function ElectronicSecuredNotePad(parola, stranici) {
    var electra = new ElectronicDevice()
    var isStarted = false;
    var password = parola;
    var belejnik = new Notepad(stranici)
    
    this.startSystem = function() {
        electra.startNow()
        
    };
    this.stoptSystem = function() {
        electra.stop()
    }
    
    this.addHeading = function (heading, pageNumber, parola) {
        if (parola === password && (electra.isStarted)) {
            belejnik.stranici[pageNumber - 1].addHeading(heading)
        }
    }
    this.addText = function (newText, pageNumber, parola) {
        if (parola === password && (electra.isStarted)) {
            belejnik.stranici[pageNumber - 1].addText(newText)
        }
    },
        this.deleteText = function (pageNumber, parola) {
            if (parola === password && (electra.isStarted)) {
                belejnik.stranici[pageNumber - 1].deleteText()
            }
        },
        this.viewPage = function (pageNumber, parola) {
            if (parola === password && (electra.isStarted)) {
                belejnik.stranici[pageNumber - 1].viewPage()
            }
        },
        this.viewAllPages = function (parola) {
            if (parola === password && (electra.isStarted)) {
                for (let i = 0; i < belejnik.stranici.length; i++) {
                    belejnik.stranici[i].viewPage()
                }
            }
        },
        this.searchWord = function (word, pageNumber, parola) {
            if (parola === password && (electra.isStarted)) {
                console.log(belejnik.stranici[pageNumber - 1].searchWord(word));
            }
        },
        this.printAllPagesWithDigits = function (parola) {
            if (parola === password && (electra.isStarted)) {
                for (let i = 0; i < belejnik.stranici.length; i++) {
                    let digit = belejnik.stranici[i].containsDigits()
                    if (!(isNaN(Number(digit))) && digit !== null) {
                        belejnik.stranici[i].viewPage()
                    }
                }
            }
        }
    }
    



var tefter = new ElectronicSecuredNotePad('asd', 3);
tefter.startSystem()


tefter.addHeading('Stranica 1', 1, 'asd')
tefter.addHeading('Stranica 2', 2, 'asd')
tefter.addHeading('Stranica 3', 3, 'asd')
tefter.addText('tova e proben tekst za stranica 1', 1, 'asd')
tefter.addText('tova e proben tekst za stranica 2', 2, 'asd')
tefter.addText('tova e proben tekst za stranica 2', 2, 'asd')
tefter.addText('tova e proben tekst za stranica 3', 3, 'asd')
tefter.viewPage(2, 'asd');



tefter.searchWord('tova', 1, 'asd')
tefter.printAllPagesWithDigits('asd')