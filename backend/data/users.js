import bcrypt from 'bcryptjs';

const users = 
[
    {
        name: "Otti Daniel",
        email: "ottidan20@gmail.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true
    },
    {
        name: "Otti David",
        email: "ottidavid@gmail.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false
    },
    {
        name: "Kemi Uwangue",
        email: "kemipiglet@gmail.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false
    },
];

export default users;