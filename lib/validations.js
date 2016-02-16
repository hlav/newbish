function titleIsNotEmpty(input){
  return !input.trim() ? 'Title cannot be Empty' : true;
}
function descriptionIsNotEmpty(input){
  return !input.trim() ? 'Description cannot be Empty' : true;
}
function adviceIsNotEmpty(input){
  return !input.trim() ? 'Advice cannot be Empty' : true;
}


module.exports = function(input){
  var errors = [];
  errors.push(titleIsNotEmpty(input.title))
  errors.push(descriptionIsNotEmpty(input.description))
  errors.push(adviceIsNotEmpty(input.advice))

  return errors.filter(function(error){
    return error !== true;
  })
}
