'use strict';

// 开发环境独有的配置
// ==================================
module.exports = {

  // MongoDB 连接选项
  mongo: {
    uri: 'mongodb://localhost/guess-and-draw-dev'
  },

  // 在服务启动时使用样本数据填充 DB
  seedDB: true

};
