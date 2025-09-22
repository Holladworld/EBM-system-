// Comment out or modify the AJAX call to show a message instead
submitHandler: function(form) {
    // Show success message without sending to backend
    $('#contactForm :input').prop('disabled', true);
    $('#success').modal('show');
    
    // Optional: Log the form data instead of sending
    const formData = {
        name: $('#name').val(),
        email: $('#email').val(),
        company: $('#company').val(),
        phone: $('#phone').val(),
        message: $('#message').val()
    };
    console.log('Form data (not sent):', formData);
}
// (function($) {
//     "use strict";

//     // validate contactForm form
//     $(function() {
//         $('#contactForm').validate({
//             rules: {
//                 name: {
//                     required: true,
//                     minlength: 2
//                 },
//                 email: {
//                     required: true,
//                     email: true
//                 },
//                 message: {
//                     required: true,
//                     minlength: 10
//                 }
//             },
//             messages: {
//                 name: {
//                     required: "Please enter your name",
//                     minlength: "Your name must be at least 2 characters long"
//                 },
//                 email: {
//                     required: "Please enter your email address",
//                     email: "Please enter a valid email address"
//                 },
//                 message: {
//                     required: "Please enter your message",
//                     minlength: "Your message should be at least 10 characters long"
//                 }
//             },
//             submitHandler: function(form) {
//                 const formData = {
//                     name: $('#name').val(),
//                     email: $('#email').val(),
//                     company: $('#company').val(),
//                     phone: $('#phone').val(),
//                     message: $('#message').val()
//                 };

//                 // Show loading state
//                 const submitBtn = $(form).find('button[type="submit"]');
//                 const originalText = submitBtn.text();
//                 submitBtn.text('Sending...').prop('disabled', true);

//                 // Use your Node.js backend
//                 $.ajax({
//                     type: "POST",
//                     url: "http://localhost:3001/api/contact", // Change to your backend URL in production
//                     data: JSON.stringify(formData),
//                     contentType: "application/json",
//                     success: function(response) {
//                         if (response.success) {
//                             $('#contactForm :input').prop('disabled', true);
//                             $('#success').modal('show');
//                         } else {
//                             $('#error p').text(response.message || 'Something went wrong');
//                             $('#error').modal('show');
//                         }
//                     },
//                     error: function(xhr, status, error) {
//                         console.error('AJAX Error:', status, error);
//                         $('#error p').text('Network error. Please try again later.');
//                         $('#error').modal('show');
//                     },
//                     complete: function() {
//                         submitBtn.text(originalText).prop('disabled', false);
//                     }
//                 });
//             }
//         });
//     });

//     // Smooth scrolling for navigation
//     $(document).ready(function() {
//         $('a[href^="#"]').on('click', function(e) {
//             e.preventDefault();
            
//             const targetId = $(this).attr('href');
//             if (targetId === '#') return;
            
//             const targetElement = $(targetId);
//             if (targetElement.length) {
//                 $('html, body').animate({
//                     scrollTop: targetElement.offset().top - 80
//                 }, 800);
//             }
//         });
//     });
// })(jQuery);