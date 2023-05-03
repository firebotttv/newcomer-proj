export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  adress: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  }
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}

export interface UserFactory = (args?: Partial<User>): Post=>{
  id: 0,
  name: "Name Surname",
  username: "New User",
  email: "name.surname@email.com",
  adress: {
    street: "Street",
    suite: "Suite",
    city: "City",
    zipcode: "123 45",
    geo: {
      lat: "12.3456",
      lng: "-12.3456",
    },
  },
  phone: "123 456 789",
  website: "www.abcdefgh.com",
  company: {
    name: "Company Inc.",
    catchPhrase: "abcdefgh",
    bs: "abcdefgh",
  },
  ...args
}
