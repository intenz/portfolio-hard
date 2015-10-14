
// menu
$(document).ready(function() {
	$('.menu_show').click(function(e) {
		$(this).toggleClass('active');
		$('.nav_menu').toggleClass('active');
	});

// placeholder
if(!Modernizr.input.placeholder){
		$('input, textarea').placeholder();
	}
});




// Объявление модуля
var myModule = (function () {

	// Инициализирует наш модуль
	var init = function () {
		_setUpListners();
	};

	// Прослушивает события 
	var _setUpListners = function () {
		$('#add_form').on('click', _showModal);
		$('#add_work_form').on('submit', _addProject);
	};

	var _showModal = function (e) {
		e.preventDefault();
		var divPopup = $('#element_to_pop_up'),
			form = divPopup.find('.form');
		divPopup.bPopup({

			speed: 650,
			transition: 'slideDown',
			onClose: function () {
				this.find('succes').text('').hide();
				this.find('form').trigger('reset');
				}
		});
	};
	var _addProject = function (e) {
		console.log('add project');
		e.preventDefault();

		var form = $(this),
		url = 'add_project.php',
		defObj = _ajaxForm( form, url);
		
		if(defObj){
			defObj.done(function(ans) {
				console.log("ans");
				var succesBox = form.find('succes'),
						errorBox = form.find('er_send');
				if(ans.status === 'OK'){
					errorBox.hide();
					succesBox.text(ans.text).show();
				}else{
					errorBox.hide();
					errorBox.text(ans.text).show();
				}
			});
		}
	};

	var _ajaxForm = function (form, url) {
		if(!validation.validateForm(form)) return false;

		var data = form.serialize();

		var result= $.ajax({
			url: url,
			type: 'POST',
			dataType: 'json',
			data: data,
	}).fail (function(ans){
		console.log('problem');
		form.find('er_send').text('na serveri prob').show();
	});

		return result;
	};

	// Возвращаем объект (публичные методы) 
	return {
		init: init
	};

})();

// Вызов модуля
myModule.init();


// file-load
function getName (str){
	if (str.lastIndexOf('\\')){
		var i = str.lastIndexOf('\\')+1;
	}
	else{
		var i = str.lastIndexOf('/')+1;
	}
	var filename = str.slice(i);
	var uploaded = document.getElementById("fileformlabel");
	uploaded.innerHTML = filename;
}
