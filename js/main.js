$(document).ready(function(){
	$('.datepicker').datepicker();//инициализация дэйтпикера

	$( ".tabletotal, .chairtotal" ).blur(function() {
		var inputValue = $(this).val();//принимает значение того, что в инпуте
	  	if ((isNaN(inputValue) || inputValue <= 0 || inputValue >= 100) && inputValue !== '') {
	      $(this).parent().addClass('has-error');//добавляет класс который отвечает за стиль ошибки
	      $(this).val('');//убирает левое значение из инпута
	      //$(this).prop('placeholder', '1-100');
	  	}
	});

	$( ".tabletotal, .chairtotal" ).focus(function() {
		$(this).parent().removeClass('has-error');//очищает все от классов с ошибками
	});

	$("#addRow").click(function() {
		var rowAmount = $('.recordNote');//берем все ряды с записями
		var currentRow = rowAmount[0]; //берем первый за образец чтобы не писать тут код ряда
	  	$(currentRow).clone().insertAfter(rowAmount[rowAmount.length - 1]).find("input").val("");//копируем и всавляем в конец списка, удаляя все значения из инпутов
	});

	$(document).change(function() {
	  var tableTotal = $('.tabletotal');
	  var chairTotal = $('.chairtotal');
	  var tableSum = 0;
	  var chairSum = 0;
	  var currentCount;

	  for(currentCount = 0; currentCount < tableTotal.length; ++currentCount){
	  	var currenTableValue = $(tableTotal[currentCount]).val();
	  	var currenChairValue = $(chairTotal[currentCount]).val();

	    currenTableValue = parseInt(currenTableValue, 10);
	    currenChairValue = parseInt(currenChairValue, 10);
	    
		if(!isNaN(currenTableValue)){
			tableSum += currenTableValue;
		}

		if(!isNaN(currenChairValue)){
			chairSum += currenChairValue;
		}
	  };

	  tableSum = tableSum / currentCount;
	  chairSum = chairSum / currentCount;
	  $('#tableTotalSum').val(tableSum);
	  $('#chairTotal').val(chairSum);
	  
	});

	var checkboxList = $('input[type="checkbox"]');
	$('input[type="checkbox"]').siblings().attr( "disabled", "disabled" );


	$( "input[type='checkbox']" )
	  .click(function() {
	    if($( this ).prop( "checked" )){
	    	$(this).siblings().removeAttr( "disabled", "disabled" );
	    }else{
	    	$(this).siblings().attr( "disabled", "disabled" );
	    }
	  });

	  $(document).click(function() { //-----------------------<--<---------костыль---<<
	  	$( "input[type='checkbox']" )
		  .click(function() {
		    if($( this ).prop( "checked" )){
		    	$(this).siblings().removeAttr( "disabled", "disabled" );
		    }else{
		    	$(this).siblings().attr( "disabled", "disabled" );
		    }
		  });
	  });





});//end document.ready