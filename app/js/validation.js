var validation = (function(){
	var init = function () {
		_setUpListners();
	};

	var _setUpListners = function () {
		$('form').on('keydown', 'input, textarea', _removeError);
		$('form').on('reset', _clearForm);
	};

	var _removeError = function (){
		$(this).removeClass('has-error');
	};

	var _clearForm = function (form) {
		var form = $(this);
		form.find('input,textarea').trigger('hideTooltip').removeClass('has-error');
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
				my: 'right center',
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
	var elements = form.find('input, textarea').not('input[type="hidden"], input[type="file"]'),
	valid = true;

	$.each(elements, function (index, val){
		var element = $(val),
		val= element.val(),
		pos = element.attr('qtip-position');

		if(val.length === 0){
			element.addClass('has-error');
			_createQtip(element, pos);
			valid = false;
		}
	});

	return valid;
};

// Валидация инпута file
  function validationFile(form) {
    var
      $inputFile = form.find("input[type='file']"),
      $labelFile = form.find(".fileform"),
      isValid = true;

    _createQtip($labelFile);
    //$labelFile.trigger("hideTooltip");

    if (!$inputFile.val()) {
      $labelFile.addClass("has-error").trigger("show");
      isValid = false;
      //console.log(this);
    } else {
      $labelFile.removeClass("has-error").trigger("hideTooltip");
    };
    $inputFile.change(function () {
      if ($inputFile.val()) {
        $labelFile.removeClass("has-error").trigger("hideTooltip");
      } else {
        $labelFile.trigger("hideTooltip");
      }
    });
    return isValid;
  };

	return {
		init: init,
		validateForm: validateForm,
		validationFile: validationFile
	};

})();

validation.init();
