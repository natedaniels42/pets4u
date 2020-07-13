const db = require('../models');

const locationsList = [
    {
        state: 'Virginia',
        city: [
            {
                cityName: 'Fairfax',
            },
            {
                cityName: 'Lorton',
            },
            {
                cityName: 'Fredricksburg',
            },
        ],
    }
];

db.Location.deleteMany({}, (err, result) => {
    if (err) {
        console.log(err);
        process.exit();
    }
    console.log(`Deleted ${result.deletedCount} recipes.`);

    console.log('Deleting all reviews');
    db.Review.deleteMany({}, (err, result) => {
        if (err) {
            console.log(err);
            process.exit();
        };
        console.log(`Deleted ${result.deletedCount} reviews.`);

        db.User.deleteMany({}, (err, result) => {
            if (err) {
                console.log(err);
                process.exit();
            };
            console.log(`Deleted ${result.deletedCount} users.`);

            db.User.create(users, (err, newUsers) => {
                if (err) {
                    console.log(err);
                    process.exit();
                }
                console.log(`Created ${newUsers.length} users.`);

                console.log("Creating new recipes.");
                db.Recipe.create(recipes, (err, newRecipes) => {
                    if (err) {
                        console.log(err);
                        process.exit();
                    } 
                    console.log(`Created ${newRecipes.length} recipes.`);
                    process.exit();
                });
            });
        });
    });
});
    // {
    //     city: 'Fairfax',
    //     state: 'VA'
    // },
    // {
    //     city: 'Lorton',
    //     state: 'VA'
    // },
    // {
    //     city: 'Fredricksburg',
    //     state: 'VA'
    // },
    // {
    //     city: 'Baltimore',
    //     state: 'MD'
    // },
    // {
    //     city: 'Annapolis',
    //     state: 'MD'
    // },
    // {
    //     city: 'Fredrick',
    //     state: 'MD'
    // },
    // {
    //     city: 'Philadelphia',
    //     state: 'PA'
    // },
    // {
    //     city: 'Pittsburg',
    //     state: 'PA'
    // },
    // {
    //     city: 'Scranton',
    //     state: 'PA'
    // },
    // {
    //     city: 'Newark',
    //     state: 'DE'
    // },
    // {
    //     city: 'Dover',
    //     state: 'DE'
    // },
    // {
    //     city: 'Wilmington',
    //     state: 'DE'
    // },
    // {
    //     city: 'Charlotte',
    //     state: 'NC'
    // },
    // {
    //     city: 'Raleigh',
    //     state: 'NC'
    // },
    // {
    //     city: 'Asheville',
    //     state: 'NC'
    // },
// ];

module.exports = locationsList;