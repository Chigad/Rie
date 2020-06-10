export default {
    token: {
        // 缓存中token-name
        name: 'token',
        // 请求头token-key
        key: 'token'
    },
    http: {
        baseURL: '',
        // 跨域凭证
        voucher: true,
        timeout: 50000
    },
    company: {
        name: '新能源智慧管理平台',
        copyright: '安科瑞电气股份有限公司',
        address: '上海市嘉定区育绿路253号 ',
        tele: '187 0212 8769',
        icp: '沪ICP备05031232号-34',
        gwa: '沪公网安备31011402007268号'
    },
    navbar: [
        {
            name: '概况概况',
            icon: 'icon-computer',
            type: 'surver',
            list: [
                {
                    name: '用能月报',
                    path: 'survey_monthly'
                },
                {
                    name: '能源站状态',
                    path: 'index'
                },
                {
                    name: '运维中心',
                    path: 'survey_map'
                },
                {
                    name: '可视化面板',
                    path: 'survey_datav'
                }
            ]
        },
        {
            name: '能源监测',
            icon: 'icon-computer',
            type: 'monitor',
            list: [
                {
                    name: '运行视图',
                    path: 'monitor_drawing'
                },
                {
                    name: '设备监测',
                    path: 'monitor_device'
                },
                {
                    name: '运行报表',
                    path: 'monitor_run'
                },
                {
                    name: '极值报表',
                    path: 'monitor_limit'
                },
                {
                    name: '供热效果',
                    path: 'monitor_effect'
                }
            ]
        },
        {
            name: '能耗分析',
            icon: 'icon-computer',
            type: 'analyses',
            list: [
                {
                    name: '用能曲线',
                    path: 'analyses_curve'
                },
                {
                    name: '同比分析',
                    path: 'analyses_contrast'
                },
                {
                    name: '环比分析',
                    path: 'analyses_ring'
                },
                {
                    name: '用能集抄',
                    path: 'analyses_limit'
                },
                {
                    name: '用能报表',
                    path: 'analyses_table'
                },
                {
                    name: '能耗分析',
                    path: 'analyses_energy'
                }
            ]
        },
        {
            name: '能耗预测',
            icon: 'icon-computer',
            type: 'forecast',
            list: [
                {
                    name: '供热模型',
                    path: 'forecast_modules_heating'
                },
                {
                    name: '供热预测',
                    path: 'forecast_heating'
                },
                {
                    name: '气象预测',
                    path: 'forecast_weather'
                }
            ]
        },
        {
            name: '事件记录',
            icon: 'icon-computer',
            type: 'func',
            list: [
                {
                    name: '设备报警',
                    path: 'func_yx'
                },
                {
                    name: '环境报警',
                    path: 'func_skip'
                },
                {
                    name: '操作日志',
                    path: 'func_log_oper'
                },
                {
                    name: '短信日志',
                    path: 'func_log_short'
                },
                {
                    name: '运行日志',
                    path: 'func_log_run'
                }
            ]
        },
        {
            name: '运行环境',
            icon: 'icon-computer',
            type: 'env',
            list: [
                {
                    name: '环境监测',
                    path: 'env_monitor'
                },
                {
                    name: '视频监控',
                    path: 'env_video'
                },
                {
                    name: '环境温湿度',
                    path: 'env_wsd'
                },
                {
                    name: '网关状态',
                    path: 'env_status_gateway'
                }
            ]
        },
        {
            name: '运维管理',
            icon: 'icon-computer',
            type: 'devops',
            list: [
                {
                    name: '任务管理',
                    path: 'devops_manage'
                },
                {
                    name: '巡检记录',
                    path: 'devops_log_xj'
                },
                {
                    name: '缺陷记录',
                    path: 'devops_log_qx'
                },
                {
                    name: '员工定位',
                    path: 'devops_staff'
                },
                {
                    name: '绩效考核',
                    path: 'devops_inspect'
                }
            ]
        },
        {
            name: '用户报告',
            icon: 'icon-computer',
            type: 'user',
            list: [
                {
                    name: '使用报告',
                    path: 'user_report'
                },
                {
                    name: '文档管理',
                    path: 'user_file'
                }
            ]
        },
        {
            name: '系统管理',
            icon: 'icon-computer',
            type: 'system',
            list: [
                {
                    name: '组织架构',
                    path: 'system_framework'
                },
                {
                    name: '参数设置',
                    path: 'system_setting'
                },
                {
                    name: '多级权限',
                    path: 'system_power'
                }
            ]
        }
    ],
    map: {
        ak: 'HE5BlZinsvqCISbVv2ABE1DdDWPKgtGW'
    }
}
