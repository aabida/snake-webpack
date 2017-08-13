'use strict';

window.onload = function() {
	initContext();
};

function initContext() {
	canvas = document.getElementById("gameCanvas");
	canvasContext = canvas.getContext('2d');
}

