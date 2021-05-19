//json Object => java script object notation
//json data is in key & value pair
//syntax => {}
var obj = {
    fname: "Sumit",
    "lname": 'Raokhande',
    id: 9
};
//it has 2 ways
//1 using dot operator
// 2 using square bracket
//1 Using dot operator
// console.log(`
// --------------------------------
//     First Name :: ${obj.fname}
//     Last Name :: ${obj.lname}
//     Id         :: ${obj.id}
// `);
//2 Using Square Operator
// console.log(`
//     First Name :: ${obj["fname"]}
//     Last Name  :: ${obj['lname']}
//     ID         :: ${obj["id"]}
// `);
// Array of Object
var arrobj = [
    {
        fname: "Sumit",
        "lname": 'Raokhande',
        id: 9,
        month: ['jan', 'feb', 'March'],
        description: {
            specification: 'Good',
            config: 'abc',
            quality: 'Avg.'
        }
    },
    {
        fname: "Kiran",
        "lname": 'Raokhande',
        id: 6,
        month: ['jan', 'feb', 'March'],
        description: {
            specification: 'Good',
            config: 'abc',
            quality: 'Avg.'
        }
    },
    {
        fname: "Spruha",
        "lname": 'Raokhande',
        id: 3,
        month: ['jan', 'feb', 'March'],
        description: {
            specification: 'Good',
            config: 'abc',
            quality: 'Avg.'
        }
    }
];
// console.log(`
// ----------Array of Object--------------
//     First Name :: ${arrobj[1].fname}
//     Last Name :: ${arrobj[1].lname}
//     id        :: ${arrobj[1].id}
// `);
for (var i = 0; i < arrobj.length; i++) {
    console.log("\n    ----------Array of Object--------------\n        First Name :: " + arrobj[i].fname + "\n        Last Name :: " + arrobj[i].lname + "\n        id        :: " + arrobj[i].id + "\n        Month     :: " + arrobj[i].month + "\n        ---------------------------------\n        Description\n                Specification:: " + arrobj[i].description.specification + "\n                Configuration:: " + arrobj[i].description.config + "\n                Quality:: " + arrobj[i].description.quality + "\n    ");
}
