interface User {
    id: string;
    name: string;
}

type Users = Record<string, User>;

const users: Users = {
  "abc123": { id: "abc123" , name: "Rizon"},
  "xyz123": { id: "xyz123" , name: "Rishon"},
};

console.log(users['abc123'])