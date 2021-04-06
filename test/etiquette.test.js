let assert = require('chai').assert;
const fs = require('fs');
const mongoose     = require('mongoose');

const Etiquette = require ('../models/etiquette-model');


/*describe([String with Test Group Name], function() {
  it([String with Test Name], function() {
      [Test Code]
  });
});*/

describe("verifier les valeurs d'une Etiquette créée", function() {
  it("Je cree une Etiquette avec un title en valeur STRING", function(){
    let etiquette = new Etiquette({
      title: "1er sourire",
      lieu: "Paris",
      date: 1992-02-16,
      imageUrl: "https://unsplash.com/photos/GQ327RPuxhI",
      commentaire: "Le premier sourire d'Adèle",
      author: "1"
    })
    let title = etiquette.title;
    assert.isString(title, "Ok, this is a string")
  })

  it("Je cree une Etiquette avec un lieu en valeur STRING", function(){
    let etiquette = new Etiquette({
      title: "1er sourire",
      lieu: "Paris",
      date: 1992-02-16,
      imageUrl: "https://unsplash.com/photos/GQ327RPuxhI",
      commentaire: "Le premier sourire d'Adèle",
      author: "1"
    })
    let lieu = etiquette.lieu;
    assert.isString(lieu, "Ok, this is a string")
  })

  it("Je cree une Etiquette en mentionnant la date", function(){
    let etiquette = new Etiquette({
      title: "1er sourire",
      lieu: "Paris",
      date: 1992-02-16,
      imageUrl: "https://unsplash.com/photos/GQ327RPuxhI",
      commentaire: "Le premier sourire d'Adèle",
      author: "1"
    })
    let date = etiquette.date
    assert.isOk(date, 'date is OK')
  })

  it("Je cree une Etiquette sans mentionner la date", function(){
    let etiquette = new Etiquette({
      title: "1er sourire",
      lieu: "Paris",
      imageUrl: "https://unsplash.com/photos/GQ327RPuxhI",
      commentaire: "Le premier sourire d'Adèle",
      author: "1"
    })
    let date = etiquette.date
    assert.exists(date)
  })

  it("Je cree une Etiquette sans mentionner l'image URL", function(){
    let etiquette = new Etiquette({
      title: "1er sourire",
      lieu: "Paris",
      date: 1992-02-16,
      imageUrl: "https://unsplash.com/photos/GQ327RPuxhI",
      commentaire: "Le premier sourire d'Adèle",
      author: "1"
    })
    let imageUrl = etiquette.imageUrl;
    assert.strictEqual(imageUrl, "https://unsplash.com/photos/GQ327RPuxhI")
  })

  it("Je cree une Etiquette avec un commentaire en valeur STRING", function(){
    let etiquette = new Etiquette({
      title: "1er sourire",
      lieu: "Paris",
      date: 1992-02-16,
      imageUrl: "https://unsplash.com/photos/GQ327RPuxhI",
      commentaire: "Le premier sourire d'Adèle",
      author: "1"
    })
    let commentaire = etiquette.commentaire;
    assert.isString(commentaire, "Ok this is a string");
  })
})

// Tests sur les etiquettes en base

    // Vérifier que l'étiquette est là

describe("Ajouter une etiquette en base", function() {
  it("Vérifier que l'etiquette est là", function() {
    let etiquette = new Etiquette({
      title: "1er sourire",
      lieu: "Paris",
      date: 1992-02-16,
      imageUrl: "https://unsplash.com/photos/GQ327RPuxhI",
      commentaire: "Le premier sourire d'Adèle",
      author: "6023b10550226678a27e4446"
    })

    mongoose
    .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(connexionToMongoose => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    
      Etiquette.create(etiquette)
        .then(etiquetteFromBD => {
          console.log("L'étiquette de la base de données", etiquetteFromBD)

      Etiquette.findOne(etiquette)
        .populate('author')
        .then (etiquetteFinding => {
          console.log("Etiquette trouvée", etiquetteFinding)
          console.log(etiquetteFinding)
          assert.isOk(etiquetteFinding, "L'etiquette est bien là")
      })
        .catch(err => {
          console.log("Erreur :", err)
        })
      })

        .catch(err => {
          console.log("erreur : " + err)
      })


    .catch(err => {
    console.error('Error connecting to mongo', err)
    })
  })
})
  
    // Vérifier que les modifications ont été prises en compte

  it("Vérifier que les modifications ont bien été prises en compte", function() {
    let etiquette = new Etiquette({
      title: "1er sourire",
      lieu: "Paris",
      date: 1992-02-16,
      imageUrl: "https://unsplash.com/photos/GQ327RPuxhI",
      commentaire: "Le premier sourire d'Adèle",
      author: "6023b10550226678a27e4446"
    })

    mongoose
    .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(connexionToMongoose => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    
      Etiquette.findByIdAndUpdate(etiquette)
        .populate('author')
        .then (etiquetteModifying => {
          console.log("Etiquette modifiée", etiquetteModifying)
          assert.isOk(etiquetteModifying, "L'étiquette a été modifiée")
        })
        .catch(err => {
          console.log("Erreur :", err)
        })

    .catch(err => {
    console.error('Error connecting to mongo', err)
    })
  })
}) 
})


