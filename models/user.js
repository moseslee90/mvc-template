/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope
  
    let getAll = (callback) => {
  
      let query = 'SELECT * FROM students';
  
      dbPoolInstance.query(query, (error, queryResult) => {
        if( error ){
  
          // invoke callback function with results after query has executed
          callback(error, null);
  
        }else{
  
          // invoke callback function with results after query has executed
  
          if( queryResult.rows.length > 0 ){
              console.log("more than 0 rows");
              
            callback(null, queryResult.rows);
  
          }else{
              console.log("no rows");
              
            callback(null, null);
  
          }
        }
      });
    };
  
    return {
      getAll,
    };
  };
  