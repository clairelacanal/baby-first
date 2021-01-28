const express    = require('express');
const authRoutes = express.Router();
const bcrypt     = require('bcryptjs');
const mongoose = require('mongoose');

// require the user model !!!!
const User = require('../models/user-model');


authRoutes.post('/signup', (req, res, next) => {
  console.log(req.body)
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const confirmedPassword = req.body.confirmedPassword;
  
  if (!username || !email || !password || !confirmedPassword) {
    res.status(400).json({ message: 'Vous devez remplir les champs Nom, Email et Mot de passe' });
    return;
  }

  if (password.length < 7) {
    res.status(400).json({ message: 'Votre mot de passe doit contenir au minimum 7 caractères' });
    return;
  }

  if(!confirmedPassword) {
    res.status(400).json({message: 'Vous devez confirmer votre mot de passe'});
    return;
  }

  if(password !== confirmedPassword) {
    res.status(400).json({message: 'La confirmation du mot de passe ne correspond pas au mot de passe'});
    return;
  }
  
  User.findOne({ username })
    .then(foundUser => {
      if (foundUser) {
        res.status(400).json({ message: 'Le Nom est déjà pris. Tu dois en choisir un autre' });
        return;
      }
    
      const salt     = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(password, salt);
      const confirmedHashPass = bcrypt.hashSync(confirmedPassword);
    
      const aNewUser = new User({ // ce qu'il y aura dans ma base de données
        username:username,
        email:email,
        passwordHash: hashPass,
        confirmedpasswordHash: confirmedHashPass
      });
    
    
      aNewUser.save()
        .then(() => {
          // Persist our new user into session
          req.session.currentUser = aNewUser

         res.status(200).json(aNewUser);
        })
        .catch(err => {
          res.status(400).json({ message: 'L’enregistrement de l’utilisateur dans la base de données s’est mal déroulé.' });
        })
      ;
    })
    .catch(err => {
      res.status(500).json({message: "La vérification du nom d’utilisateur a mal tourné."});
    })
  ;
});

authRoutes.post('/login', (req, res, next) => {

  //login by email
  const {email, password} = req.body // On récuipère le username et le mot de passe qu'on a mis durant le login

  User.findOne({email})
  .then(user => {
    if (!user) {
      return next(new Error("Il n'y a pas d'utilisateur avec ce nom là"))
    }
    

    // compareSync
    if (bcrypt.compareSync(password, user.passwordHash) !== true) {
      return next(new Error("Le mot de passe n'est pas correcte"))
    } else {
      req.session.currentUser = user
      res.json(user)
    }
  }).catch(next)
});

authRoutes.post('/logout', (req, res, next) => {
  req.session.destroy()
  res.json({message: "Tu n'es plus loggé"})
});

authRoutes.get('/loggedin', (req, res, next) => {
  // req.isAuthenticated() is defined by passport
  if (req.session.currentUser) {
      res.status(200).json(req.session.currentUser);
      return;
  }
  res.status(403).json({ message: 'Unauthorized' });
});

/* GET /profile/:id afficher le detail d'un profile */

authRoutes.get('/profile/:id', (req,res,next) => {

  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "L'identifiant spécifié n'est pas valide"});
    return;
  }

  const id = req.params.id;

  User.findOne({_id: id})
    .then (user => {
      res.json(user)
    })
    .catch(err => {
      res.json(err);
    })
})

/*PUT /profile/:id modifier un élément du profil */

authRoutes.put('/profile/:id', (req,res,next) => {

  if (!req.session.currentUser) {
    res.status(401).json({
      message: "Connectez-vous pour modifier ce profile!"
    });
    return;
  }

  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "L'identifiant spécifié n'est pas valide"});
    return;
  }

})



module.exports = authRoutes;