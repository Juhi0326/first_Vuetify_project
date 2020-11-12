const functions = require("firebase-functions");

const admin = require("firebase-admin");

admin.initializeApp();


exports.addAdminRole = functions.https.onCall((data, context) => {

    console.log(context.auth.token.admin);

      // check request is made by an admin
  if ( context.auth.token.admin !== true ) {
    return { error: 'Only admins can add other admins' }
  }

  //get user and add custom claim(admin)

  return admin
    .auth()
    .getUserByEmail(data.email)
    .then((user) => {
      return admin.auth().setCustomUserClaims(user.uid, {
        admin: true,
      });
    }).then(()=> {
        return {
          message: `Success! ${data.email} hase been maid an admin!`  
        }
    }).catch(err => {
        return err;
    })
});


exports.SetAdminFalse = functions.https.onCall((data, context) => {

  console.log(context.auth.token.admin);

    // check request is made by an admin
  if ( context.auth.token.admin !== true ) {
    return { error: 'Only admins can add other admins' }
  }

//get user and add custom claim(admin)

return admin
  .auth()
  .getUserByEmail(data.email)
  .then((user) => {
    return admin.auth().setCustomUserClaims(user.uid, {
      admin: false,
    });
  }).then(()=> {
      return {
        message: `Success! ${data.email} set the admin role to FALSE!`  
      }
  }).catch(err => {
      return err;
  })
});
