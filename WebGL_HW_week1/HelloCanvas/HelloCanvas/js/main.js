function main() {
	var canvas = document.getElementById('webg1');

	var gl = getWebGLContext(canvas);
	if (!gl) {
		console.log('failed to get the rendering context for WebGL');
		return;
	}

	gl.clearColor(0, 0, 0, 0, 1.0);

	gl.clear(gl.COLOR_BUFFER_BIT);
}