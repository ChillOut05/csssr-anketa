import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'jquery-ui';
import autosize from 'autosize';

$(() => {
	svg4everybody();
});

// slider desktop
const sliderValue = [1, 4, 8, 16];

$(function () {
	$( '.slider__range_desktop' ).slider({
		value: 4,
		min: 1,
		max: 16,
		step: 1,
		animate: 300,
		slide: ( event, ui ) => {
			if ( sliderValue.indexOf(ui.value) === -1 ) {
				return false;
			}
		}
	});
});

// slider mobile
const sliderValueMobile = [1, 9, 13, 16];

$(function () {
	$( '.slider__range_mobile' ).slider({
		orientation: 'vertical',
		value: 13,
		min: 1,
		max: 16,
		step: 1,
		animate: 300,
		slide: ( event, ui ) => {
			if ( sliderValueMobile.indexOf(ui.value) === -1 ) {
				return false;
			}
		}
	});
});

// textarea autosize
autosize($('.about__textarea'));
