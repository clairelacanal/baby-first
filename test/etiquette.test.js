
/*
const AddEtiquette = require('../client/src/components/Etiquette/AddEtiquette');
const ShowEtiquette = require('../client/src/components/Etiquette/ListEtiquette');
const DetailsEtiquette = require('../client/src/components/Etiquette/DetailsEtiquette');
const ModifyEtiquette = require('../client/src/components/Etiquette/ModifyEtiquette');
*/
let assert = require('chai').assert;
const fs = require('fs');

const etiquetteRoutes = require('../routes/etiquette-routes')
const Etiquette = require ('../models/etiquette-model')

describe("verifier valeurs par défaut d'une Etiquette", function() {
  it("Je cree une Etiquette sans url", function(){
    let etiquette = new Etiquette({
      title: "1er sourire",
      lieu: "Paris",
      commentaire: "Le premier sourire d'Adèle",
      author: "1"
    })
    let lieu = etiquette.lieu;
    assert.strictEqual(lieu, "Paris")
    let imageUrl = etiquette.imageUrl;
    assert.strictEqual(imageUrl, "https://unsplash.com/photos/GQ327RPuxhI")
    let date = etiquette.date
    assert.exists(date)
  })
})

/*describe([String with Test Group Name], function() {
  it([String with Test Name], function() {
      [Test Code]
  });
});*/


// Tests sur l'ajout d'étiquettes
/*
describe("Réalisation de tests sur l'ajout d'étiquettes"), function() {
  it("L'étiquette a bien été ajoutée", function() {
    let etiquetteAdd = new AddEtiquette();
    etiquetteAdd.handleSubmit();
    etiquetteAdd.handleChange();
    etiquetteAdd.handleUpload();
    assert.exists(etiquetteAdd, 'etiquette is adding');
  })
};
*/

// Tests sur l'affiche des étiquettes
/*describe("Réalisation de tests sur l'affiche des étiquettes"), function() {
  it("Les étiquettes sont bien affichées", function() {
    let etiquetteShow = new ShowEtiquette();
  })
};


// Tests sur les détails d'étiquettes
describe("Réalisation de tests sur le détail d'étiquettes"), function() {
  it("L'étiquette a bien été affichée", function() {
    let etiquetteDetails = new DetailsEtiquette();
  })
};


// Tests sur la modification d'étiquettes
describe("Réalisation de tests sur la modification d'étiquettes"), function() {
  it("L'étiquette a bien été modifiée", function() {
    let etiquetteModify = new ModifyEtiquette();
  })
};*/