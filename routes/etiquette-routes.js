const express = require('express');
const etiquetteRoutes  = express.Router();
const mongoose = require('mongoose');

const uploader = require('../configs/cloudinary-setup.config');

const Etiquette = require ('../models/etiquette-model')

/* POST pour créer une nouvelle étiquette */
etiquetteRoutes.post('/', (req, res, next) => {

    console.log('currentUser', req.session.currentUser)

    // vérifier si logged-in
    if (!req.session.currentUser) {
      res.status(401).json({
        message: "Connectez-vous pour créer une étiquette"
      });
      return;
    }
    const {title,lieu,date,imageUrl,commentaire} = req.body;
    

    Etiquette.create({
      title,
      lieu,
      date,
      imageUrl,
      commentaire,
      author: req.session.currentUser._id
    })
      .then(response => {
        res.json(response)
      })
      .catch(err => {
        res.json(err);
      })
});


/*GET afficher toutes les étiquettes de l'auteur */

etiquetteRoutes.get('/byAuthor/:id', (req,res,next) => {
  const id = req.params.id;
  console.log("filter par auteur:" + id)
  Etiquette.find({ author: id })
    .populate('author')
    .then(allTheEtiquettes => {
      console.log('list', allTheEtiquettes)
      res.json(allTheEtiquettes);
    })
    .catch(err => {
      res.json(err);
    })
})

/* GET /etiquette/:id afficher le detail d'une etiquette */

etiquetteRoutes.get('/:id', (req,res,next) => {

  if (!req.session.currentUser) {
    res.status(401).json({
      message: "Connectez-vous pour consulter une étiquette!"
    });
    return;
  }

  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "L'identifiant spécifié n'est pas valide"});
    return;
  }

  const id = req.params.id;

  Etiquette.findOne({_id: id})
    .populate('author')
    .then (etiquette => {
      res.json(etiquette)
    })
    .catch(err => {
      res.json(err);
    })
})


/*PUT /etiquette/:id modifier une étiquette */

etiquetteRoutes.put('/:id', (req,res,next) => {

  if (!req.session.currentUser) {
    res.status(401).json({
      message: "Connectez-vous pour modifier cette étiquette!"
    });
    return;
  }

  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "L'identifiant spécifié n'est pas valide"});
    return;
  }

  const id = req.params.id;

  Etiquette.findByIdAndUpdate(id,req.body)
    .populate('author')
    .then (etiquette => {
      res.json({ message: `Votre etiquette ${req.params.id} a été modifié` })
    })
    .catch(err => {
      res.json(err);
    })
})

/*DELETE /etiquette/:id delete une etiquette */
etiquetteRoutes.delete('/:id', (req, res, next)=>{

  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "L'identifiant spécifié n'est pas valide"});
    return;
  }

  Etiquette.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({ message: `Votre etiquette ${req.params.id} a été supprimée` });
    })
    .catch( err => {
      res.json(err);
    })
})

module.exports = etiquetteRoutes;