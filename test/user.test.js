let assert = require('chai').assert;
const fs = require('fs');
const mongoose     = require('mongoose');

const User = require ('../models/user-model');


/*describe([String with Test Group Name], function() {
  it([String with Test Name], function() {
      [Test Code]
  });
});*/

describe("verifier les valeurs d'un User créé", function() {
  it("Je cree un User avec un username en valeur STRING", function(){
    let user = new User({
      username: "Claire Lacanal",
      email: "claire@gmail.com",
      passwordHash: "petitLapin75",
      confirmedpasswordHash: "petitLapin75" 
    })
    let username = user.username;
    assert.isString(username, "Ok, this is a string")
  })

  it("Je cree un User avec un email en valeur STRING", function(){
    let user = new User({
      username: "Claire Lacanal",
      email: "claire@gmail.com",
      passwordHash: "petitLapin75",
      confirmedpasswordHash: "petitLapin75" 
    })
    let email = user.email;
    assert.isString(email, "Ok, this is a string")
  })

  it("Je cree un User avec un passwordHash en valeur STRING", function(){
    let user = new User({
      username: "Claire Lacanal",
      email: "claire@gmail.com",
      passwordHash: "petitLapin75",
      confirmedpasswordHash: "petitLapin75" 
    })
    let passwordHash = user.passwordHash;
    assert.isString(passwordHash, "Ok, this is a string")
  })

  it("Je cree un User avec un confirmedpasswordHash en valeur STRING", function(){
    let user = new User({
      username: "Claire Lacanal",
      email: "claire@gmail.com",
      passwordHash: "petitLapin75",
      confirmedpasswordHash: "petitLapin75" 
    })
    let  confirmedpasswordHash = user. confirmedpasswordHash;
    assert.isString( confirmedpasswordHash, "Ok, this is a string")
  })
})