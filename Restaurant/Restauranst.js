function Restaurant(name) {
    this.name = name;
    this.waiters = [];
    this.cooks = [];
    this.predstavqne = function() {
        document.write(`<header class = "waiter" >`);
        document.write(`<h2> WELCOME TO ${name} </h2>`)
        document.write(`</header>`)
    } ();
}

Restaurant.prototype.addWaiter = function (waiter) {
    if (waiter.staj >= 10) {
        this.waiters.push(waiter)
        document.write(`<article class = "waiter" >`);
        document.write(`<p> Тук работи ${waiter.name} </p>`)
        document.write(`</article>`)
    } else {
        console.log('poraboti malko poveche')
    }
}

Restaurant.prototype.addCook = function (cook) {
    if (Object.getPrototypeOf(cook).constructor == Chef) {
        var imaLiGlaven = this.cooks.some(function (x) {
            return Object.getPrototypeOf(x).constructor == Chef
        })
        if (!imaLiGlaven) {
            this.cooks.push(cook)
        } else {
            console.log('Veche si imame glaven')
        }
    }
    if (Object.getPrototypeOf(cook).constructor == Salatadjiq) {
        var salati = this.cooks.filter(function (x) {
            return Object.getPrototypeOf(x).constructor == Salatadjiq
        })

        if (salati.length >= 5) {
            console.log('Imame si salatadjii')
        } else {
            this.cooks.push(cook)
        }
    }
    if (Object.getPrototypeOf(cook).constructor == Cook) {
        this.cooks.push(cook)
    }
}
Restaurant.prototype.order = function (what) {
    if (what) {
        var hrana = new Food('meso', 'http://media.muskuli.com/data/uploads/editor/images/fbc41153993390646d708b249b1a138d.jpg');
        do {
            var gotvach = this.cooks[Math.floor(Math.random() * this.cooks.length)]
        }
        while (Object.getPrototypeOf(gotvach).constructor == Salatadjiq)
        gotvach.cook(what)
    }
    if (!what) {
        var hrana = new Food('vegie','https://www.bonapeti.bg/video-files/vod/2017/04/20042017-7748.jpg');
        do {
            var gotvach = this.cooks[Math.floor(Math.random() * this.cooks.length)]
        }
        while (Object.getPrototypeOf(gotvach).constructor !== Salatadjiq)
        gotvach.reji();
        gotvach.cook(what);
    }
    
    var servitior = this.waiters[Math.floor(Math.random() * this.waiters.length)];
    servitior.nosi();
    document.write(`<article class = 'order' >`);
    document.write(`<p> ${gotvach.name} se pogriji da vi prigotvi ${hrana.type} </p>`);
    document.write(`<p> <img src = "${hrana.url}" eto q poruchkata donesena ot ${servitior.name} </p>`);
    document.write(`<p> Dovolno li pohapnahte <img src = "https://i.actualno.com/actualno_2013/upload/news/2012/07/27/0626550001380576831_395076_292x224.jpg" </p>`);
    document.write(`</article>`);
}

function Waiter(name, staj) {
    this.name = name;
    this.staj = staj;
}

Waiter.prototype.nosi = function () {
    console.log(this.name + ' Vi servira tazi vecher ' + ' Nosi ti tova qdene');
}

function Cook(name) {
    this.name = name
}

Cook.prototype.cook = function (what) {
    if (what) {
        console.log(this.name + ' ti prigotvi mesce')
    } else {
        console.log(this.name + ' Rupai taq treva')
    }
}

function Chef(name) {
    this.name = name;
}
Chef.prototype = Object.create(Cook.prototype);
Chef.prototype.constructor = Chef;

function Salatadjiq(name) {
    this.name = name;
}

Salatadjiq.prototype = Object.create(Cook.prototype);
Salatadjiq.prototype.constructor = Salatadjiq;

Salatadjiq.prototype.reji = function () {
    console.log('Narqzah tazi salata')
}
Salatadjiq.prototype.beli = function () {
    console.log('gotovi sa tez kartofi')
}

function Food(type, url) {
    this.type = type;
    this.url = url;
}

var resturanta = new Restaurant('Pri Milko');

var mishoWaiter = new Waiter('Misho', 11)
var peshoWaiter = new Waiter('PEsho', 9)
var ginkaWaiter = new Waiter('Ginka', 12)
var danchoWaiter = new Waiter('Dancho', 10)
resturanta.addWaiter(mishoWaiter);
resturanta.addWaiter(ginkaWaiter);
resturanta.addWaiter(peshoWaiter);
resturanta.addWaiter(danchoWaiter);

var bashmaistora = new Chef('Bai Milko');
var petkoCook = new Cook('Petko');
var vetkoCook = new Cook('Vetko');
var shetkoCook = new Cook('Shetko');
var metkoCook = new Cook('Metko');
var kokoSalati = new Salatadjiq('Koko');
var mokoSalati = new Salatadjiq('Moko');
var dokoSalati = new Salatadjiq('Doko');
var rokoSalati = new Salatadjiq('Roko');
var vokoSalati = new Salatadjiq('Voko');
var tokoSalati = new Salatadjiq('Toko');

resturanta.addCook(bashmaistora);
resturanta.addCook(petkoCook);
resturanta.addCook(vetkoCook);
resturanta.addCook(shetkoCook);
resturanta.addCook(metkoCook);
resturanta.addCook(kokoSalati);
resturanta.addCook(mokoSalati);
resturanta.addCook(dokoSalati);
resturanta.addCook(rokoSalati);
resturanta.addCook(vokoSalati);
resturanta.addCook(tokoSalati);

resturanta.order(true)

var resturanta = new Restaurant('Pri Gilko');


