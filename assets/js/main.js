(function($){
  console.log('hey');

let ratingVal = {rVal: document.querySelector('#rating-number').value};
let ratingForm = document.querySelector('.rating-form');
ratingForm.addEventListener("submit", function(event){
  event.preventDefault()
  
  // ratingVal
  console.log(recipe_obj.ajax_url);
  $.post(recipe_obj.ajax_url, {'action': 'r_rating_form', 'ratingVal': 'USA'}, (data) => {console.log(data)})
  // console.log();
});
})(jQuery);