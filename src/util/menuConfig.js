// 这里暴露出的是左侧菜单列表的资源
const menuList = [
    {
        title: '首页',
        key: '/admin/home'
    },
    {
        title: "UI",
        key: '/admin/ui',
        children: [
            {
                title: '按钮',
                key: '/admin/ui/buttons'
            },
            {
                title: '弹框',
                key: '/admin/ui/modals'
            },
            {
                title: 'Loading',
                key: '/admin/ui/loading'
            },
            {
                title: '通知提醒',
                key: '/admin/ui/notification'
            },
            {
                title: '全局Message',
                key: '/admin/ui/message'
            },
            {
                title: 'Tab标签',
                key: '/admin/ui/tabs'
            },
            {
                title: '图片画廊',
                key: '/admin/ui/gallery'
            },
            {
                title: '轮播图',
                key: '/admin/ui/carousel'
            }
        ]
    },
    {
        title: '表单',
        key: '/admin/form',
        children: [
            {
                title: '登录',
                key: '/admin/form/login'
            },
            {
                title: '注册',
                key: '/admin/ui/reg'
            },
            {
                title: '表单',
                key: '/admin/ui/from'
            }
        ]
    },
    {
        title: '表格',
        key: '/admin/table',
        children: [
            {
                title: '基础表格',
                key: '/admin/table/basic'
            },
            {
                title: '高级表格',
                key: '/admin/table/high'
            }
        ]
    },
    {
        title: '富文本',
        key: '/admin/rich'
    },
    {
        title: '城市管理',
        key: '/admin/city'
    },
    {
        title: '员工管理',
        key: '/admin/user'
    },
    {
        title: '车辆地图',
        key: '/admin/bikeMap'
    },
    {
        title: '图标',
        key: '/admin/charts',
        children: [
            {
                title: '柱形图',
                key: '/admin/charts/bar',
                children: [
                    {
                        title: 'xx',
                        key: '/admin/charts/bar'
                    },
                    {
                        title: 'yy',
                        key: '/admin/charts/pic'
                    }
                ]
            },
            {
                title: '饼图',
                key: '/admin/charts/pic'
            },
            {
                title: '折线图',
                key: '/admin/table/line'
            }
        ]
    },
    {
        title: '权限设置',
        key: '/admin/permission'
    }
];
export default menuList;