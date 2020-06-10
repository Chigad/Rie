const survey = [
    {
        meta: { title: '用能月报' },
        component: 'survey/monthly'
    },
    {
        meta: { title: '运维中心' },
        component: 'survey/map'
    },
    {
        meta: { title: '数据面板' },
        component: 'survey/datav'
    }
]

const monitor = [
    {
        meta: { title: '运行视图' },
        component: 'monitor/drawing'
    },
    {
        meta: { title: '设备监测' },
        component: 'monitor/device'
    },
    {
        meta: { title: '运行报表' },
        component: 'monitor/run'
    },
    {
        meta: { title: '极值报表' },
        component: 'monitor/limit'
    },
    {
        meta: { title: '供热效果' },
        component: 'monitor/effect'
    }
]

const analyses = [
    {
        meta: { title: '用能曲线' },
        component: 'analyses/curve'
    },
    {
        meta: { title: '同比分析' },
        component: 'analyses/contrast'
    },
    {
        meta: { title: '环比分析' },
        component: 'analyses/ring'
    },
    {
        meta: { title: '用能集抄' },
        component: 'analyses/limit'
    },
    {
        meta: { title: '用能报表' },
        component: 'analyses/table'
    },
    {
        meta: { title: '能耗分析' },
        component: 'analyses/energy'
    }
]

const forecast = [
    {
        meta: { name: '供热模型' },
        component: 'forecast/modules/heating'
    },
    {
        meta: { name: '供热预测' },
        component: 'forecast/heating'
    },
    {
        meta: { name: '气象预测' },
        component: 'forecast/weather'
    }
]

const func = [
    {
        meta: { title: '遥信事件' },
        component: 'func/yx'
    },
    {
        meta: { title: '越限事件' },
        component: 'func/skip'
    },
    {
        meta: { title: '操作日志' },
        component: 'func/log/oper'
    },
    {
        meta: { title: '短信日志' },
        component: 'func/log/short'
    },
    {
        meta: { title: '运行日志' },
        component: 'func/log/run'
    }
]

const env = [
    {
        meta: { title: '环境监测' },
        component: 'env/monitor'
    },
    {
        meta: { title: '视频监控' },
        component: 'env/video'
    },
    {
        meta: { title: '环境温湿度' },
        component: 'env/wsd'
    },
    {
        meta: { title: '网关状态' },
        component: 'env/status/gateway'
    }
]

const devops = [
    {
        meta: { title: '任务管理' },
        component: 'devops/manage'
    },
    {
        meta: { title: '巡检记录' },
        component: 'devops/log/xj'
    },
    {
        meta: { title: '缺陷记录' },
        component: 'devops/log/qx'
    },
    {
        meta: { title: '员工定位' },
        component: 'devops/staff'
    },
    {
        meta: { title: '绩效考核' },
        component: 'devops/inspect'
    }
]

const user = [
    {
        meta: { title: '使用报告' },
        component: 'user/report'
    },
    {
        meta: { title: '文档管理' },
        component: 'user/file'
    }
]

const system = [
    {
        meta: { title: '组织架构' },
        component: 'system/framework'
    },
    {
        meta: { title: '参数设置' },
        component: 'system/setting'
    },
    {
        meta: { title: '多级权限' },
        component: 'system/power'
    }
]

const routes = [
    {
        path: '/login',
        component: 'Login',
        meta: { isPublic: true }
    },
    {
        path: '/',
        redirect: { name: 'index' },
        component: 'Home',
        children: [
            {
                meta: { title: '后台首页' },
                component: 'index/index'
            },
            ...survey,
            ...monitor,
            ...analyses,
            ...forecast,
            ...func,
            ...env,
            ...devops,
            ...user,
            ...system
        ]
    }
]

export default routes
