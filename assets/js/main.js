(function($){
  console.log('hey');
  let ratingForm = document.querySelector('.rating-form');
  ratingForm.addEventListener("submit", function(event){
    event.preventDefault();
    $("#rating-number").attr("disabled", true);
    let postId = $(this).attr('postid');
    console.log( postId );
    let inputVal = document.querySelector('#rating-number').value;
    let ratingVal = {
                    'action': 'r_rating_form',
                    'rVal': inputVal,
                    'postId': postId,
                  };
    // ratingVal
    $.post(recipe_obj.ajax_url, ratingVal, (data) => {console.log(data)});
    // console.log();
});
})(jQuery);