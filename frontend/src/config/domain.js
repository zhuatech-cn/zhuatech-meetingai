/* Copyright 2026 上海如静知华信息科技有限公司 · https://www.zhuatech.cn/ */
export const domain={
 code:'MEETINGAI',systemName:'知华 AI 会议协同平台',englishName:'MEETING INTELLIGENCE WORKSPACE',theme:{primary:'#2f6f68',dark:'#183b39',accent:'#c18445',},
 workspace:'总裁办 / 会议运营中心',fieldWorkspace:'产品例会组',period:'2026-08-04 · 实时运营',liveText:'运营数据于 10:36 更新',fieldContextLabel:'当前工作周期',fieldContext:'八月第一周',fieldUser:'周言',fieldRole:'会议记录员',adminUser:'沈知行',adminRole:'会议运营负责人',
 adminTitle:'会议智能运营中心',adminBreadcrumb:'会议智能运营 / 全局态势',adminSubtitle:'统一查看会议负荷、纪要生成、待确认决议和行动项交付风险。',exportAction:'导出运营报告',createAction:'新建会议任务',
 chartTitle:'会议处理完成趋势',chartSubtitle:'本月实际完成率 / 运营目标',chartLabels:['01日','05日','09日','13日','17日','21日','25日','29日','31日'],loadTitle:'会议领域负荷',loadSubtitle:'开放任务占团队处理能力',recordsTitle:'重点会议任务',recordsSubtitle:'按优先级、期限与待确认排序',issueTitle:'需要关注的运营事项',issueSubtitle:'需要跨团队确认或升级处理',
 recordName:'会议任务',itemName:'会议',unitName:'组织团队',batchName:'会议类型',planName:'议题',doneName:'已决策',exceptionName:'待确认',unitLabel:'项',
 listBreadcrumb:'会议工作台 / 会议任务',listSubtitle:'面向企业会议全流程的智能协同系统，将议程、实时纪要、决议、行动项和会后追踪放进一套可核验工作流。',listSummary:[['本月会议','68'],['本周处理','24'],['待确认','9'],['高优先级','3',true]],tabs:['全部','待处理','进行中','待确认','已归档'],
 fieldBreadcrumb:'会议运营 / 会议记录员工作台',fieldTitle:'我的会议助手',fieldSubtitle:'今天 5 场会议 · 12 个行动项 · 2 项即将逾期',fieldSecondary:'查看工作日历',reportAction:'提交处理反馈',fieldNoticeTitle:'智能服务运行正常',fieldNotice:'任务数据完整率 93.8%',
 steps:[
 '创建议程',
 '会议转写',
 '纪要生成',
 '决议确认',
 '行动追踪'
],documentAction:'查看操作手册',printAction:'导出工作档案',resourceCardTitle:'智能资源状态',resourceValueLabel:'当前处理量',resourceHealthLabel:'服务健康度',quickSubtitle:'常用工作入口',quickActions:[
 [
  '实时纪要',
  '/shopfloor/report',
  '转写、摘要与关键结论'
 ],
 [
  '我的会议',
  '/shopfloor/material',
  '议程、资料与参会人'
 ],
 [
  '行动项',
  '/shopfloor/resources',
  '负责人、期限与交付证据'
 ],
 [
  '发起升级',
  '/shopfloor/andon',
  '争议决议与逾期事项'
 ]
],
 reportDefaults:[6,1],reportTitle:'会议任务处理反馈',reportSubtitle:'记录已决策、待确认和处理建议。',reportSuccess:'会议纪要反馈已提交',reportPlaceholder:'填写处理结论、引用依据、后续要求与负责人',reportFootnote:'提交后自动进入负责人复核队列',ruleTitle:'智能处理质量门禁',ruleSubtitle:'MEETINGAI-POLICY · V1.0',rules:[['人工复核','关键结果必须'],['引用与依据','必须保留'],['权限检查','执行前完成'],['运行评估','每月',true]],fieldTotals:[['68','本月会议'],['3','高优先级'],['9','待确认'],['93.8%','数据完整率']],
 adminMenus:[['/admin','home','运营控制中心'],['/admin/work-orders','order','会议任务'],['/admin/samples','box','会议台账'],['/admin/schedule','calendar','计划与排期'],['/admin/methods','process','规则与模板'],['/admin/reviews','quality','审核与决策'],['/admin/resources','machine','智能资源'],['/admin/report','chart','运营分析']],
 fieldMenus:[['/shopfloor','home','我的会议助手'],['/shopfloor/report','report','处理反馈'],['/shopfloor/tasks','order','我的任务'],['/shopfloor/material','box','会议台账'],['/shopfloor/resources','machine','智能资源'],['/shopfloor/andon','risk','问题升级',3]],
 moduleTitles:{tasks:['我的待办任务','查看优先级、期限与处理状态'],material:['会议台账','查询完整资料、历史版本与责任人'],resources:['智能资源中心','管理知识、模型、连接器和处理服务'],andon:['问题升级','提交重大风险、争议或阻塞事项'],samples:['会议台账','统一管理业务对象、资料与上下游依赖'],schedule:['计划与排期','协调负责人、参与方和交付窗口'],methods:['规则与模板','维护处理口径、质量标准和模板'],reviews:['审核与决策','记录确认、驳回和复核要求'],report:['运营分析','分析质量、效率、异常和处理周期']},
 tagline:'让会议讨论真正沉淀为可执行结果',storyTitle:'让会议讨论真正沉淀为可执行结果',storyText:'面向企业会议全流程的智能协同系统，将议程、实时纪要、决议、行动项和会后追踪放进一套可核验工作流。',pattern:[2,4,7,9,12,15,18,21,24,27,29,31],loginStats:[['60','本月会议'],['93.8%','数据完整率'],['3','高优先级']],loginTitle:'会议智能运营中心',adminDemo:'管理 / 运营 / 分析',fieldDemo:'任务 / 处理 / 反馈'
}
export const records=[
 {no:'MTG-260804-018',name:'季度经营复盘会',code:'Q3-BUSINESS-REVIEW',unit:'经营分析组',group:'总裁办',plan:24,done:16,exception:3,due:'08-04',batch:'经营复盘',status:'整理中',progress:67,priority:'加急'},
 {no:'MTG-260804-021',name:'产品路线图评审',code:'PRODUCT-ROADMAP',unit:'产品例会组',group:'产品中心',plan:18,done:8,exception:2,due:'08-04',batch:'决策会',status:'待确认',progress:44,priority:'关注'},
 {no:'MTG-260804-026',name:'重点客户交付协调会',code:'KEY-ACCOUNT-DELIVERY',unit:'客户成功组',group:'交付中心',plan:12,done:0,exception:0,due:'08-05',batch:'协调会',status:'待开始',progress:12,priority:'加急'},
 {no:'MTG-260803-015',name:'研发周例会',code:'RND-WEEKLY',unit:'研发效能组',group:'研发中心',plan:20,done:20,exception:1,due:'08-03',batch:'周例会',status:'已归档',progress:100,priority:'正常'},
 {no:'MTG-260804-031',name:'招聘计划校准会',code:'HIRING-CALIBRATION',unit:'人才发展组',group:'人力资源中心',plan:16,done:11,exception:2,due:'08-06',batch:'评审会',status:'追踪中',progress:76,priority:'关注'}
]
export const resources=[{code:'BOT-STT-01',name:'实时语音转写服务',unit:'会议运营中心',status:'运行中',health:96,value:'28',valueUnit:'场',note:'普通话与中英文混说'},{code:'BOT-SUM-02',name:'纪要与决议抽取引擎',unit:'AI 能力中心',status:'复核中',health:88,value:'42',valueUnit:'份',note:'3 份纪要等待主持人确认'},{code:'BOT-ACT-03',name:'行动项追踪助手',unit:'协同办公中心',status:'预警',health:79,value:'67',valueUnit:'项',note:'2 项负责人尚未确认'}]
export const reviews=[{no:'MIN-260804-032',title:'季度经营会决议确认',type:'主持人确认',detail:'6 项决议 · 沈知行',result:'待确认'},{no:'MIN-260804-011',title:'产品路线图纪要校对',type:'纪要复核',detail:'18 段引用 · 周言',result:'通过'},{no:'ACT-260803-018',title:'研发周会行动项检查',type:'交付跟踪',detail:'逾期 2 项',result:'异常'}]
export const adminMetrics=[['本月会议','68','较上月新增 6','blue'],['本周处理','24','平均周期 2.6 天','green'],['待确认','9','其中 3 项临近期','orange'],['高优先级','3','需要负责人决策','red']]
export const fieldMetrics=[['我的任务','6','3 项高优先级','blue'],['今日已处理','18','质量检查已完成','green'],['待确认','9','3 项临近期限','orange'],['数据完整率','93.8%','较上周提升 2.4%','slate']]
export const chartActual=[18,26,37,45,56,63,72,81,87],chartTarget=[20,30,40,50,60,70,80,90,96]
export const loads=[
 [
  '经营与战略会议',
  86,
  '开放会议 8 场'
 ],
 [
  '产品与研发会议',
  78,
  '开放会议 11 场'
 ],
 [
  '客户交付会议',
  72,
  '开放会议 6 场'
 ],
 [
  '职能协同会议',
  64,
  '开放会议 5 场'
 ]
]
export const issues=[
 [
  '决议',
  '季度预算调整尚未完成财务确认',
  '影响 Q3 采购计划 · 截止 08-05',
  '待确认'
 ],
 [
  '行动项',
  '重点客户交付计划缺少技术负责人',
  '涉及 3 个关键节点',
  '补充中'
 ],
 [
  '纪要',
  '产品路线图会议存在 4 段低置信转写',
  '需参会人完成原文校对',
  '待处理'
 ]
].map(x=>({type:x[0],title:x[1],detail:x[2],status:x[3]}))
