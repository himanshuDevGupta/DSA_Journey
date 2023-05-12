 const users = [
    {
      id: 1,
      name: "Aman",
      city: "Pune",
    },
    {
      id: 2,
      name: "Rahul",
      city: "Delhi",
    },
    {
      id: 3,
      name: "Abhinav",
      city: "Dehradun",
    },
  ];

  const orders = [
    {
      orderId: 101,
      userId: 1,
      productName: "iPhone 12 Pro",
    },
    {
      orderId: 102,
      userId: 1,
      productName: "iPhone 13 Pro",
    },
    {
      orderId: 103,
      userId: 1,
      productName: "iPhone 14 Pro",
    },
    {
      orderId: 104,
      userId: 2,
      productName: "Samsung S23",
    },
  ];

//   const result = [
//     {
//       userId: 1,
//       name: "Aman",
//       orders: [
//         {
//           orderId: 101,
//           productName: "iPhone 12 Pro",
//         },
//         {
//           orderId: 102,
//           productName: "iPhone 13 Pro",
//         },
//         {
//           orderId: 103,
//           productName: "iPhone 14 Pro",
//         },
//       ],
//     },
//     {
//       userId: 2,
//       name: "Rahul",
//       orders: [
//         {
//           orderId: 104,
//           productName: "Samsung S23",
//         },
//       ],
//     },
//     {
//       userId: 3,
//       name: "Abhinav",
//       orders: [],
//     },
//   ];

  // Write a program to form a result array using map & filter or anyting but map is a must
  // Use abobe users & orders array
  const result = [];

// ----------------------method 1-----------------------//
// for (let i = 0; i < users.length; i++) {
//   const user = users[i];
//   const userOrders = [];

//   for (let j = 0; j < orders.length; j++) {
//     const order = orders[j];
//     if (order.userId === user.id) {
//       userOrders.push({
//         orderId: order.orderId,
//         productName: order.productName,
//       });
//     }
//   }

//   result.push({
//     userId: user.id,
//     name: user.name,
//     orders: userOrders,
//   });
// }

// ----------------------method 2-----------------------//
users.map(myFuncation);

function myFuncation(user){
    const userOrders = [];
    for(let i=0; i<orders.length; i++){
        const order = orders[i];
        
        if (order.userId === user.id) {
          userOrders.push({
            orderId: order.orderId,
            productName: order.productName,
          });
        }
    }
    
    result.push({
    userId: user.id,
    name: user.name,
    orders: userOrders,
  });
}
console.log(result);

   
  
