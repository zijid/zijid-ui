<template>
  <div class="button-view">
    <h2>按钮组件展示</h2>
    <p>Windows 10 风格的按钮样式和交互</p>
    
    <div class="button-group">
      <z-button>默认按钮</z-button>
      <z-button type="primary">主要按钮</z-button>
      <z-button type="danger">危险按钮</z-button>
    </div>
    
    <div class="button-group">
      <z-button type="success">成功按钮</z-button>
      <z-button type="warning">警告按钮</z-button>
      <z-button type="info">信息按钮</z-button>
    </div>
    
    <div class="button-group">
      <z-button type="text">文本按钮</z-button>
      <z-button type="primary">文本主要按钮</z-button>
      <z-button type="danger">文本危险按钮</z-button>
    </div>
    
    <div class="button-group">
      <z-button disabled>禁用按钮</z-button>
      <z-button type="primary" disabled>禁用主要按钮</z-button>
      <z-button type="danger" disabled>禁用危险按钮</z-button>
    </div>
    
    <div class="button-group">
      <z-button size="small">小按钮</z-button>
      <z-button size="medium">中按钮</z-button>
      <z-button size="large">大按钮</z-button>
    </div>
    
    <div class="button-group">
      <z-button round>圆角按钮</z-button>
      <z-button circle>圆形按钮</z-button>
    </div>
    
    <div class="button-group">
      <z-button icon="z-icon-edit">编辑按钮</z-button>
      <z-button icon="z-icon-delete">删除按钮</z-button>
      <z-button loading>加载按钮</z-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonView'
}
</script>

<style scoped>
.button-view {
  padding: 20px;
}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  color: #606266;
  margin-bottom: 20px;
}

.button-group {
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
</style>
