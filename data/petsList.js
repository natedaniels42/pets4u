const mongoose = require('mongoose');
const db = require('../models');


const petList = [
    {
        name: 'Toby',
        image: 'https://www.thesprucepets.com/thmb/h-1donXJH4OQv7XQjck1tsmD8Kk=/1885x1414/smart/filters:no_upscale()/Boxer-GettyImages-463043655-91a77226f5884b41915d50811e4e4e2b.jpg',
        location: 'Fairfax, Virginia',
        sex: 'Male',
        age: {
            ageNumber: 2, 
            ageLength: 'years',
        },
        petType: 'Dog',
        breedSpecies: 'Boxer',
        neutered: true,
        description: 'Toby is a wonderful gentle giant with energy to spare. He is great with kids and adults alike. Good with cats and other dogs as well. He is housebroken and knows some basic commands. He is up to date on his bordatella and rabies vaccines.'
    },
    {
        name: 'Squire',
        image: 'https://cdn3-www.dogtime.com/assets/uploads/gallery/pit-bull-dog-breed-pictures/pit-bull-dog-breed-picture-1.jpg',
        location: 'Lorton, Virginia',
        sex: 'Male',
        age: {
            ageNumber: 7,
            ageLength: 'years'
        } ,
        petType: 'Dog',
        breedSpecies: 'Pit Bull',
        neutered: true,
        description: `Squire is everybody's best friend! He loves dogs, cats, birds, you name it! His favorite game is tag. He is very energetic and would do well in an active household. He is housebroken. He is up to date on his bordatella and rabies vaccines.`
    },
    {
        name: 'Sera',
        image: 'https://brooklinelabrescue.org/dev/wp-content/uploads/2017/12/20171006_105829-e1512917288855.jpg',
        location: 'Fredricksburg, Virginia',
        sex: 'Female',
        age: {
            ageNumber: 3,
            ageLength: 'years'
        },
        petType: 'Dog',
        breedSpecies: 'Lab Mix',
        neutered: true,
        description: `Sera is a wonderful girl with a sweet disposition. She was rescued from a hoarding situation and is still working on her social skills. She is a bit nervous and would do best in a quiet household where she is the only dog. She is up to date on her bordatella and rabies vaccines.`
    },
    {
        name: 'Sophie',
        image: 'https://images.squarespace-cdn.com/content/v1/52fffa92e4b01bd45db60c11/1401078888967-442U4GDSZ4D1YR11WXVW/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/image-asset.jpeg',
        location: 'Baltimore, Maryland',
        sex: 'Female',
        age: {
            ageNumber: 2,
            ageLength: 'months'
        },
        petType: 'Dog',
        breedSpecies: 'Cavalier King Charles Spaniel',
        neutered: false,
        description: `Sophie is an adorable bundle of joy who loves naps and cuddles. Being so young, she would do well in a household with older children and other dog-friendly pets. She is not yet housebroken and will need to finish her vaccination schedule.`
    },
    {
        name: 'Ra',
        image: 'https://vetstreet.brightspotcdn.com/dims4/default/ee6ccde/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F5b%2F52%2F49deed4f440ea965d0ff16fca655%2Fgreat-dane-AP-PFYPXJ-645sm12913.jpg',
        location: 'Annapolis, Maryland',
        sex: 'Male',
        age: {
            ageNumber: 2,
            ageLength: 'years'
        },
        petType: 'Dog',
        breedSpecies: 'Great Dane',
        neutered: true,
        description: 'no description provided',
    },
    {
        name: 'George',
        image: 'https://thedogdigest.com/wp-content/uploads/2019/03/53892638_2048436562123135_3163416495338041894_n-819x1024.jpg',
        location: 'Fredrick, Maryland',
        sex: 'Male',
        age: {
            ageNumber: 5,
            ageLength: 'years'
        },
        petType: 'Dog',
        breedSpecies: 'Lab Mix',
        neutered: true,
        description: 'no description provided',
    },
    {
        name: 'Henry',
        image: 'https://s3.amazonaws.com/petcentral.com/wp-content/uploads/2020/03/27160052/english-bulldog-1.jpg',
        location: 'Philadelphia, Pennsylvania',
        sex: 'Male',
        age: {
            ageNumber: 4,
            ageLength: 'years'
        },
        petType: 'Dog',
        breedSpecies: 'English Bulldog',
        neutered: true,
        description: 'no description provided',
    },
    {
        name: 'Sheila',
        image: 'https://static01.nyt.com/images/2020/02/11/multimedia/11xp-pitbull/11xp-pitbull-mobileMasterAt3x.jpg',
        location: 'Pittsburg, Pennsylvania',
        sex: 'Female',
        age: {
            ageNumber: 2,
            ageLength: 'years'
        },
        petType: 'Dog',
        breedSpecies: 'Pit Bull',
        neutered: false,
        description: 'no description provided',
    },
    {
        name: 'Macie',
        image: 'https://anewchancear.org/wp-content/uploads/2019/11/Charlie_1e.jpg',
        location: 'Scranton, Pennsylvania',
        sex: 'Female',
        age: {
            ageNumber: 1,
            ageLength: 'years'
        },
        petType: 'Dog',
        breedSpecies: 'Lab Mix',
        neutered: true,
        description: 'no description provided',
    },
    {
        name: 'Mr. Mouse',
        image: 'https://www.aspcapetinsurance.com/media/2242/8-tips-to-prevent-kidney-disease-in-cats.jpg',
        location: 'Newark, Delaware',
        sex: 'Male',
        age: {
            ageNumber: 2, 
            ageLength: 'years'
        },
        petType: 'Cat',
        breedSpecies: 'Domestic Shorthair',
        neutered: true,
        description: 'no description provided',
    },
    {
        name: 'Sophie',
        image: 'https://www.catster.com/wp-content/uploads/2018/01/Ragdoll-cat-on-blue-backdrop-.jpg',
        location: 'Dover, Delaware',
        sex: 'Female',
        age: {
            ageNumber: 3,
            ageLength: 'years'
        },
        petType: 'Cat',
        breedSpecies: 'Ragdoll',
        neutered: true,
        description: 'no description provided',
    },
    {
        name: 'Tiger',
        image: 'https://www.petassure.com/petassure/file-streams/page/gyyyeLBsy9JBzjL7K01SFQ0rare-cat-breed-the-scottish-fold.jpg.jpg',
        location: 'Wilmington, Delaware',
        sex: 'Male',
        age: {
            ageNumber: 5,
            ageLength: 'years'
        },
        petType: 'Cat',
        breedSpecies: 'Scottish Fold',
        neutered: true,
        description: 'no description provided',
    },
    {
        name: 'Richard',
        image: 'https://images1.americanlisted.com/nlarge/domestic-short-hair-jubilee-medium-adult-male---cat-americanlisted_34271955.jpg',
        location: 'Charlotte, North Carolina',
        sex: 'Male',
        age: {
            ageNumber: 1,
            ageLength: 'years'
        },
        petType: 'Cat',
        breedSpecies: 'Domestic Shorthair',
        neutered: false,
        description: 'no description provided',
    },
    {
        name: 'Pony',
        image: 'https://i.pinimg.com/564x/10/8f/bd/108fbdf33da4059495b47f9e0dad8362.jpg',
        location: 'Raleigh, North Carolina',
        sex: 'Male',
        age: {
            ageNumber: 8,
            ageLength: 'years'
        },
        petType: 'Dog',
        breedSpecies: 'Lab Mix',
        neutered: true,
        description: 'no description provided',
    },
    {
        name: 'Whiskers',
        image: 'https://www.pets4homes.co.uk/images/classifieds/2018/07/09/1982667/thumbs/for-sale-3-year-old-gccf-registered-female-ragdoll-5b43897057a2a.jpg',
        location: 'Asheville, North Carolina',
        sex: 'Male',
        age: {
            ageNumber: 3,
            ageLength: 'years'
        },
        petType: 'Cat',
        breedSpecies: 'Ragdoll',
        neutered: true,
        description: 'no description provided',
    },
    {
        name: 'Pawpaw',
        image: 'https://www.ccspca.com/wp-content/uploads/2013/11/Jasmine-21381989.jpg',
        location: 'Asheville, North Carolina',
        sex: 'Male',
        age: {
            ageNumber: 5,
            ageLength: 'years'
        },
        petType: 'Cat',
        breedSpecies: 'Siamese',
        neutered: true,
        description: 'no description provided',
    },
    {
        name: 'Marshall',
        image: 'https://registeredbengals.com/uploads/3/4/9/2/34928118/screen-shot-2019-06-01-at-10-01-37_orig.png',
        location: 'Raleigh, North Carolina',
        sex: 'Male',
        age: {
            ageNumber: 10,
            ageLength: 'years'
        },
        petType: 'Cat',
        breedSpecies: 'Bengal',
        neutered: false,
        description: 'no description provided',
    },
    {
        name: 'Lobo',
        image: 'https://trupanion.com/-/media/trupanion/images/breed--guide--new/bengal/bengal-cat.jpg?la=en&hash=6BF0EEDC7DDCDDE7C9184D44BA9B2920F345BFA2',
        location: 'Charlotte, North Carolina',
        sex: 'Male',
        age: {
            ageNumber: 6,
            ageLength: 'years'
        },
        petType: 'Cat',
        breedSpecies: 'Bengal',
        neutered: true,
        description: 'no description provided',
    },
    {
        name: 'Rasha',
        image: 'https://bloximages.newyork1.vip.townnews.com/lancasteronline.com/content/tncms/assets/v3/editorial/9/ac/9ac366e8-1d9b-11e8-9de3-6bbcedf2a27f/5a987776af084.hires.jpg',
        location: 'Wilmington, Delaware',
        sex: 'Male',
        age: {
            ageNumber: 8,
            ageLength: 'years'
        },
        petType: 'Cat',
        breedSpecies: 'Domestic Shorthair',
        neutered: true,
        description: 'no description provided',
    },
    {
        name: 'Raja',
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Ball_python_lucy.JPG',
        location: 'Lorton, Virginia',
        sex: 'Male',
        age: {
            ageNumber: 2,
            ageLength: 'years'
        },
        petType: 'Snake',
        breedSpecies: 'Ball Python',
        neutered: false,
        description: 'no description provided',
    },
    {
        name: 'Fluffy',
        image: 'https://chameleonacademy.com/wp-content/uploads/2019/09/ambilobe-panther-chameleon-121-540x540.jpg',
        location: 'Fredricksburg, Virginia',
        sex: 'Male',
        age: {
            ageNumber: 2,
            ageLength: 'years'
        },
        petType: 'Chameleon',
        breedSpecies: 'Panther Chameleon',
        neutered: false,
        description: 'no description provided',
    },
];

db.Pet.deleteMany({}, (err, deletedPets) => {
    if(err) console.log(err);
    
    db.Pet.create(petList, (err, createdPets) => {
        if(err) console.log(err);
    
        console.log(createdPets);
        process.exit();
    })
})    
//test
module.exports = petList;
