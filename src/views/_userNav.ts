export default [
    {
        name: '요약 보고',
        icon: 'ico_insert_chart_outline.svg',
        routeName: 'DashboardOverview'
    },
    {
        name: '매출관리',
        icon: 'ico_add_chart_active.svg',
        children: [
            {
                name: '세금계산서'
            },
            {
                name: '신용카드'
            },
            {
                name: '현금영수증'
            },
        ]
    },
    {
        name: '매입관리',
        icon: 'ico_wysiwyg.svg',
        children: [
            {
                name: '세금계산서'
            },
            {
                name: '신용카드'
            },
            {
                name: '현금영수증'
            },
        ]
    },
    {
        name: '업무지원',
        icon: 'ico_support_agent.svg',
        children: [
            {
                name: '증명서 발급'
            },
            {
                name: '서식 문서함'
            },
        ]
    },
    {
        name: '인사',
        icon: 'ico_people_outline.svg',
        children: [
            {
                name: '직원 관리'
            },
            {
                name: '급여 관리'
            },
            {
                name: '연말 정산'
            },
            {
                name: '인사이트'
            },
        ]
    },
    {
        name: '세무',
        icon: 'ico_receipt_long.svg',
        children: [
            {
                name: '원천세'
            },
            {
                name: '부가세'
            },
            {
                name: '법인세'
            }
        ]
    }
]