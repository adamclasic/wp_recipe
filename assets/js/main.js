(function($){
  console.log('hey');
  let ratingForm = document.querySelector('.rating-form');
  ratingForm.addEventListener("submit", function(event){
    event.preventDefault();
    $("#rating-number").attr("disabled", true);
    let $inputVal = document.querySelector('#rating-number').value;
    let ratingVal = {'rVal': $inputVal,
                    'action': 'r_rating_form'};
    // ratingVal
    console.log( this.firstChild );
    $.post(recipe_obj.ajax_url, ratingVal, (data) => {console.log(data)});
    // console.log();
});
})(jQuery);