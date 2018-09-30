function CatalogClothesPrototype(shop, brand, type, gender) {
    this.shop = shop;
    this.brand = brand;
        this.gender = gender;
        this.type = type;
};

CatalogClothesPrototype.prototype.welcome = function welcome() {
    console.log(`Hello. You are in ${this.type}`);
};


function SeasondSportClothesPrototype(shop, brand, type, gender, season) {
    CatalogClothesPrototype.call(this, shop, brand, type, gender);
    this.season = season;
}

SeasondSportClothesPrototype.prototype = Object.create(CatalogClothesPrototype.prototype);
SeasondSportClothesPrototype.prototype.constructor = SeasondSportClothesPrototype;

SeasondSportClothesPrototype.prototype.welcome = function() {
    console.log('Hello. You are in '  + this.season + ' sport clothes catalog.');
};

function SportClothesPrototype(shop, brand, type, gender,season, sportType) {
    SeasondSportClothesPrototype.call(this, shop, brand, type, gender, season,);
    this.sportType = sportType;
}

SportClothesPrototype.prototype = Object.create(SeasondSportClothesPrototype.prototype);
SportClothesPrototype.prototype.constructor = SportClothesPrototype;

SportClothesPrototype.prototype.welcome = function() {
    console.log('Hello. You are in  '  + this.sportType + '  clothes catalog ' + this.shop + '.');
};




sport = new SportClothesPrototype('akropolis','roxy', 'casual','female','winter','ski');

sport.welcome();

season = new SeasondSportClothesPrototype('akropolis','roxy', 'casual','female', 'winter');

season.welcome();
