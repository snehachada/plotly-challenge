function gauge_init(metadata) {
    let data = [
        {
            domain: { x: [0, 2], y: [0, 2] },
            value: metadata.wfreq,
            title: { text: "Belly Button Washing Frequency" },
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                axis: { range: [null, 9] }
            }
        }
    ];
    
    let layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
    Plotly.newPlot('gauge', data, layout);
}