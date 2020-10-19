class Statement {
    constructor(title, contactPersonName, contactPersonNumber, address, description, pet, price, image) {
        this.image = image;
        this.title = title;
        this.contactPersonName = contactPersonName;
        this.contactPersonNumber = contactPersonNumber;
        this.address = address;
        this.description = description;
        this.pet = pet;
        this.price = price;
    }
}

class Pet {
    constructor(category, age, gender) {
        this.category = category;
        this.age = age;
        this.gender = gender;
    }
}

class Cat extends Pet {
    constructor(category, age, gender, toiletFriendly) {
        super(category, age, gender);
        this.toiletFriendly = toiletFriendly;
    }
}

const petList = document.querySelector('.pet-list');

const statement1 = new Statement('ჩუქდება თეთრი კნუტი, 1 თვის', 'ლუკა', '599931926', 'თბილისი', 'არის ძალიან საყვარელი', null, 0, 'https://envato-shoebox-0.imgix.net/2d04/0e8a-f427-11e1-952c-842b2b692e1a/2100817-001.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=1110052f8c6d4715316ccbdd8eaad0fb');
const statement2 = new Statement('ჩუქდება თეთრი კნუტი, 1 თვის', 'ლუკა', 'dwad', 'თბილისი', 'არის ძალიან საყვარელი', null, 0, 'https://envato-shoebox-0.imgix.net/2d04/0e8a-f427-11e1-952c-842b2b692e1a/2100817-001.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=1110052f8c6d4715316ccbdd8eaad0fb');

const appendStatement = (param) => {
    const statementTemplate = `
    <div class="statement">
                <p class="statement-title">${param.title}</p>
                <img class="statement-img" src=${param.image} alt="">
                <p class="description">${param.description}</p>
                <p class="author-info">ავტორის სახელი: ${param.contactPersonName}</p>
                <p class="author-info">საკონტაქტო ნომერი: ${param.contactPersonNumber}</p>
    </div>`;
    petList.innerHTML += statementTemplate;
}

// appendStatement(statement1);
// შევქმნათ განცხადებების მასივი, შევმქნათ ფუნქცია, რომელიც ციკლით გადაუყვება ამ მასივს და დახატავს ყველა განცხადებას




const ArrayGancxadeba = [statement1, statement2]
function gancxadeba(ArrayGancxadeba) {
    for (let i = 0; i < ArrayGancxadeba.length; i++) {
        const element = ArrayGancxadeba[i];

        appendStatement(element);
    }

}
gancxadeba(ArrayGancxadeba);

