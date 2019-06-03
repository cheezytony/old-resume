class Profile {

	name = "Human";
	dOB = Date.now();
	gender = "Male";
	age = 0;

	constructor ( name, DOB, gender ) {
		this.name = name;
		this.DOB = DOB;
		this.gender = gender;

		this.calculateAge();
	}

	calculateAge () {
		var DOB = new Date(this.DOB);
		var Now = new Date();
		var diff = Now.getTime() - DOB.getTime();
		this.age = Math.ceil(diff / 365 / 1000 / 86400);
	}

	hire (form) {

		var url = "https://api.emailjs.com/api/v1.0/email/send-form";

		var data = new FormData(form);
		data.append("service_id", "gmail");
		data.append("template_id", "gmail");
		data.append("user_id", "user_k6bOehwNGNzmfsQwabIpy");

		$.ajax({
			url,
			method: "POST",
			data,
			beforeSend () {

			}
		})
		.then(function (response) {
			
		}, function (xhr) {
			
		});
	}

}

$(function () {

	var me = new Profile("Antonio Okoro", "May 15 1998", "Male");
	$(".age").html(me.age);

	var themes = ["black-white", "blue"];

	function setTheme (theme) {
		if (!themes.find(theme_name => theme_name == theme)) {
			return false;
		}
		themes.forEach(theme_name => {
			$("body").removeClass(`theme-${theme_name}`);
		});
		$("body").addClass(`theme-${theme}`);
		return true;
	}
	
	$('[data-width]').each((index, element) => {
		var element = $(element);
		var width = element.data('width');
		element.width(0);
		setTimeout(() => {
			element.animate({width}, 2000, 'linear');
		}, 1000);
	});

	$('body').delegate(".settings-toggle", "click", function (event) {
		event.preventDefault();
		$(".settings").toggleClass("show");
	});

	$('body').delegate(".settings", "click", function (event) {
		if (!$(event.target).is(".settings-menu, .settings-menu *")) {
			$(".settings").removeClass("show");
		}
	});

	$('body').delegate("[data-set-theme]", "click", function (event) {
		event.preventDefault();
		var theme = $(this).data("set-theme");
		if (setTheme(theme)) {
			$("[data-set-theme]").removeClass("active");
			$(this).addClass("active");
		}
	});

});