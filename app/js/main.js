
// menu
$(document).ready(function() {
	$('.menu_show').click(function(e) {
		$(this).toggleClass('active');
		$('.nav_menu').toggleClass('active');
	});
});

//placeholder 
$(document).ready(function() {
	if(!Modernizr.input.placeholder){
		$('input,textarea').placeholder();
	}
});

//popup
var myWork = (function (){

var init = function(){
		_setUpListners();
	},
	_setUpListners = function (){
	$('#add_form').on('click', _showModal);// открыть модальное окно
	('#add_work_form').on('submit', _addProject); // добавление проекта
},

_showModal = function (){
		$('#element_to_pop_up').bPopup({
			speed: 650,
			transition: 'slideDown',
			onClose: function () {
	this.find('.form').trigger("reset"); // сбрасываем форму
}
		});
	},

_addProject = function (e){
	e.preventDefault();
},

_ajaxForm = function (form, url) {

	if (!validation.validateForm(form)) return false;  
	var data = form.serialize();


};

return {
		init: init
};

})();

myWork.init();



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
