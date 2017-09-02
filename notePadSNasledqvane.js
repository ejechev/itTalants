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

function SecuredNotePad(parola, numberOfPages) {
    var password = parola;
    Notepad.call(this, numberOfPages)

    this.checkPass = function (parola) {
        if (password === parola) {
            return true;
        } else {
            return false;
        }
    }

}
SecuredNotePad.prototype = Object.create(Notepad.prototype);
SecuredNotePad.prototype.constructor = SecuredNotePad;

SecuredNotePad.prototype.addHeading = function (heading, pageNumber, parola) {
    if (this.checkPass(parola)) {
        Notepad.prototype.addHeading.call(this, heading, pageNumber)
    }
}
SecuredNotePad.prototype.addText = function (newText, pageNumber, parola) {
    if (this.checkPass(parola)) {
        Notepad.prototype.addText.call(this, newText, pageNumber)
    }
}
SecuredNotePad.prototype.deleteText = function (pageNumber, parola) {
    if (this.checkPass(parola)) {
        Notepad.prototype.deleteText.call(this, pageNumber)
    }
}
SecuredNotePad.prototype.viewPage = function (pageNumber, parola) {
    if (this.checkPass(parola)) {
        Notepad.prototype.viewPage.call(this, pageNumber)
    }
}
SecuredNotePad.prototype.viewAllPages = function (parola) {
    if (this.checkPass(parola)) {
        Notepad.prototype.viewAllPages.call(this)
    }
}
SecuredNotePad.prototype.searchWord = function (word, pageNumber, parola) {
    if (this.checkPass(parola)) {
        Notepad.prototype.searchWord.call(this, word, pageNumber)
    }
}
SecuredNotePad.prototype.printAllPagesWithDigits = function (parola) {
    if (this.checkPass(parola)) {
        Notepad.prototype.printAllPagesWithDigits.call(this)
    }
}


function ElectronicDevice() {
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
    SecuredNotePad.call(this, parola, stranici)

    this.startSystem = function () {
        electra.startNow()

    };
    this.stoptSystem = function () {
        electra.stop()
    };
    this.checkDevice = function() {
        return electra.isStarted
    } 
}
ElectronicSecuredNotePad.prototype = Object.create(SecuredNotePad.prototype);
ElectronicSecuredNotePad.prototype.constructor = ElectronicSecuredNotePad;


ElectronicSecuredNotePad.prototype.addHeading = function (heading, pageNumber, parola) {
    if (this.checkDevice() && this.checkPass(parola)) {
        Notepad.prototype.addHeading.call(this, heading, pageNumber)
    }
}
ElectronicSecuredNotePad.prototype.addText = function (newText, pageNumber, parola) {
    if (this.checkDevice() && this.checkPass(parola)) {
        Notepad.prototype.addText.call(this, newText, pageNumber)
    }
}
ElectronicSecuredNotePad.prototype.deleteText = function (pageNumber, parola) {
    if (this.checkDevice() && this.checkPass(parola)) {
        Notepad.prototype.deleteText.call(this, pageNumber)
    }
}
ElectronicSecuredNotePad.prototype.viewPage = function (pageNumber, parola) {
    if (this.checkDevice() && this.checkPass(parola)) {
        Notepad.prototype.viewPage.call(this, pageNumber)
    }
}
ElectronicSecuredNotePad.prototype.viewAllPages = function (parola) {
    if (this.checkDevice() && this.checkPass(parola)) {
        Notepad.prototype.viewAllPages.call(this)
    }
}
ElectronicSecuredNotePad.prototype.searchWord = function (word, pageNumber, parola) {
    if (this.checkDevice() && this.checkPass(parola)) {
        Notepad.prototype.searchWord.call(this, word, pageNumber)
    }
}
ElectronicSecuredNotePad.prototype.printAllPagesWithDigits = function (parola) {
    if (this.checkDevice() && this.checkPass(parola)) {
        Notepad.prototype.printAllPagesWithDigits.call(this)
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