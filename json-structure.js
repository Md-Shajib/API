// JavaScirpt Object Notation

const Student = {
    name: "Md Shajib",
    email: "shajib2999@gmail.com",
    dept: "CSE",
    university: "BSMRSTU",
    Address: {
        district: "Satkhira",
        thana: "Kalaroa",
        post: "Kamarali",
        village: "Paikpara",
    },

};

const myJson = JSON.stringify(Student); // For create a json with object
console.log(myJson);

const myObject = JSON.parse(myJson); // For convert json (String) to object
console.log(myObject);