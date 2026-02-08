let customers = [
    {
        name: "Jason",
        email:"jason.ramirez@gmail.com",
        purchases: ["shoes", "pants", "socks"]
    },
{ 
    name: "Carmen",
    email: "carmen.johnson@gmail.com",
    purchases: ["dress", "shoes", "hat"]
},

{
    name: "Jaylene",
    email: "jaylene.wilson@gmail.com",
    purchases: ["jacket", "jeans", "sweater"]
}
]

customers.push({
    name: "Alex",
    email: "alex.ronald@gmail.com",
    purchases: ["t-shirt", "shorts", "sandals"] 
})

customers.shift({
    name: "Jason",
    email:"jason.ramirez@gmail.com",
    purchases: ["shoes", "pants", "socks"]
})

console.log(customers);