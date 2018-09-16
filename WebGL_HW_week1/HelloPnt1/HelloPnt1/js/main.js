﻿var VSHADEDR_SOURCE =
	'void main() {\n' +
	' gl_Position = vec4(0.0, 0.0, 0.0, 0.0, 1.0);\n' +
	' gl_PointSize = 10.00;\n' +
	'}\n';

var FSHADER_SOURCE =
	'void main() {\n' +
	' gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n' +
	'}\n';

function main() {
	var canvas = document.getElementById('webgl');

	var gl = getWebGLContext(canvas);
	if (!gl) {
		console.log('failed to get the rendering context for WebGL');
		return;
	}

	if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
		console.log('failed to initialize shaders.');
	}

	gl.clearColor(0, 0, 0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);

	gl.drawArrays(gl.POINTS, 0, 1);
}
