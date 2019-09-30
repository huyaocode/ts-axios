module.exports = {
  base: '/ts-axios/',
  dest: 'dist',
  title: 'TypeScript 从零实现 axios',
  description: '学习使用 TypeScript 从零实现 axios 库',
  themeConfig: {
    editLinks: false,
    docsDir: 'docs',
    nav: [],
    sidebar: [
      {
        title: '初识 TypeScript',
        collapsable: false,
        children: [
          ['初识TS/', 'Introduction'],
          '初识TS/install',
          '初识TS/start'
        ]
      },
      {
        title: '常用语法',
        collapsable: false,
        children: [
          '常用语法/type',
          '常用语法/declare',
          '常用语法/interface',
          '常用语法/class',
          '常用语法/function',
          '常用语法/generic',
          '常用语法/inference',
          '常用语法/advance'
        ]
      },
      {
        'title': 'ts-axios 项目初始化',
        collapsable: false,
        children: [
          '项目初始化/require',
          '项目初始化/init',
          '项目初始化/base'
        ]
      },
      {
        'title': 'ts-axios 基础功能实现',
        collapsable: false,
        children: [
          '基础功能/url',
          '基础功能/data',
          '基础功能/header',
          '基础功能/response',
          '基础功能/response-header',
          '基础功能/response-data'
        ]
      },
      {
        'title': 'ts-axios 异常情况处理',
        collapsable: false,
        children: [
          '异常处理/error',
          '异常处理/enhance'
        ]
      },
      {
        'title': 'ts-axios 接口扩展',
        collapsable: false,
        children: [
          '接口扩展/extend',
          '接口扩展/overload',
          '接口扩展/generic'
        ]
      },
      {
        'title': 'ts-axios 拦截器实现',
        collapsable: false,
        children: [
          '拦截器/interceptor'
        ]
      },
      {
        'title': 'ts-axios 配置化实现',
        collapsable: false,
        children: [
          '配置化/merge',
          '配置化/transform',
          '配置化/create'
        ]
      },
      {
        'title': 'ts-axios 取消功能实现',
        collapsable: false,
        children: [
          '取消功能/cancel'
        ]
      },
      {
        'title': 'ts-axios 更多功能实现',
        collapsable: false,
        children: [
          '更多功能/withCredentials',
          '更多功能/xsrf',
          '更多功能/upload-download',
          '更多功能/auth',
          '更多功能/validateStatus',
          '更多功能/paramsSerializer',
          '更多功能/baseURL',
          '更多功能/static'
        ]
      },
      {
        'title': 'ts-axios 单元测试',
        collapsable: false,
        children: [
          '单元测试/preface',
          '单元测试/jest',
          '单元测试/helpers',
          '单元测试/requests',
          '单元测试/headers',
          '单元测试/instance',
          '单元测试/interceptor',
          '单元测试/mergeConfig',
          '单元测试/cancel',
          '单元测试/more'
        ]
      },
      {
        'title': 'ts-axios 部署与发布',
        collapsable: false,
        children: [
          '部署发布/build-deploy',
          '部署发布/demo'
        ]
      },
      {
        'title': '课程总结',
        collapsable: false,
        children: [
          '总结/summary'
        ]
      }
    ]
  }
};
