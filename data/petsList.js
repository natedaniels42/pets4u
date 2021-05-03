const mongoose = require('mongoose');
const db = require('../models');
require('dotenv').config();

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
        petType: 'Lizard',
        breedSpecies: 'Panther Chameleon',
        neutered: false,
        description: 'no description provided',
    },
    {
        name: 'Sasha',
        image: 'https://www.pets4homes.co.uk/images/classifieds/2019/02/07/2204719/thumbs/female-red-tegu-5c5c423bdb97f.jpg',
        location: 'Pittsburgh, Pennsylvania',
        sex: 'Female',
        age: {
            ageNumber: 2,
            ageLength: 'years'
        },
        petType: 'Lizard',
        breedSpecies: 'Tegu',
        neutered: false,
        description: 'no description provided',
    },
    {
        name: 'Pete',
        image: 'https://www.thesprucepets.com/thmb/C014iJTq93c6zV2VqBkQpcO3BbE=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/200396918-001-56a2bcf55f9b58b7d0cdf8c8.jpg',
        location: 'Fairfax, Virginia',
        sex: 'Male',
        age: {
            ageNumber: 20,
            ageLength: 'years'
        },
        petType: 'Bird',
        breedSpecies: 'Macaw',
        neutered: false,
        description: 'no description provided',
    },
    {
        name: 'Birdy',
        image: 'https://i.redd.it/q61tpqh9fgy21.jpg',
        location: 'Baltimore, Maryland',
        sex: 'Female',
        age: {
            ageNumber: 10,
            ageLength: 'years'
        },
        petType: 'Bird',
        breedSpecies: 'Cockateal',
        neutered: false,
        description: 'no description provided',
    },
    {
        name: 'Nash',
        image: 'https://lafeber.com/pet-birds/wp-content/uploads/2018/06/Goffins-Cockatoo-300x300.jpg',
        location: 'Pittsburgh, Pennsylvania',
        sex: 'Male',
        age: {
            ageNumber: 8,
            ageLength: 'years'
        },
        petType: 'Bird',
        breedSpecies: 'Cockatoo',
        neutered: false,
        description: 'no description provided',
    },
    {
        name: 'Norman',
        image: 'https://lafeber.com/pet-birds/wp-content/uploads/2018/06/Poicephalus-Parrot.jpg',
        location: 'Annapolis, Maryland',
        sex: 'Male',
        age: {
            ageNumber: 5,
            ageLength: 'years'
        },
        petType: 'Bird',
        breedSpecies: 'Senegal Parrot',
        neutered: false,
        description: 'no description provided',
    },
    {
        name: 'Eugene',
        image: 'https://aikmanwildlife.com/wp-content/uploads/2019/12/Sulcata-Tortoise.jpg',
        location: 'Frederick, Maryland',
        sex: 'Male',
        age: {
            ageNumber: 30,
            ageLength: 'years'
        },
        petType: 'Tortoise',
        breedSpecies: 'Sulcata Tortoise',
        neutered: false,
        description: 'no description provided',
    },
    {
        name: 'Dewey',
        image: 'https://assets.petco.com/petco/image/upload/f_auto,q_auto/ferret-9?wid=260',
        location: 'Frederick, Maryland',
        sex: 'Female',
        age: {
            ageNumber: 3,
            ageLength: 'months'
        },
        petType: 'Small Mammal',
        breedSpecies: 'Ferret',
        neutered: false,
        description: 'no description provided',
    },
    {
        name: 'Frogbert',
        image: 'https://cdn.shopify.com/s/files/1/0056/4930/1573/products/800082_newalbinopacman_1800x1800.jpg?v=1548360265',
        location: 'Scranton, Pennsylvania',
        sex: 'Male',
        age: {
            ageNumber: 1,
            ageLength: 'years'
        },
        petType: 'Amphibian',
        breedSpecies: 'Pacman Frog',
        neutered: false,
        description: 'no description provided',
    },
    {
        name: 'Cynthia',
        image: 'https://i.imgur.com/DgUtM5M.jpg',
        location: 'Newark, Delaware',
        sex: 'Female',
        age: {
            ageNumber: 4,
            ageLength: 'years'
        },
        petType: 'Snake',
        breedSpecies: 'Western Hognose',
        neutered: false,
        description: 'no description provided',
    },
    {
        name: 'Cecil',
        image: 'https://i.pinimg.com/originals/2e/0d/ff/2e0dff31bde80a75748cc8f3ce485b8d.jpg',
        location: 'Dover, Delaware',
        sex: 'Female',
        age: {
            ageNumber: 6,
            ageLength: 'years'
        },
        petType: 'Snake',
        breedSpecies: 'Milksnake',
        neutered: false,
        description: 'no description provided',
    },
    {
        name: 'Sebastian',
        image: 'https://i.pinimg.com/originals/71/51/48/715148cdc85a6ddf7a2616a2b5bb10b9.jpg',
        location: 'Dover, Delaware',
        sex: 'Male',
        age: {
            ageNumber: 1,
            ageLength: 'years'
        },
        petType: 'Bird',
        breedSpecies: 'Zebra Finch',
        neutered: false,
        description: 'The best little bird. RIP.',
    },
    {
        name: 'Puppy',
        image: 'https://images.immediate.co.uk/production/volatile/sites/4/2020/03/GettyImages-1058304880-c-0b54061-scaled.jpg?quality=90&resize=768%2C574',
        location: 'Annapolis, Maryland',
        sex: 'Female',
        age: {
            ageNumber: 2,
            ageLength: 'years'
        },
        petType: 'Amphibian',
        breedSpecies: 'Oxalotl',
        neutered: false,
        description: 'The cutest little thing.',
    },
    {
        name: 'Lottie',
        image: 'https://reptilerapture.net/assets/images/bandit-stripe-carrot-tail-f-leopard-gecko-2.jpg',
        location: 'Scranton, Pennsylvania',
        sex: 'Female',
        age: {
            ageNumber: 2,
            ageLength: 'years'
        },
        petType: 'Lizard',
        breedSpecies: 'Leopard Gecko',
        neutered: false,
        description: 'The cutest little thing.',
    },
    {
        name: 'Chico',
        image: 'https://www.thesprucepets.com/thmb/Q6H15IZlf_E13PCveNUERaQ6M44=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-587193483-569be0753df78cafda975df6-5c416d9e46e0fb000194b5e7.jpg',
        location: 'Newark, Delaware',
        sex: 'Male',
        age: {
            ageNumber: 8,
            ageLength: 'years'
        },
        petType: 'Turtle',
        breedSpecies: 'Red-Eared Slider',
        neutered: false,
        description: 'no description provided',
    },
    {
        name: 'Manny',
        image: 'https://aikmanwildlife.com/wp-content/uploads/2019/12/Sugar-Glider.jpg',
        location: 'Lorton, Virginia',
        sex: 'Male',
        age: {
            ageNumber: 6,
            ageLength: 'months'
        },
        petType: 'Small Mammal',
        breedSpecies: 'Sugar Glider',
        neutered: false,
        description: 'no description provided',
    },
    {
        name: 'Mya',
        image: 'https://vetstreet.brightspotcdn.com/dims4/default/672a3a0/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fc2%2Fdb2530a35e11e087a80050568d634f%2Ffile%2FCane-Corso-2-645mk062411.jpg',
        location: 'Fairfax, Virginia',
        sex: 'Female',
        age: {
            ageNumber: 6,
            ageLength: 'years'
        },
        petType: 'Dog',
        breedSpecies: 'Cane Corso',
        neutered: true,
        description: 'The goodest girl',
    },
    {
        name: 'Gus',
        image: 'https://scng-dash.digitalfirstmedia.com/wp-content/uploads/2018/02/0202_nws_ldn-l-pets-west-dog.jpg',
        location: 'Charlotte, North Carolina',
        sex: 'Male',
        age: {
            ageNumber: 3,
            ageLength: 'years'
        },
        petType: 'Dog',
        breedSpecies: 'Chihuahua Mix',
        neutered: true,
        description: 'no description provided',
    },
    {
        name: 'Moogle',
        image: 'https://static-12.sinclairstoryline.com/resources/media/1c68af80-d23c-4511-abc1-c85707f01cdb-smallScale_2V7A9020.JPG',
        location: 'Raleigh, North Carolina',
        sex: 'Male',
        age: {
            ageNumber: 5,
            ageLength: 'years'
        },
        petType: 'Dog',
        breedSpecies: 'Pembroke Welsh Corgi',
        neutered: false,
        description: 'no description provided',
    },
    {
        name: 'Beau',
        image: 'https://www.dogbreedinfo.com/images32/MiniatureMiniGoldendoodleBentley6MonthsOld45pounds2.jpg',
        location: 'Asheville, North Carolina',
        sex: 'Male',
        age: {
            ageNumber: 3,
            ageLength: 'years'
        },
        petType: 'Dog',
        breedSpecies: 'Goldendoodle',
        neutered: true,
        description: 'no description provided',
    },
    {
        name: 'Rasta',
        image: 'https://i.pinimg.com/originals/fd/0d/c8/fd0dc8afe413fbc3e3692b5a4528bc70.jpg',
        location: 'Fredricksburg, Virginia',
        sex: 'Female',
        age: {
            ageNumber: 2,
            ageLength: 'years'
        },
        petType: 'Dog',
        breedSpecies: 'Siberian Husky',
        neutered: true,
        description: 'no description provided',
    },
    {
        name: 'Oliver',
        image: 'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=1fdekAh2',
        location: 'Baltimore, Maryland',
        sex: 'Male',
        age: {
            ageNumber: 4,
            ageLength: 'months'
        },
        petType: 'Cat',
        breedSpecies: 'Domestic Shorthair',
        neutered: false,
        description: 'no description provided',
    },
    {
        name: 'Diablo',
        image: 'https://vetstreet-brightspot.s3.amazonaws.com/dd/2ecc90a33911e087a80050568d634f/file/Egyptian-Mau-2-645mk062211.jpg',
        location: 'Annapolis, Maryland',
        sex: 'Male',
        age: {
            ageNumber: 7,
            ageLength: 'years'
        },
        petType: 'Cat',
        breedSpecies: 'Egyptian Mau',
        neutered: true,
        description: 'no description provided',
    },
    {
        name: 'Sasha',
        image: 'https://vetstreet.brightspotcdn.com/dims4/default/36fb383/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fa0%2F495a20a33911e087a80050568d634f%2Ffile%2FDevon-Rex-3-645mk062211.jpg',
        location: 'Frederick, Maryland',
        sex: 'Female',
        age: {
            ageNumber: 7,
            ageLength: 'months'
        },
        petType: 'Cat',
        breedSpecies: 'Devon Rex',
        neutered: true,
        description: 'no description provided',
    },
    {
        name: 'Lia',
        image: 'https://www.pets4homes.co.uk/images/breeds/36/large/70abb5777e1155bf0eeb26abb0b4b170.jpg',
        location: 'Pittsburgh, Pennsylvania',
        sex: 'Female',
        age: {
            ageNumber: 3,
            ageLength: 'years'
        },
        petType: 'Cat',
        breedSpecies: 'Cornish Rex',
        neutered: true,
        description: 'no description provided',
    },
    {
        name: 'Liam',
        image: 'https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/turkish-angora-detail.jpg?bust=1535567220&width=355',
        location: 'Scranton, Pennsylvania',
        sex: 'Male',
        age: {
            ageNumber: 3,
            ageLength: 'years'
        },
        petType: 'Cat',
        breedSpecies: 'Turkish Angora',
        neutered: true,
        description: 'no description provided',
    },
    {
        name: 'Quinn',
        image: 'https://catzone-tcwebsites.netdna-ssl.com/wp-content/uploads/2020/02/calico-cat-names-7.jpg',
        location: 'Newark, Delaware',
        sex: 'Female',
        age: {
            ageNumber: 4,
            ageLength: 'years'
        },
        petType: 'Cat',
        breedSpecies: 'Domestic Shorthair',
        neutered: true,
        description: 'no description provided',
    },
    {
        name: 'Hunter',
        image: 'https://www.vieravet.com/sites/default/files/styles/large/adaptive-image/public/golden-retriever-dog-breed-info.jpg?itok=LCRMRkum',
        location: 'Dover, Delaware',
        sex: 'Male',
        age: {
            ageNumber: 6,
            ageLength: 'years'
        },
        petType: 'Dog',
        breedSpecies: 'Golden Retriever',
        neutered: true,
        description: 'no description provided',
    },
    {
        name: 'Optimus',
        image: 'https://i.guim.co.uk/img/media/236eba5d79f2fbc2f883673b00b437319284bf72/0_326_5056_3033/master/5056.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=ac90ba613e0bb01a84f00ab7ab6f290c',
        location: 'Wilmington, Delaware',
        sex: 'Male',
        age: {
            ageNumber: 4,
            ageLength: 'years'
        },
        petType: 'Dog',
        breedSpecies: 'Greyhound',
        neutered: true,
        description: 'no description provided',
    },
    {
        name: 'Daisy',
        image: 'https://cdn.akc.org/content/hero/chow_chow_bod_hero.jpg',
        location: 'Charlotte, North Carolina',
        sex: 'Male',
        age: {
            ageNumber: 6,
            ageLength: 'months'
        },
        petType: 'Dog',
        breedSpecies: 'Chow Chow',
        neutered: false,
        description: 'no description provided',
    },
    {
        name: 'Rico',
        image: 'https://thehappypuppysite.com/wp-content/uploads/2019/03/Maltese-Lifespan-long.jpg',
        location: 'Raleigh, North Carolina',
        sex: 'Male',
        age: {
            ageNumber: 4,
            ageLength: 'months'
        },
        petType: 'Dog',
        breedSpecies: 'Maltese',
        neutered: false,
        description: 'no description provided',
    },
    {
        name: 'Zulu',
        image: 'https://cdn2-www.dogtime.com/assets/uploads/gallery/shih-tzu-dog-breed-pictures/shih-tzu-breed-picture-1.jpg',
        location: 'Asheville, North Carolina',
        sex: 'Male',
        age: {
            ageNumber: 4,
            ageLength: 'years'
        },
        petType: 'Dog',
        breedSpecies: 'Shih Tzu',
        neutered: false,
        description: 'no description provided',
    },
    {
        name: 'Montoya',
        image: 'https://cdn3-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg',
        location: 'Fairfax, Virginia',
        sex: 'Male',
        age: {
            ageNumber: 6,
            ageLength: 'years'
        },
        petType: 'Dog',
        breedSpecies: 'German Shepherd',
        neutered: true,
        description: 'no description provided',
    },
    {
        name: 'Mina',
        image: 'https://vetstreet.brightspotcdn.com/dims4/default/016b763/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fde%2F7def60a7fb11e0a0d50050568d634f%2Ffile%2FRottweiler-5-645mk062811.jpg',
        location: 'Fredricksburg, Virginia',
        sex: 'Female',
        age: {
            ageNumber: 4,
            ageLength: 'years'
        },
        petType: 'Dog',
        breedSpecies: 'Rottweiler',
        neutered: true,
        description: 'no description provided',
    },
    {
        name: 'Butterfly',
        image: 'https://www.petplace.com/static/d4eb1d31d9e22d830a0097e3e8dcdf3d/0979f/AdobeStock_142438416.jpg',
        location: 'Baltimore, Maryland',
        sex: 'Female',
        age: {
            ageNumber: 3,
            ageLength: 'years'
        },
        petType: 'Dog',
        breedSpecies: 'Doberman',
        neutered: true,
        description: 'no description provided',
    },
    {
        name: 'Lady Anne of Buckingham Palace',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Scottish_Terrier_Photo_of_Face.jpg/220px-Scottish_Terrier_Photo_of_Face.jpg',
        location: 'Annapolis, Maryland',
        sex: 'Female',
        age: {
            ageNumber: 2,
            ageLength: 'years'
        },
        petType: 'Dog',
        breedSpecies: 'Scottish Terrier',
        neutered: true,
        description: 'no description provided',
    },
    {
        name: 'Charlie',
        image: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/30142244/West-Highland-White-Terrier-laying-down-in-the-grass.jpg',
        location: 'Frederick, Maryland',
        sex: 'Male',
        age: {
            ageNumber: 8,
            ageLength: 'months'
        },
        petType: 'Dog',
        breedSpecies: 'West Highland White Terrier',
        neutered: true,
        description: 'no description provided',
    },
    {
        name: 'Weenie',
        image: 'https://i1.wp.com/www.ilovedachshunds.com/wp-content/uploads/2019/09/dachshund-miniature-or-standard-1.jpg?fit=1500%2C1000&ssl=1',
        location: 'Pittsburgh, Pennsylvania',
        sex: 'Male',
        age: {
            ageNumber: 3,
            ageLength: 'years'
        },
        petType: 'Dog',
        breedSpecies: 'Dachshund',
        neutered: true,
        description: 'no description provided',
    },
    {
        name: 'Dixie',
        image: 'https://www.allthingsdogs.com/wp-content/uploads/2019/07/Chocolate-Lab-Names-Feature.jpg',
        location: 'Scranton, Pennsylvania',
        sex: 'Female',
        age: {
            ageNumber: 5,
            ageLength: 'years'
        },
        petType: 'Dog',
        breedSpecies: 'Labrador Retriever',
        neutered: true,
        description: 'no description provided',
    },
    {
        name: 'Scooter',
        image: 'https://i.pinimg.com/originals/87/b8/9b/87b89b0cb96d530d0baacc330d89c613.jpg',
        location: 'Newark, Delaware',
        sex: 'Male',
        age: {
            ageNumber: 10,
            ageLength: 'years'
        },
        petType: 'Dog',
        breedSpecies: 'Shepherd Mix',
        neutered: true,
        description: 'no description provided',
    },
    {
        name: 'Pookie',
        image: 'http://barknbubblesoffairfax.com/wp-content/uploads/2016/12/photo-1.jpg',
        location: 'Wilmington, Delaware',
        sex: 'Female',
        age: {
            ageNumber: 7,
            ageLength: 'years'
        },
        petType: 'Dog',
        breedSpecies: 'Terrier Mix',
        neutered: true,
        description: 'no description provided',
    },
    {
        name: 'Stitch',
        image: 'http://barknbubblesoffairfax.com/wp-content/uploads/2016/12/20170113_172116.jpg',
        location: 'Charlotte, North Carolina',
        sex: 'Male',
        age: {
            ageNumber: 3,
            ageLength: 'years'
        },
        petType: 'Dog',
        breedSpecies: 'Shiba Inu',
        neutered: true,
        description: 'no description provided',
    },
    {
        name: 'Archie',
        image: 'http://barknbubblesoffairfax.com/wp-content/uploads/2016/12/Archie.jpg',
        location: 'Raleigh, North Carolina',
        sex: 'Male',
        age: {
            ageNumber: 5,
            ageLength: 'years'
        },
        petType: 'Dog',
        breedSpecies: 'Wheaten Terrier',
        neutered: true,
        description: 'no description provided',
    },
    {
        name: 'Collette',
        image: 'http://barknbubblesoffairfax.com/wp-content/uploads/2016/12/20160904_111721.jpg',
        location: 'Asheville, North Carolina',
        sex: 'Female',
        age: {
            ageNumber: 5,
            ageLength: 'years'
        },
        petType: 'Dog',
        breedSpecies: 'Papillon',
        neutered: true,
        description: 'no description provided',
    }
];

//Seed pets
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
