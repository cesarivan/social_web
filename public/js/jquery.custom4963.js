/*-----------------------------------------------------------------------------------

 	Custom JS - All front-end jQuery
 
-----------------------------------------------------------------------------------*/

jQuery(document).ready(function($) {

/*-----------------------------------------------------------------------------------*/
/*	Pagination
/*-----------------------------------------------------------------------------------*/

	if(!$('.blog-posts .navigation .prev').length) $('.blog-posts .navigation').append('<span class="prev page-numbers inactive">Previous</span>');
	if(!$('.blog-posts .navigation .next').length) $('.blog-posts .navigation').append('<span class="next page-numbers inactive">Next</span>');
	$('.blog-posts .navigation .page-numbers').not('.prev,.next,:last').after('<span class="divider">/</span>');
	$('.blog-posts .navigation .divider').last().remove();

/*-----------------------------------------------------------------------------------*/
/*	Superfish Settings - http://users.tpg.com.au/j_birch/plugins/superfish/
/*-----------------------------------------------------------------------------------*/

	$('#primary-nav ul,#member-info ul').supersubs({
	        minWidth: 12,
	        maxWidth: 27,
	        extraWidth: 0 // set to 1 if lines turn over
	    }).superfish({
    		delay: 200,
    		animation: {opacity:'show', height:'show'},
    		speed: 'fast',
    		autoArrows: false,
    		dropShadows: false
	}); 

/*-----------------------------------------------------------------------------------*/
/*	Header Member Info
/*-----------------------------------------------------------------------------------*/

	$('#member-info').hide();
	$.post(zilla.ajaxurl, { action:'zilla_header_member_info' }, function(data) {
		$('#member-info').html(data).fadeIn();
	});


/*-----------------------------------------------------------------------------------*/
/*	Social Counts
/*-----------------------------------------------------------------------------------*/

	$('#social-counts').hide();
	$.post(zilla.ajaxurl, { action:'zilla_social_counts' }, function(data) {
		if(!data.error) $('#social-counts').html(data.content).fadeIn();
	}, 'json');


/*-----------------------------------------------------------------------------------*/
/*	Newsletter Form
/*-----------------------------------------------------------------------------------*/

	$('#newsletter-form form').submit(function() {
		$('#newsletter-form .error,#newsletter-form .success').hide();
		$.post(zilla.ajaxurl, { action:'zilla_newsletter_form', nonce:zilla.nonce, email:$('#newsletter-form form input[name="email"]').val() }, function(data){
			if(data.error){
				$('#newsletter-form .error').fadeIn(200);
			} else {
				$('#newsletter-form .success').fadeIn(200);
				$('#newsletter-form form input[name="email"]').val('Enter your email address...');
			}
		}, "json");
		return false;
	});


/*-----------------------------------------------------------------------------------*/
/*	Homepage Testimonials
/*-----------------------------------------------------------------------------------*/

	if($('#testimonials').length){
		// Randomise
		$('.testimonial-nav').each(function(){
		    var container = $(this),
		    	children = container.children('li');
		    children.sort(function(a,b){
		          var temp = parseInt( Math.random()*10 );
		          var isOddOrEven = temp%2;
		          var isPosOrNeg = temp>5 ? 1 : -1;
		          return( isOddOrEven*isPosOrNeg );
		    })
		    .appendTo(container);            
		});

		$('#testimonials .testimonial:eq(10),#testimonials .testimonial-nav a:eq(10)').addClass('active');
		$('#testimonials .testimonial-nav a').hover(function(){
			$('#testimonials .testimonial-nav a,#testimonials .testimonial').removeClass('active');
			$(this).addClass('active');
			$($(this).attr('href')).addClass('active');
		});
		$('#testimonials .testimonial-nav a').click(function(){ return false; });
	}


/*-----------------------------------------------------------------------------------*/
/*	Homepage Feature
/*-----------------------------------------------------------------------------------*/
	
	var first = $('#homepage-feature ul a:first');
	first.addClass('active');
	$('#feature-image-'+ first.attr('rel')).addClass('current');
	$('#homepage-feature .display .view').attr('href', first.attr('href'));
	if(first.attr('data-free') == 'true') $('#homepage-feature .display .free').addClass('show');

	$('#homepage-feature ul a').hover(function(){
		var link = $(this),
			id = link.attr('rel');
		
		$('#homepage-feature ul a').removeClass('active');
		link.addClass('active');
		$('#homepage-feature .display .view').attr('href', link.attr('href'));

		$('#homepage-feature .display img').removeClass('current');
		$('#feature-image-'+ id).addClass('current');

		$('#homepage-feature .display .free').removeClass('show');
		if(link.attr('data-free') == 'true') $('#homepage-feature .display .free').addClass('show');
	});


/*-----------------------------------------------------------------------------------*/
/*	Theme Filter
/*-----------------------------------------------------------------------------------*/

	$('#themes').isotope({ 
		itemSelector : '.theme',
		layoutMode : 'fitRows',
		animationOptions: {
			duration: 500,
			easing: 'linear',
			queue: false
		}
	});

	$('#primary.themes-page .filter a').click(function(){
		var selector = $(this).attr('data-filter');
		$('#themes').isotope({ filter: selector });
		$('#primary.themes-page .filter a').removeClass('active');
		$(this).addClass('active');
		return false;
	});


/*-----------------------------------------------------------------------------------*/
/*	Theme Feature
/*-----------------------------------------------------------------------------------*/

	var images = $('#single-theme-feature .images li'),
		totalImages = images.length,
		currentImage = 0,
		prevImage = totalImages - 1,
		nextImage = 1;

	if(totalImages == 2 || totalImages == 3){
		// Duplicate slides as we need at least 3 for a loop
		$(images).clone().appendTo('#single-theme-feature .images');
		images = $('#single-theme-feature .images li');
		totalImages = images.length;
		prevImage = totalImages - 1;
	}
	if(totalImages > 1){
		$('#single-theme-feature').append('<a href="#" class="prev-nav">Prev</a><a href="#" class="next-nav">Next</a>');
		$(images[nextImage]).addClass('next');
	}
	if(totalImages > 2) $(images[prevImage]).addClass('prev');
	$(images[currentImage]).addClass('current');

	$('#single-theme-feature .prev-nav').live('click', function(){
		nextImage = currentImage;
		if(nextImage < 0) nextImage = totalImages - 1;
		currentImage--;
		if(currentImage < 0) currentImage = totalImages - 1;
		prevImage = currentImage - 1;
		if(prevImage < 0) prevImage = totalImages - 1;

		images.removeClass('current next prev');
		$(images[prevImage]).addClass('prev');
		$(images[currentImage]).addClass('current');
		$(images[nextImage]).addClass('next');
		return false;
	});

	$('#single-theme-feature .next-nav').live('click', function(){
		prevImage = currentImage;
		if(prevImage >= totalImages) prevImage = 0;
		currentImage++;
		if(currentImage >= totalImages) currentImage = 0;
		nextImage = currentImage + 1;
		if(nextImage >= totalImages) nextImage = 0;

		images.removeClass('current next prev');
		$(images[prevImage]).addClass('prev');
		$(images[currentImage]).addClass('current');
		$(images[nextImage]).addClass('next');
		return false;
	});


/*-----------------------------------------------------------------------------------*/
/*	Fancybox Modals
/*-----------------------------------------------------------------------------------*/

	if($('#single-theme-feature').length || $('#single-plugin-feature').length){
		$('#single-theme-feature .demo-buy a.download,#single-plugin-feature .download a').fancybox({ 
			maxWidth: 490,
			padding: 50,
			helpers: {
				overlay: { 
					opacity: 0.98,
					css: {
		                'background-color': '#fff'
		            }
		        }
		    }
		});
	}
	if($('#theme-details').length){
		$('#theme-details .current-version a').attr('data-fancybox-type','iframe').fancybox({
			padding: 50,
			helpers: {
				overlay: { 
					opacity: 0.98,
					css: {
		                'background-color': '#fff'
		            }
		        }
		    }
		});
	}

/*-----------------------------------------------------------------------------------*/
/*	Send download email
/*-----------------------------------------------------------------------------------*/

	if($('#signup-download').length){
		$.post(zilla.ajaxurl, { 
			action: 'zilla_signup_download', 
			post_id: $('#signup-download').attr('data-id'), 
			type: $('#signup-download').attr('data-type'), 
			nonce: zilla.nonce 
		}, function(data){
			$('#signup-download').append(data);
		});
	}
	
	$('#signup-download form').live('submit', function(){
		var form = $(this),
			dl_text = $('input[type="submit"]', form).val();
			
		if($('input[name="email"]', this).val() == '' || $('input[name="email"]', this).val() == 'Email address...'){
			$('.message', form).html('<p class="error">Please enter a valid email address</p>');
		} else {
			$('input[type="submit"]', form).val('Sending...');
			$.post(zilla.ajaxurl, $(form).serialize(), function(data){
				if(data.error){
					$('.message', form).html('<p class="error">'+ data.message +'</p>');
					$('input[type="submit"]', form).val(dl_text);
				} else {
					$('.message', form).html('<p class="success">'+ data.message +'</p>');
					$('input,label', form).hide();
				}
			}, 'json');
		}
		return false;
	});

});




/*-----------------------------------------------------------------------------------*/
/*	Twitter
/*-----------------------------------------------------------------------------------*/

function zilla_format_twitter(twitters) {
  var statusHTML = [];
  for (var i=0; i<twitters.length; i++){
    var username = twitters[i].user.screen_name;
    var status = twitters[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
      return '<a href="'+url+'">'+url+'</a>';
    }).replace(/\B@([_a-z0-9]+)/ig, function(reply) {
      return  reply.charAt(0)+'<a href="http://twitter.com/'+reply.substring(1)+'">'+reply.substring(1)+'</a>';
    });
    statusHTML.push('<li><span>'+status+'</span> <a href="http://twitter.com/'+username+'/statuses/'+twitters[i].id_str+'">'+relative_time(twitters[i].created_at)+'</a></li>');
  }
  return statusHTML.join('');
}

function relative_time(time_value) {
  var values = time_value.split(" ");
  time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
  var parsed_date = Date.parse(time_value);
  var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
  var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
  delta = delta + (relative_to.getTimezoneOffset() * 60);

  if (delta < 60) {
    return 'less than a minute ago';
  } else if(delta < 120) {
    return 'about a minute ago';
  } else if(delta < (60*60)) {
    return (parseInt(delta / 60)).toString() + ' minutes ago';
  } else if(delta < (120*60)) {
    return 'about an hour ago';
  } else if(delta < (24*60*60)) {
    return 'about ' + (parseInt(delta / 3600)).toString() + ' hours ago';
  } else if(delta < (48*60*60)) {
    return '1 day ago';
  } else {
    return (parseInt(delta / 86400)).toString() + ' days ago';
  }
}
