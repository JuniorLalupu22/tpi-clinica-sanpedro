const pluginGrafico = () => {
    return {
		id: 'printCanva',
		beforeDraw: (chart) => {
			const ctx = chart.canvas.getContext('2d');
			ctx.save();
			ctx.fillStyle = 'white';
			ctx.fillRect(0, 0, chart.width, chart.height);
			ctx.restore();
		}
	};

    // return plugin
}

export default pluginGrafico