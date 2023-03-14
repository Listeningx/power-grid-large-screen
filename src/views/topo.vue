<template>
    <div id="root">
        <div id="main" style="width: 600px;height:400px;"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts';

import $ from 'jquery'

export default{
    name:'TopoView',
    mounted(){
        var ROOT_PATH = 'https://echarts.apache.org/examples';

        var chartDom = document.getElementById('main');
        var myChart = echarts.init(chartDom);
        var option;

        myChart.showLoading();
        myChart.showLoading();
        $.get(ROOT_PATH + '/data/asset/data/webkit-dep.json', function (webkitDep) {
        myChart.hideLoading();
        option = {
            legend: {
            data: ['HTMLElement', 'WebGL', 'SVG', 'CSS', 'Other']
            },
            series: [
            {
                type: 'graph',
                layout: 'force',
                animation: false,
                label: {
                position: 'right',
                formatter: '{b}'
                },
                draggable: true,
                data: webkitDep.nodes.map(function (node, idx) {
                node.id = idx;
                return node;
                }),
                categories: webkitDep.categories,
                force: {
                edgeLength: 5,
                repulsion: 20,
                gravity: 0.2
                },
                edges: webkitDep.links
            }
            ]
        };
        myChart.setOption(option);
        });

        option && myChart.setOption(option);

    }

}

</script>