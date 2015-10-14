var contactMe = (function(){

	var init = function () {
		_setUpListners();
	};

	var _setUpListners = function () {
		$('#contact-me').on('submit', _submitForm);
	};
	var _submitForm = function(e){
		e.preventDefault();
		console.log ('otpravka');

		var form = $(this),
		url = 'contactme.php',
		defObj = _ajaxForm(form, url);
	};
	var _ajaxForm = function (form, url) {
		console.log('ajax');
		if (validation.validateForm(form)) return false;
	};
	return {
		init: init
	};
})();

contactMe.init();