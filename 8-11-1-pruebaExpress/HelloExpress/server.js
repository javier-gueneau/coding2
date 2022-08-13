const express = require("express");
const {faker}=require("@faker-js/faker");
const app = express();
const port=8000;


class User{
  constructor(){
    this.userId=faker.datatype.uuid(), 
    this.username=faker.internet.userName(),
    this.email=faker.internet.email(),
    this.avatar=faker.image.avatar(),
    this.password= faker.internet.password(),
    this.birthday=faker.date.birthdate(),
    this.registeredAt=faker.date.past()
  }
}

class Company{
  constructor(){
    this._id=faker.datatype.uuid(), 
    this.name=faker.company.name(), 
    this.address={
      street:faker.address.street(),
      city:faker.address.city(),
      state:faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    }
  }
}


// req is short for request
// res is short for response
app.post("/api/users/new", (req, res) => {
  const newUser=new User()
  console.log(`new User created: ${newUser}`)
  res.json({msg:"success", user:newUser});
});

app.post("/api/companies/new", (req, res) => {
  const newCompany=new Company()
  console.log(`new company created: ${newCompany}`)
  res.json({msg:"success", company:newCompany});
});

app.post("/api/user/company", (req, res) => {
  const newUser=new User()
  const newCompany=new Company()
  console.log(`new company created: ${newCompany}`)
  res.json({msg:"success", user:newUser, company:newCompany});
});


app.listen(port, () =>
  console.log(`Server is locked and loaded on port ${port}!`)
);
