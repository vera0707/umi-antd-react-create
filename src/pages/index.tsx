import React from 'react';
import { Button,Form, Row, Col, Card,Icon,Popover, Divider, Tabs, Table } from 'antd';
import {connect} from 'dva';
import withRouter from 'umi/withRouter';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import welcomeSvg from '@/assets/welcome.svg';
import styles from './index.less';

const { TabPane } = Tabs;

const LoginComponment: React.FC = props => {
  const {isLogin} = props;

  if(!isLogin) return (
    <div className={styles.container + ' ' + styles.welcome}>
      <img src={welcomeSvg} className={styles.bg} alt="logo" />
      <div className={styles.title}>歡迎</div>
      <div className={styles.note}>問靈/縛靈/祭靈/喚靈/攝靈</div>
    </div>
  );

  function activeLastPointToolip(chart) {
    const points = chart.series[0].points;
    chart.tooltip.refresh(points[points.length -1]);
  }

  const pieOptions: Highcharts.Options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    credits: {
      enabled: false
    },
    title: {
      text: '2018年1月浏览器市场份额'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: {
            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
          }
        }
      }
    },
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
        name: 'Chrome',
        y: 61.41,
        sliced: true,
        selected: true
      }, {
        name: 'Internet Explorer',
        y: 11.84
      }, {
        name: 'Firefox',
        y: 10.85
      }, {
        name: 'Edge',
        y: 4.67
      }, {
        name: 'Safari',
        y: 4.18
      }, {
        name: 'Sogou Explorer',
        y: 1.64
      },{
        name: 'Opera',
        y: 1.6
      }, {
        name: 'QQ',
        y: 1.2
      }, {
        name: 'Other',
        y: 2.61
      }]
    }],
  };
  const lineOptions: Highcharts.Options = {
    chart: {
      type: 'spline',
      marginRight: 10,
      events: {
        load: function () {
          var series = this.series[0], chart = this;
          //activeLastPointToolip(chart);
          //setInterval(function () {
          //  var x = (new Date()).getTime(), // 当前时间
          //    y = Math.random();          // 随机值
          //  series.addPoint([x, y], true, true);
          //  activeLastPointToolip(chart);
          //}, 1000);
        }
      }
    },
    credits: {
      enabled: false
    },
    title: {
      text: '动态模拟实时数据'
    },
    xAxis: {
      type: 'datetime',
      tickPixelInterval: 150
    },
    yAxis: {
      title: {
        text: null
      }
    },
    tooltip: {
      formatter: function () {
        return '<b>' + this.series.name + '</b><br/>' +
          Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
          Highcharts.numberFormat(this.y, 2);
      }
    },
    legend: {
      enabled: false
    },
    series: [{
      name: '随机数据',
      data: (function () {
        // 生成随机值
        var data = [],
          time = (new Date()).getTime(),
          i;
        for (i = -19; i <= 0; i += 1) {
          data.push({
            x: time + i * 1000,
            y: Math.random()
          });
        }
        return data;
      }())
    }]
  };

  const columnrangeOptions: Highcharts.Options = {
    chart: {
      type: 'column'
    },
    credits: {
      enabled: false
    },
    title: {
      text: '按性别划分的水果消费总量'
    },
    xAxis: {
      categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
    },
    yAxis: {
      allowDecimals: false,
      min: 0,
      title: {
        text: '水果数量'
      }
    },
    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '</b><br/>' +
          this.series.name + ': ' + this.y + '<br/>' +
          '总量: ' + this.point.stackTotal;
      }
    },
    plotOptions: {
      column: {
        stacking: 'normal'
      }
    },
    series: [{
      name: '小张',
      data: [5, 3, 4, 7, 2],
      stack: 'male' // stack 值相同的为同一组
    }, {
      name: '小潘',
      data: [3, 4, 4, 2, 5],
      stack: 'male'
    }, {
      name: '小彭',
      data: [2, 5, 6, 2, 1],
      stack: 'female'
    }, {
      name: '小王',
      data: [3, 0, 4, 4, 3],
      stack: 'female'
    }]
  };


  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return (
    <div className={styles.container}>
      <Row type="flex" gutter={[16, 16]}>
        <Col span={8}>
          <Card className={styles.cardTyp1}>
            <div className={styles.title}>
              <div className={styles.color999}>总销售额</div>
              <Popover content="指示说明">
                <Icon type="info-circle" />
              </Popover>
            </div>
            <div className={styles.totalCount}>¥ 126,560</div>
            <div className={styles.color666} style={{marginTop: 20,fontSize: 14}}>周同比12% 日同比11%</div>
            <Divider />
            <div className={styles.color666}>日销售额￥12,423</div>
          </Card>
        </Col>
        <Col span={8}>
          <Card className={styles.cardTyp1}>
            <div className={styles.title}>
              <div className={styles.color999}>访问量</div>
              <Popover content="指示说明">
                <Icon type="info-circle" />
              </Popover>
            </div>
            <div className={styles.totalCount}>8,846</div>
            <div className={styles.color666} style={{marginTop: 20,fontSize: 14}}>周同比12% 日同比11%</div>
            <Divider />
            <div className={styles.color666}>日访问量1,2343</div>
          </Card>
        </Col>
        <Col span={8}>
          <Card className={styles.cardTyp1}>
            <div className={styles.title}>
              <div className={styles.color999}>运营活动效果</div>
              <Popover content="指示说明">
                <Icon type="info-circle" />
              </Popover>
            </div>
            <div className={styles.totalCount}>78%</div>
            <div className={styles.color666} style={{marginTop: 20,fontSize: 14}}>周同比12% 日同比11%</div>
            <Divider />
            <div className={styles.color666}>转化率60%</div>
          </Card>
        </Col>
      </Row>

      <Row type="flex" gutter={[16, 16]} style={{marginTop: 20}}>
        <Col span={24}>
          <Card>
            <Tabs defaultActiveKey="1">
              <TabPane tab="折线图" key="1">
                <HighchartsReact
                  highcharts={Highcharts}
                  options={lineOptions}
                />
              </TabPane>
              <TabPane tab="柱形范围图" key="2">
                <HighchartsReact
                  highcharts={Highcharts}
                  options={columnrangeOptions}
                />
              </TabPane>
              <TabPane tab="饼图" key="3">
                <HighchartsReact
                  highcharts={Highcharts}
                  options={pieOptions}
                />
              </TabPane>
            </Tabs>
          </Card>
        </Col>
      </Row>

      <Row type="flex" gutter={[16, 16]} style={{margin: '20px 0 50px'}}>
        <Col  span={24}>
          <Card>
            <Table dataSource={dataSource} columns={columns} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default withRouter(connect(({ user })=>({
  currentUser: user.currentUser,
  isLogin: user.isLogin,
}))(Form.create({})(LoginComponment)));
