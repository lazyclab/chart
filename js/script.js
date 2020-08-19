anychart.onDocumentReady(function() {
    // The data used in this sample can be obtained from the CDN
    // https://cdn.anychart.com/samples/heat-map-charts/heat-map-with-scroll/data.json
    anychart.data.loadJsonFile('https://cdn.anychart.com/samples/heat-map-charts/heat-map-with-scroll/data.json', function(data) {
        // Creates Heat Map
        var chart = anychart.heatMap(data);

        // Sets colorScale
        var colorScale = anychart.scales.ordinalColor();
        // Sets colors for all points
        colorScale.ranges([
            { less: 25000, color: "#fff9c4" },
            { from: 25000, to: 45000, color: "#ffe082" },
            { from: 45000, to: 65000, color: "#ffca28" },
            { from: 65000, to: 80000, color: "#ffa000" },
            { greater: 80000, color: "#ff6f00" }
        ]);
        chart.colorScale(colorScale);

        // Sets chart title
        chart.title()
            .enabled(true)
            .text("Sales Team Achievements during 2014")
            .padding([0, 0, 20, 0]);

        // Sets chart labels
        chart.labels()
            .enabled(true)
            .format('${%Heat}');

        // Sets Scrolls for Axes
        chart.xScroller(true);
        chart.yScroller(true);

        // Sets starting zoom for Axes
        chart.xZoom().setToPointsCount(8);
        chart.yZoom().setToPointsCount(6);

        // Sets chart and hover chart settings
        chart.stroke('#fff');
        chart.hovered()
            .stroke('6 #fff')
            .fill('#545f69')
            .labels({ 'fontColor': '#fff' });

        // Sets legend
        chart.legend()
            .enabled(true)
            .align('center')
            .position('center-bottom')
            .itemsLayout('horizontal')
            .padding([20, 0, 0, 0]);

        // set container id for the chart
        chart.container('container');
        // initiate chart drawing
        chart.draw();
    });
});