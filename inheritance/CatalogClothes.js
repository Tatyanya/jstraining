class CatalogClothes {
    constructor(shop, brand, type, gender) {
        this.shop = shop;
        this.brand = brand;
        this.gender = gender;
        this.type = type;
    }

    welcome() {
        console.log(`Hello. You are in ${this.shop}`);
    };
}
class SeasonSportClothes extends CatalogClothes {
    constructor(shop, brand, type, gender, season) {
        super(shop, brand, type, gender);
        this.season = season;
    }

    welcome() {
        console.log('Hello. You are in '  + this.season + ' sport clothes catalog.');
    }

}

class SportClothes extends SeasonSportClothes {
    constructor(shop, brand, type, gender, season, sportType) {
        super(shop, brand, type, gender, season);
        this._sportType = sportType;
    }
    get sportType() {
        return this._sportType;
    }

    welcome() {
        console.log('Hello. You are in  '  + this._sportType + '  clothes catalog ' + this.shop + '.');
    }
    set sportType(newSportType) {
        this._sportType= newSportType;
    }

}



sport = new SportClothes('akropolis','roxy', 'casual','female','winter','ski');

sport.welcome();

season = new SeasonSportClothes('akropolis','roxy', 'casual','female', 'winter');

season.welcome();

