define(function(require) {

    var List = require('../../data/List');
    var zrUtil = require('zrender/core/util');
    var SeriesModel = require('../../model/Series');

    return SeriesModel.extend({

        type: 'series.parallel',

        dependencies: ['parallel'],

        getInitialData: function (option, ecModel) {
            var dimensions = ecModel.getComponent(
                'parallel', this.get('parallelIndex')
            ).dimensions;

            dimensions = zrUtil.map(dimensions, function (dim) {
                return dim.name;
            });

            var list = new List(dimensions, this);
            list.initData(option.data);

            return list;
        },

        defaultOption: {
            zlevel: 0,                  // 一级层叠
            z: 2,                       // 二级层叠

            coordinateSystem: 'parallel',
            parallelIndex: 0,

            label: {
                normal: {
                    show: false
                    // formatter: 标签文本格式器，同Tooltip.formatter，不支持异步回调
                    // position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为
                    //           'inside'|'left'|'right'|'top'|'bottom'
                    // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                },
                emphasis: {
                    show: false
                    // formatter: 标签文本格式器，同Tooltip.formatter，不支持异步回调
                    // position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为
                    //           'inside'|'left'|'right'|'top'|'bottom'
                    // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                }
            },
            itemStyle: {
                normal: {
                    // color: 各异
                },
                emphasis: {
                    // color: 各异,
                }
            },
            lineStyle: {
                normal: {
                    width: 2,
                    opacity: 0.7,
                    type: 'solid',
                    shadowColor: 'rgba(0,0,0,0)', //默认透明
                    shadowBlur: 0,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0
                }
            },
            // areaStyle: {

            // },
            // smooth: false,
            // 拐点图形类型
            symbol: 'emptyCircle',
            // 拐点图形大小
            symbolSize: 4,
            // 拐点图形旋转控制
            // symbolRotate: null,
            // 标志图形默认只有主轴显示（随主轴标签间隔隐藏策略）
            showAllSymbol: false
        }
    });
});