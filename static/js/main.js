$(document).ready(function(){
	$('.aboutSection').click(function(){
		$('html, body').animate({
	        scrollTop: $(".aboutSectionDiv").offset().top
	    }, 2000);
	});
});

  $(document).ready(function() {
        $("#form").validate({
                rules: {
                    firstname: "required",
                    lastname: "required",
                    email: {
                        required: true,
                        email: true
                    },
                    bio: "required",
                    mob: {
      					required:true,
  						minlength:9,
  						maxlength:10
  					},
                    password: {
                        required: true,
                        minlength: 5
                    },
                    passwordcp: {
                    equalTo: "#password"
                    }
                },
                messages: {
                    firstname: "Please enter your first name",
                    lastname: "Please enter your last name",
                    password: {
                        required: "Please provide a password",
                        minlength: "Your password must be at least 5 characters long"
                    },

                    passwordcp: "Password not matching",
                    email: "Please enter a valid email address",

                }
            });

    $('#form').submit(function() {
        if($('#form').valid()) {
        	$('.registrar').removeClass('d-none');
            var str = '';
            var html = '<tr><td>'+ $('#firstname').val() +'</td><td>'+ $('#lastname').val() +'</td><td>'+ $('#email').val() +'</td><td>'+ $('#bio').val() + '</td><td>'+ $('#mob').val() + '</td><td>'+ $('#gender').val() + '</td></tr>';

            
            $('.display').append(html);
            $('#form')[0].reset();
        }
        return false;
    });
    $('.bookHover').click(function(){
    	$('.bannerSection, .aboutSectionDiv, #form').toggleClass('d-none');
    });
    $('.registrar').click(function(){
    	$('.tableSection').toggleClass('d-none');
    });
});