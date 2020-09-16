import React, { useRef, useLayoutEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const BarChart = () => {
  const chart = useRef(null);

  useLayoutEffect(() => {
    let x = am4core.create("chartdiv", am4charts.XYChart);

    x.paddingRight = 20;

    let data = [];

    for (let i = 1; i < 190; i++) {
      const calories = Math.floor(Math.random() * (3000 - 1000 + 1) + 1000);
      data.push({ date: new Date(2020, 8, i), value: calories });
    }

    x.data = data;

    let dateAxis = x.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;
    valueAxis.title.text = "Calories";
    valueAxis.min = 0;

    let series = x.series.push(new am4charts.ColumnSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";
    series.columns.template.fill = am4core.color("#d3d3d3");
    series.columns.template.stroke = am4core.color("#d3d3d3");

    series.tooltipText = "{valueY.value}";
    x.cursor = new am4charts.XYCursor();


    chart.current = x;

    return () => {
      x.dispose();
    }
  }, []);

  return (
    <div id="chartdiv" style={{ width: "100%" }}></div>
  )
}

export default BarChart;
