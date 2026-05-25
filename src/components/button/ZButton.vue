<template>
  <button
    class="z-button"
    :class="[
      type ? `z-button--${type}` : '',
      size ? `z-button--${size}` : '',
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-icon': icon
      }
    ]"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    @click="handleClick"
  >
    <i v-if="loading" class="z-button__loading z-icon-loading"></i>
    <i v-if="icon && !loading" class="z-button__icon z-icon" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'ZButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'medium'
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    disabled: Boolean,
    loading: Boolean,
      plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
    icon: String
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
};
</script>

<style scoped>
.z-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: all 0.2s ease;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  position: relative;
}

.z-button--default {
  background-color: #fff;
  border-color: #dcdfe6;
  color: #606266;
}

.z-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  box-shadow: 0 2px 0 rgba(0,0,0,0.025);
}

.z-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  box-shadow: 0 2px 0 rgba(0,0,0,0.025);
}

.z-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  box-shadow: 0 2px 0 rgba(0,0,0,0.025);
}

.z-button--danger {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
  box-shadow: 0 2px 0 rgba(0,0,0,0.025);
}

.z-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  box-shadow: 0 2px 0 rgba(0,0,0,0.025);
}

.z-button--text {
  background-color: transparent;
  border-color: transparent;
  color: #606266;
}

.z-button--text.z-button--primary {
  color: #409eff;
}

.z-button--text.z-button--success {
  color: #67c23a;
}

.z-button--text.z-button--warning {
  color: #e6a23c;
}

.z-button--text.z-button--danger {
  color: #dc3545;
}

.z-button--text.z-button--info {
  color: #909399;
}

.z-button--small {
  padding: 9px 15px;
  font-size: 12px;
  border-radius: 3px;
}

.z-button--small.z-button--text {
  padding: 5px 15px;
}

.z-button--large {
  padding: 14px 25px;
  font-size: 16px;
  border-radius: 5px;
}

.z-button--large.z-button--text {
  padding: 7px 25px;
}

.z-button.is-disabled,
.z-button.is-disabled:focus,
.z-button.is-disabled:hover {
  cursor: not-allowed;
  opacity: 0.5;
}

.z-button.is-disabled.z-button--text {
  background-color: transparent;
  border-color: transparent;
  color: #c0c4cc;
}

.z-button.is-disabled.z-button--text.z-button--primary {
  color: #a0cfff;
}

.z-button.is-disabled.z-button--text.z-button--success {
  color: #a9d867;
}

.z-button.is-disabled.z-button--text.z-button--warning {
  color: #f7ba7a;
}

.z-button.is-disabled.z-button--text.z-button--danger {
  color: #f9a7a7;
}

.z-button.is-disabled.z-button--text.z-button--info {
  color: #bcbcbc;
}

.z-button.is-plain {
  background-color: #f5f7fa;
  border-color: #dcdfe6;
  color: #606266;
}

.z-button.is-plain.z-button--primary {
  color: #409eff;
  background-color: #ecf5ff;
  border-color: #b3d8ff;
}

.z-button.is-plain.z-button--success {
  color: #67c23a;
  background-color: #f0f9eb;
  border-color: #c2e7b0;
}

.z-button.is-plain.z-button--warning {
  color: #e6a23c;
  background-color: #fdf6ec;
  border-color: #f5dab1;
}

.z-button.is-plain.z-button--danger {
  color: #dc3545;
  background-color: #fef0f0;
  border-color: #fbc4c4;
}

.z-button.is-plain.z-button--info {
  color: #909399;
  background-color: #f4f4f5;
  border-color: #d3d3d3;
}

.z-button.is-plain.z-button--text {
  background-color: transparent;
  border-color: transparent;
  color: #909399;
}

.z-button.is-plain.z-button--text.z-button--primary {
  color: #409eff;
}

.z-button.is-plain.z-button--text.z-button--success {
  color: #67c23a;
}

.z-button.is-plain.z-button--text.z-button--warning {
  color: #e6a23c;
}

.z-button.is-plain.z-button--text.z-button--danger {
  color: #dc3545;
}

.z-button.is-plain.z-button--text.z-button--info {
  color: #909399;
}

.z-button.is-plain.is-disabled,
.z-button.is-plain.is-disabled:focus,
.z-button.is-plain.is-disabled:hover {
  background-color: #f5f7fa;
  border-color: #dcdfe6;
  color: #c0c4cc;
}

.z-button.is-plain.is-disabled.z-button--text {
  background-color: transparent;
  border-color: transparent;
  color: #c0c4cc;
}

.z-button.is-plain.is-disabled.z-button--text.z-button--primary {
  color: #a0cfff;
}

.z-button.is-plain.is-disabled.z-button--text.z-button--success {
  color: #a9d867;
}

.z-button.is-plain.is-disabled.z-button--text.z-button--warning {
  color: #f7ba7a;
}

.z-button.is-plain.is-disabled.z-button--text.z-button--danger {
  color: #f9a7a7;
}

.z-button.is-plain.is-disabled.z-button--text.z-button--info {
  color: #bcbcbc;
}

.z-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}

.z-button.is-round.z-button--small {
  border-radius: 15px;
  padding: 7px 15px;
}

.z-button.is-round.z-button--large {
  border-radius: 25px;
  padding: 14px 25px;
}

.z-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}

.z-button.is-circle.z-button--small {
  border-radius: 50%;
  padding: 9px;
}

.z-button.is-circle.z-button--large {
  border-radius: 50%;
  padding: 14px;
}

.z-button.is-icon {
  padding: 12px;
}

.z-button.is-icon.z-button--small {
  padding: 9px;
}

.z-button.is-icon.z-button--large {
  padding: 14px;
}

.z-button.is-loading {
  position: relative;
  cursor: default;
}

.z-button.is-loading.z-button--small {
  padding: 9px 15px;
}

.z-button.is-loading.z-button--large {
  padding: 14px 25px;
}

.z-button.is-loading.z-button--small.z-button--text {
  padding: 5px 15px;
}

.z-button.is-loading.z-button--large.z-button--text {
  padding: 7px 25px;
}

.z-button.is-loading.z-button--small.z-button--round {
  padding: 7px 15px;
}

.z-button.is-loading.z-button--large.z-button--round {
  padding: 14px 25px;
}

.z-button.is-loading.z-button--small.z-button--circle {
  padding: 9px;
}

.z-button.is-loading.z-button--large.z-button--circle {
  padding: 14px;
}

.z-button.is-loading.z-button--small.z-button--icon {
  padding: 9px;
}

.z-button.is-loading.z-button--large.z-button--icon {
  padding: 14px;
}

.z-button__loading {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -8px;
  margin-top: -8px;
  font-size: 16px;
  color: #c0c4cc;
}

.z-button__icon {
  font-size: 14px;
  vertical-align: middle;
  margin-right: 5px;
}

.z-button--large .z-button__icon {
  margin-right: 8px;
}

.z-button--large .z-button__icon.z-icon {
  font-size: 16px;
}

.z-button--small .z-button__icon {
  margin-right: 3px;
}

.z-button--small .z-button__icon.z-icon {
  font-size: 12px;
}

.z-button:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transform: translateY(-1px);
}

.z-button.z-button--primary:hover {
  background-color: #66b1ff;
  border-color: #66b1ff;
  color: #fff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  transform: translateY(-1px);
}

.z-button.z-button--success:hover {
  background-color: #85ce61;
  border-color: #85ce61;
  color: #fff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  transform: translateY(-1px);
}

.z-button.z-button--warning:hover {
  background-color: #f3b14f;
  border-color: #f3b14f;
  color: #fff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  transform: translateY(-1px);
}

.z-button.z-button--danger:hover {
  background-color: #e74c3c;
  border-color: #e74c3c;
  color: #fff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  transform: translateY(-1px);
}

.z-button.z-button--info:hover {
  background-color: #b3b3b3;
  border-color: #b3b3b3;
  color: #fff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  transform: translateY(-1px);
}

.z-button.z-button--text:hover {
  background-color: #f5f7fa;
  border-color: #dcdfe6;
  color: #409eff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  transform: translateY(-1px);
}

.z-button.z-button--text.z-button--primary:hover {
  color: #66b1ff;
  background-color: transparent;
}

.z-button.z-button--text.z-button--success:hover {
  color: #85ce61;
  background-color: transparent;
}

.z-button.z-button--text.z-button--warning:hover {
  color: #f3b14f;
  background-color: transparent;
}

.z-button.z-button--text.z-button--danger:hover {
  color: #e74c3c;
  background-color: transparent;
}

.z-button.z-button--text.z-button--info:hover {
  color: #b3b3b3;
  background-color: transparent;
}

.z-button.is-plain:hover {
  background-color: #fff;
  border-color: #c6e2ff;
  color: #409eff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transform: translateY(-1px);
}

.z-button.is-plain.z-button--primary:hover {
  color: #66b1ff;
  background-color: #ecf5ff;
  border-color: #66b1ff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  transform: translateY(-1px);
}

.z-button.is-plain.z-button--success:hover {
  color: #85ce61;
  background-color: #f0f9eb;
  border-color: #85ce61;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  transform: translateY(-1px);
}

.z-button.is-plain.z-button--warning:hover {
  color: #f3b14f;
  background-color: #fdf6ec;
  border-color: #f3b14f;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  transform: translateY(-1px);
}

.z-button.is-plain.z-button--danger:hover {
  color: #e74c3c;
  background-color: #fef0f0;
  border-color: #e74c3c;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  transform: translateY(-1px);
}

.z-button.is-plain.z-button--info:hover {
  color: #b3b3b3;
  background-color: #f4f4f5;
  border-color: #b3b3b3;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  transform: translateY(-1px);
}

.z-button.is-plain.z-button--text:hover {
  background-color: #f5f7fa;
  border-color: #dcdfe6;
  color: #409eff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  transform: translateY(-1px);
}

.z-button.is-plain.z-button--text.z-button--primary:hover {
  color: #66b1ff;
  background-color: transparent;
}

.z-button.is-plain.z-button--text.z-button--success:hover {
  color: #85ce61;
  background-color: transparent;
}

.z-button.is-plain.z-button--text.z-button--warning:hover {
  color: #f3b14f;
  background-color: transparent;
}

.z-button.is-plain.z-button--text.z-button--danger:hover {
  color: #e74c3c;
  background-color: transparent;
}

.z-button.is-plain.z-button--text.z-button--info:hover {
  color: #b3b3b3;
  background-color: transparent;
}

.z-button.is-plain.is-disabled:hover {
  color: #c0c4cc;
  border-color: #dcdfe6;
  background-color: #f5f7fa;
}

.z-button.is-plain.is-disabled.z-button--text:hover {
  background-color: transparent;
  border-color: transparent;
  color: #c0c4cc;
}

.z-button.is-plain.is-disabled.z-button--text.z-button--primary:hover {
  color: #a0cfff;
}

.z-button.is-plain.is-disabled.z-button--text.z-button--success:hover {
  color: #a9d867;
}

.z-button.is-plain.is-disabled.z-button--text.z-button--warning:hover {
  color: #f7ba7a;
}

.z-button.is-plain.is-disabled.z-button--text.z-button--danger:hover {
  color: #f9a7a7;
}

.z-button.is-plain.is-disabled.z-button--text.z-button--info:hover {
  color: #bcbcbc;
}

.z-button.is-plain.is-disabled.z-button--text:hover {
  background-color: transparent;
  border-color: transparent;
  color: #c0c4cc;
}

.z-button.is-plain.is-disabled.z-button--text.z-button--primary:hover {
  color: #a0cfff;
}

.z-button.is-plain.is-disabled.z-button--text.z-button--success:hover {
  color: #a9d867;
}

.z-button.is-plain.is-disabled.z-button--text.z-button--warning:hover {
  color: #f7ba7a;
}

.z-button.is-plain.is-disabled.z-button--text.z-button--danger:hover {
  color: #f9a7a7;
}

.z-button.is-plain.is-disabled.z-button--text.z-button--info:hover {
  color: #bcbcbc;
}
</style>
