module.exports = (db) => {
    const bug2 =
    `            .--.       .--.
        _  '    \\     /    '  _
         '\\.===. \\.^./ .===./'
                \\/'"'\\/
             ,  |     |  ,
            / '\\|'-.-'|/' \\
           /    |  \\  |    \\
        .-' ,-''|   ; |''-, '-.
            |   |    \\|   | 
            |   |    ;|   |
            |   \\    //   |
            |    '._//'   |`;
    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
  
    let indexControllerCallback = (request, response) => {

        function getUsers(error, allUsers) {
            if (error) {
                console.log(error);
            }

            let objData = {}
            objData["data"] = allUsers;
            console.log(bug2);
            
            response.render('pokemon/index', objData);
        }

        db.user.getAll(getUsers);

        // db.user.getAll((error, allPokemon) => {
  
  
        //   response.render('pokemon/index', { allPokemon });
        // });
        

    };
  
    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
      index: indexControllerCallback,
    };
  
  }
  