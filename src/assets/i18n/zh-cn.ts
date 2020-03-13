/* 国际化zh-cn */

module.exports = {
  language: '中文-简体',
  common: {
    deleteConfirm: '确定要删除吗？',
    cancel: '取消',
    confirm: '确认',
    noData: '暂无数据',
    deleteSuccess: '删除成功~',
    cancelSuccess: '取消成功~',
    saveSuccess: '保存成功~',
    numberHint: '请输入数字',
    enable: '启用',
    disable: '不启用',
    searchHint: '请输入关键词搜索~',
    searchNothing: '没有搜到哦，请确认输入正确关键词~',
    completed: '已完成'
  },
  menu: {
    home: '首页',

    userInfo: '个人信息',
    setting: '设置',
    exit: '退出',

    sysadmin: '系统管理',
    noticeManage: '公告管理',
    userManage: '用戶管理',
    roleManage: '角色管理',

    room: '会议室',
    siteManage: '厂区管理',
    roomManage: '会议室管理'

  },
  login: {
    byAccount: '账号密码登录',
    account: '账号',
    pass: '密码',
    submit: '登录',
    reset: '重置',
    title: ' 会议室预订系统',
    accHint: '请输入账号',
    passHint: '请输入密码',
    login: '登录',
    language: '请选择语言',
    byiProud: '员宝扫码登录'
  },
  footer: {
    corperation: '有限公司'
  },
  schedulerDialog: {
    title: '会议室预定',
    subject: '会议主题',
    remark: '备注',
    contact: '联系电话',
    meetingTime: '会议时间',
    chooseDate: '选择日期',
    startTime: '开始时间',
    endTime: '结束时间',
    cancel: '取消',
    delete: '删除',
    save: '保存',
    closeHint: '确认关闭？',
    cancelHint: '确认取消会议室预订？',
    subjectHint: '请输入会议主题',
    contactHint: '请输入联系方式',
    dateInputHint: '请输入会议日期',
    dateValidHint: '会议日期不能是今天之前',
    startHint: '请选择开始时间',
    endHint: '请选择结束时间',
    timeValidHint: '会议开始时间必须小于结束时间'

  },
  room: {
    all: '全部',
    room: '会议室',
    roomManage: '会议室管理',
    add: '添加',
    dialogTitle: '添加会议室',
    dialogTitle1: '编辑会议室',
    name: '名称',
    site: '厂区',
    valid: '有效',
    device: '设备',
    position: '位置',
    deptCode: '部门代码',
    pleaseChoose: '请选择',
    cancel: '取消',
    confirm: '确定',
    date: '日期',
    operation: '操作',
    edit: '编辑',
    delete: '删除',
    siteHint: '请选择会议室厂区',
    nameHint: '请填写会议室名称'
  },
  site: {
    dialogTitle: '添加会议室厂区',
    dialogTitle1: '编辑会议室厂区',
    code: '编码',
    name: '名称',
    level: '等级',
    sort: '排序',
    status: '有效',
    description: '描述',
    remark: '备注',
    creator: '创建人',
    createTime: '创建时间',
    updator: '修改人',
    updateTime: '修改时间',
    cancel: '取消',
    confirm: '确认',
    title: '会议室厂区',
    add: '添加',
    operation: '操作',
    edit: '编辑',
    delete: '删除',
    labelHint: '请输入厂区编码',
    nameHint: '请输入厂区名称'
  },
  role: {
    roleManage: '角色管理',
    add: '添加',
    addRole: '添加角色',
    editRole: '编辑角色',
    code: '角色代码',
    name: '角色名称',
    description: '角色描述',
    permission: '角色权限',
    cancel: '取消',
    confirm: '確定',
    tag: '角色类型',
    admin: '系统',
    operation: '操作',
    edit: '编辑',
    delete: '删除',
    codeHint: '请输入角色编码',
    nameHint: '请输入角色名称',
    descripHint: '请输入角色描述'
  },
  user: {
    userManage: '用戶管理',
    editUser: '编辑用户',
    empNO: '工号',
    name: '姓名',
    site: '厂区',
    role: '角色',
    cancel: '取消',
    confirm: '确定',
    operation: '操作',
    edit: '编辑',
    searchPlaceholder: '输入工号搜索...',
    searchUser: '搜索用户',
    deleteRoleSet: '删除角色设定'
  },
  notice: {
    notice: '公告通知',
    noticeManage: '公告管理',
    add: '添加',
    dialogTitle: '添加公告通知',
    content: '內容',
    ableSite: '可见厂区',
    pleaseChoose: '请选择',
    cancel: '取消',
    confirm: '确定',
    modifyDate: '修改日期',
    modifyUser: '修改人',
    searchPlaceholder: '输入关键字搜索',
    edit: '编辑',
    delete: '删除',
    ableSiteHint: '请选择可见厂区',
    contentHint: '请输入内容'
  },
  profile: {
    reservation: '我的预定',
    timeline: '我的足跡',
    about: '关于我',
    hello: '你好！',
    role: '角色',
    permission: '权限'
  },
  timeline: {
    addSite: '添加厂区',
    addRoom: '添加会议室',
    addNotice: '添加公告',
    addRole: '添加角色',
    setUserRole: '设置用戶角色',
    reserveRoom: '预订会议室',
    addSiteContent: '你添加了一个会议室厂区：',
    addRoomContent: '你添加了一个会议室：',
    addNoticeContent: '你添加了一个公告：',
    addRoleContent: '你添加了一个角色：',
    setUserRoleContent: '你设置了',
    to: '为',
    reserveRoomContent: '你预订了一个会议室：'
  },
  setting: {
    mySetting: '个人设置',
    myEmail: '我的邮箱',
    sendMailSwitch: '预定成功发邮件提醒我',
    iproudSwitch: '预定成功在员宝推送消息通知',
    save: '保存'
  }

}