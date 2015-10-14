var contactMe = (function(){

	var init = function () {
		_setUpListners();
	};

	var _setUpListners = function () {
		$('#form_author').on('submit', _submitForm);
	};
	var _submitForm = function(e){
		e.preventDefault();
		console.log ('otpravka');

		var form = $(this),
		url = 'authorization.php',
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