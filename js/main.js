// @codekit-prepend "jquery-2.0.2.min.js"

var mj = {

	el: {
		$body : $("body , html"),
		$locals : $('a[href^="#"]')
	},

	init: function() {

		mj.bindUI();
	
	},

	scrollPage : function(event, href) {

		event.preventDefault();

		mj.el.$body.animate({

			scrollTop: $(href).offset().top

		}, 500);

	}

};

mj.el.$locals.on("click" , function(event) {

	var href = $(this).attr("href");

	mj.scrollPage(event, href);

});