(function($){
  // console.log('hey');
  // let ratingForm = document.querySelector('.rating-form');
  // ratingForm.addEventListener("submit", function(event){
  //   event.preventDefault();
  //   $("#rating-number").attr("disabled", true);
  //   let postId = $(this).attr('postid');
  //   console.log( postId );
  //   let inputVal = document.querySelector('#rating-number').value;
  //   let ratingVal = {
  //     'action': 'r_rating_form',
  //     'rVal': inputVal,
  //     'postId': postId,
  //   };
  //   // ratingVal
  //   $.post(recipe_obj.ajax_url, ratingVal, (data) => {console.log(data)});
  // });
  
  
  
  
  console.log('hey');
  console.log($('#register-form'));
  console.log('hey');

  $(document).on('submit', '#register-form', (e) => {
    e.preventDefault();
    var form                            =   {
      _wpnonce:                           $('#_wpnonce').val(),
      action:                             "recipe_create_account",
      name:                               $("#register-form-name").val(),
      username:                           $("#register-form-username").val(),
      email:                              $("#register-form-email").val(),
      pass:                               $("#register-form-password").val(),
      confirm_pass:                       $("#register-form-repassword").val()
    };
    $.post(recipe_obj.ajax_url, form, (data) => {
      if (data.status == 2) {
        
        console.log(data.status);
        window.location.href = recipe_obj.home_url;
      }
    });
  });

  // For Login Form.

  $(document).on('submit', '#login-form', (e) => {
    e.preventDefault();
    var form                            =   {
      _wpnonce:                           $('#_wpnonce').val(),
      action:                             "recipe_login_account",
      username:                           $("#login-form-username").val(),
      password:                               $("#login-form-password").val(),
    };
    $.post(recipe_obj.ajax_url, form, (data) => {
      if (data.status == 2) {
        
        console.log(data.status);
        window.location.href = recipe_obj.home_url;
      }
    });
  });
})(jQuery);