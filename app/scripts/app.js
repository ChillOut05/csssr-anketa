import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'jquery-ui';
import autosize from 'autosize';

$(() => {
	svg4everybody();
});

// slider
const sliderValue = [1, 4, 8, 16];

$(function () {
	$( '.slider__range' ).slider({
		value: 4,
		min: 1,
		max: 16,
		step: 1,
		animate: 300,
		slide: function ( event, ui ) {
			if ( sliderValue.indexOf(ui.value) === -1 )return false;
		}
	});
});

// textarea autosize
autosize($('.about__textarea'));
