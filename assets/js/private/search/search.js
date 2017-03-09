$(document).ready(function(){	//страница загрузилась
			$('ul.akkordeon li > p').click(function(){	//при клике на пункт меню:
				$(this).toggleClass('active');		//делаем данный пункт активным/неактивным
				$(this).next('div').slideToggle(200);	//раскрываем/скрываем следующий за "кликнутым" p блок div с эффектом slide
			});
		});
