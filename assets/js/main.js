(function($){
  console.log('hey');

let ratingVal = {rVal: document.querySelector('#rating-number').value};
let ratingForm = document.querySelector('.rating-form');
ratingForm.addEventListener("submit", function(event){
  event.preventDefault()
  
  // ratingVal
  // $.post(  )
  console.log('rrrrr_recipe_obj');
  console.log(recipe_obj);
});
})(jQuery);