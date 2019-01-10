$(document).ready(function(){  
    
    $('#foo').on('submit', function(event){
		event.preventDefault();
		var error_name = '';
		var error_email = '';
		if($('#name').val() == '')
            {
                error_name = 'Name is required';
                $('#error_name').text(error_name);
                $('#name').css('border-color', '#cc0000');
            }
		else
            {
                error_name = '';
                $('#error_name').text(error_name);
                $('#name').css('border-color', '');
            }
		if($('#email').val() == '')
            {
                error_email = 'Email is required';
                $('#email').text(error_email);
                $('#email').css('border-color', '#cc0000');
            }
		else
            {
                error_email = '';
                $('#email').text(error_email);
                $('#email').css('border-color', '');
            }
		
		if(error_name != '' || error_email != '')
		{
			return false;
		}
		else
		{
           
			$('#donasi').attr('disabled', 'disabled');
			var form_data = $(this).serialize();
			$.ajax({
				url:"http://localhost/Amal_mukena/api_mukena/public/userdonasis",
				method:"POST",
				data:form_data,
				success:function(data)
				{
                    if(data.success == true){ // if true (1)
                        setTimeout(function(){// wait for 5 secs(2)
                            alert("data berhasil di kirim");
                             location.reload(); // then reload the page.(3)
                        }, 1000); 
                     }
				}
			});
		}
		

    });

});