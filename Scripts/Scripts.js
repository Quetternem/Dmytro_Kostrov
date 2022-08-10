
class Human {
    constructor(height, weight, name, date, gender, disability) {
        this.height = height;
        this.weight = weight;
        this.name = name;
        this.date = date;
        this.gender = gender;
        this.disability = !!disability;
    }

    sayHi () {
        console.log( `Hello, my name is ${this.name}`);
    }

    get getInfo () {
        const info = {
            height: this.height,
            weight: this.weight,
            name: this.name,
            date: this.date,
            gender: this.gender,
            disability: this.disability,
        }
        console.log(info);
    }

    set setNewName (name) {
        this.name = name;
    }

    set setNewDisability (disability) {
        this.disability = disability;
    }
}

const firstHuman = new Human(190,90, "Billy", new Date(1993,10,21),"male","have");
firstHuman.sayHi();
console.log(firstHuman);
firstHuman.getInfo;
firstHuman.setNewName = "Van";
firstHuman.setNewDisability = false;
console.log(firstHuman);


class frontendDeveloper extends Human {
    constructor(height, weight, name, date, gender, disability, careerStart, previousCompanies) {
        super(height, weight, name, date, gender, disability);
        this.careerStart = careerStart;
        this.previousCompanies =  [{
            start: new Date(2021, 10, 15),
            end: new Date(2022, 3, 15),
            salaryPerMonth: Number(4500),
            position: "senior",
            companyName: 'Oracle',
        },{
            start: new Date(2022, 4, 13),
            end: new Date(2022, 12, 25),
            salaryPerMonth: Number(5000),
            position: 'middle',
            companyName: 'Elcaro',
        } ];
    }

    get getInfo() {
        return super.getInfo;
    }

    sayHi2 () {
        console.log(`Привет, меня зовут ${this.name}, я Фронтенд разработчик. Работаю с ${this.careerStart}`);
    }

    allSalaryPerMonth () {
        let salaryInCompany;
        this.previousCompanies.forEach((num) => {
            let salaryYear = (num.end.getFullYear() - num.start.getFullYear()) * 12;
            let salaryMonth = salaryYear + (num.end.getMonth() - num.start.getMonth());
            salaryInCompany = num.salaryPerMonth * salaryMonth;
        })
        console.log(salaryInCompany, `salaryInCompany`);
    }

    nameCompany () {
        let companyName = prompt("Enter company name", "Oracle");
        this.previousCompanies.filter((num) => {
            if (num.companyName === companyName) {
                console.log(num);
            }
        });
    }

    setNewCompany (newCompany) {
        this.previousCompanies.push(newCompany);
        console.log(this.previousCompanies);
    }

}
const firstFrontendDeveloper = new frontendDeveloper(183,85,"Vasya",new Date(1999,12,1),"male",false, new Date(2021,5,14) );
console.log(firstFrontendDeveloper);
firstFrontendDeveloper.sayHi2();
firstFrontendDeveloper.allSalaryPerMonth();
firstFrontendDeveloper.nameCompany();
let newWork = {
    start: new Date(2021,6,10),
    end: new Date(2022,4,12),
    salaryPerMonth: 1700,
    position: 'junior',
    companyName: 'Carole',
}
firstFrontendDeveloper.setNewCompany(newWork);
firstFrontendDeveloper.getInfo;


class builder extends Human {
    constructor(height, weight, name, date, gender, disability,constructionSiteLocation, setOfTools,speed) {
        super(height, weight, name, date, gender, disability);
        this.constructionSiteLocation = constructionSiteLocation;
        this.setOfTools = setOfTools;
        this.speed = Number(speed);
    }

    get getInfo() {
        return super.getInfo;
    }

    buildinHouse() {
        let squareMeter = prompt("Enter square meters");
        let hoursOfWork = (this.speed * squareMeter) / 60;

        let day = 0;
        let week = 0;
        let month = 0;
        let year = 0;

        if (hoursOfWork < 24) {
            console.log(`На стройку уйдет ${hoursOfWork} часов !`);
        }else if (hoursOfWork >= 24 && hoursOfWork <= 168) {
            day = (hoursOfWork / 24).toString();

            hoursOfWork = day[2] || 0;

            console.log(`На стройку уйдет ${parseInt(day)} дней и ${hoursOfWork} часов!`);
        } else if (hoursOfWork >= 168 && hoursOfWOrk < 730) {
            week = (hoursOfWork / 168).toString();

            day = week[2];
            hoursOfWork = week[3];
            console.log(`На стройку уйдет ${parseInt(week)} недель, ${day} дней и ${hoursOfWork} часов!`);
        } else if ( hoursOfWork >= 730 && hoursOfWork < 8760) {
            month = (hoursOfWork / 730).toString();
            week = month[2];
            day = month[3];
            hoursOfWork = month[4];

            console.log(`На стройку уйдет ${parseInt(month)} месяцев, ${week} недель, ${day} дней и ${hoursOfWork} часов!`);
        } else  {
            year = (hoursOfWork / 8760).toString()
            month = year[2];
            week = year[3];
            day = year [4];
            hoursOfWork = year[5];
            console.log(`На стройку уйдет ${parseInt(year)} лет, ${month} месяцев, ${week} недель, ${day} дней и ${hoursOfWork} часов!`);
        }
    }
}

const firstBuilder = new builder(191,150,"Semen",new Date(1666,6,6), "male","have","Koko poko",["кирка", "топор"],35);
console.log(firstBuilder);
firstBuilder.buildinHouse();
firstBuilder.getInfo;