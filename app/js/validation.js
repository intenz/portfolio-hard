var validation = (function(){
	var init = function () {
		_setUpListners();
	};

	var _setUpListners = function () {

	};
	var _createQtip = function(element) {	
		position = element.attr('qtip-position');
		console.log(position);
		if (position === 'right') {
			position = {
				my: 'left center',
				at: 'right center'
			};
		}else{
			position = {
				my: 'right cetner',
				at: 'left center',
				adjust: {
					method: 'shift none'
				}
			};
		}
		element.qtip({
			content: {
				text: function(){
					return $(this).attr('qtip-content');
				}
			},
			show: {
				event: 'show'
			},
			hide: {
				event:'keydown hideTooltip'
			},
			position: position,
			style: 'qtip-mystyle gtip-rounded',
			tip: {
				height: 10,
				width: 16
				}
			}).trigger('show');
		};


var validateForm = function(form) {
	var elements = form.find('input, textarea').not('input[type="file"], input[type="hidden"]'),
	valid = true;

	$.each(elements, function(index, val){
		var element = $(val),
		val= element.val(),
		pos = element.attr('qtip-position');
		// console.log(pos);

		if(val.length === 0){
			_createQtip(element, pos);
			valid = false;
		}
	});

	return valid;
};


	return {
		init: init,
		validateForm: validateForm
	};

})();

validation.init();
