let person = {
  name: "Himanshu",
  address: {
    city: "Delhi",
    pincode: 110001
  },
  skills: ["JavaScript", "Node.js"]
};


let copy1 = { ...person };
copy1.address.city = "Mumbai";


let deepCopy = JSON.parse(JSON.stringify(person));

deepCopy.address.city = "Mumbai";
deepCopy.skills.push("React");

console.log("Original:", person);
console.log("Deep Copy:", deepCopy);
