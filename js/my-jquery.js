$("#controls .wrapper span").click(function(){
	var dataDivHide , divContrls , clasControlsselec;
	dataDivHide = $(this).data("targetslid");
	divContrls = $("#controls .wrapper span");
	clasControlsselec = "active_btn_slide";
	
	$("#con_slider .wrapper div").hide();
	$("#"+dataDivHide).fadeIn();
	$("#con_slider .wrapper div div").show();

	/*Controls*/
	$(divContrls).removeClass(clasControlsselec);
	$(this).addClass(clasControlsselec);
	/*Controls*/
});