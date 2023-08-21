<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  theme: {
    type: String, // 'primary' | 'line' | 'dashed' | 'text' | 'link',
    default: ''
  },
  size: {
    type: String, // 'large' | 'middle' | 'small',
    default: ''
  },
  shape: {
    type: String, // 'circle' | 'round' | 'square',
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  status: {
    type: String, // 'success' | 'warning' | 'error' | 'info',
    default: 'normal'
  },
  loading: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  },
})
const btnClass = computed(() => {
  return [
    'any-button',
    props.theme,
    props.size,
    props.shape,
    props.status,
    {
      'any-button-block': props.block,
    }
  ]
})
</script>

<template>
  <button :class="btnClass" :disabled="props.disabled"><svg v-if="props.loading" t="1692610610160" class="any-icon icon-loading" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4056" width="200" height="200"><path d="M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m0 128a298.666667 298.666667 0 1 0 0 597.333334 298.666667 298.666667 0 0 0 0-597.333334z" fill="currentColor" fill-opacity=".05" p-id="4057"></path><path d="M813.696 813.696c166.613333-166.613333 166.613333-436.778667 0-603.392-166.613333-166.613333-436.778667-166.613333-603.392 0A64 64 0 0 0 300.8 300.8a298.666667 298.666667 0 1 1 422.4 422.4 64 64 0 0 0 90.496 90.496z" fill="currentColor" p-id="4058"></path></svg> <slot /></button>
</template>

<style lang="scss">
.any-button {
  /* 默认 次级按钮 */
  box-sizing: border-box;
  border: 1px solid var(--any-primary-light);
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  white-space: nowrap;
  cursor: pointer;
  color: var(--any-primary);
  background-color: var(--any-primary-light);
  transition: all 0.3s ease-in-out;

  &.any-button-block {
    display: block;
    width: 100%;
  }

  &:hover {
    color: #fff;
    background-color: var(--any-primary-pale);
    border-color: var(--any-primary-pale);
  }

  &:active {
    color: #fff;
    border-color: var(--any-primary-deep);
  }

  &:disabled {
    color: #999;
    background-color: #f2f2f2;
    border-color: #f2f2f2;
    cursor: not-allowed;
  }

  &.success {
    background-color: var(--any-success-light);
    border-color: var(--any-success-light);
    color: var(--any-success);

    &:hover {
      background-color: var(--any-success-pale);
      border-color: var(--any-success-pale);
      color: #fff;
    }

    &:active {
      background-color: var(--any-success-deep);
      border-color: var(--any-success-deep);
    }

    &:disabled {
      background-color: var(--any-success-light);
      border-color: var(--any-success-light);
      color: var(--any-success);
      opacity: .4;
    }
  }

  &.warning {
    background-color: var(--any-warning-light);
    border-color: var(--any-warning-light);
    color: var(--any-warning);

    &:hover {
      background-color: var(--any-warning-pale);
      border-color: var(--any-warning-pale);
      color: #fff;
    }

    &:active {
      background-color: var(--any-warning-deep);
      border-color: var(--any-warning-deep);
    }

    &:disabled {
      background-color: var(--any-warning-light);
      border-color: var(--any-warning-light);
      color: var(--any-warning);
      opacity: .4;
    }
  }

  &.danger {
    background-color: var(--any-danger-light);
    border-color: var(--any-danger-light);
    color: var(--any-danger);

    &:hover {
      background-color: var(--any-danger-pale);
      border-color: var(--any-danger-pale);
      color: #fff;
    }

    &:active {
      background-color: var(--any-danger-deep);
      border-color: var(--any-danger-deep);
    }

    &:disabled {
      background-color: var(--any-danger-light);
      border-color: var(--any-danger-light);
      color: var(--any-danger);
      opacity: .4;
    }
  }

  &.info {
    background-color: var(--any-info-light);
    border-color: var(--any-info-light);
    color: var(--any-info);

    &:hover {
      background-color: var(--any-info-pale);
      border-color: var(--any-info-pale);
      color: #fff;
    }

    &:active {
      background-color: var(--any-info-deep);
      border-color: var(--any-info-deep);
    }

    &:disabled {
      background-color: var(--any-info-light);
      border-color: var(--any-info-light);
      color: var(--any-info);
      opacity: .4;
    }
  }

  /* 主按钮 */
  &.primary {
    background-color: var(--any-primary);
    border-color: var(--any-primary);
    color: #fff;

    &:hover {
      background-color: var(--any-primary-pale);
      border-color: var(--any-primary-pale);
    }

    &:active {
      background-color: var(--any-primary-deep);
      border-color: var(--any-primary-deep);
    }

    &:disabled {
      color: #999;
      background-color: #e6e6e6;
      border-color: #e6e6e6;
    }

    &.success {
      background-color: var(--any-success);
      border-color: var(--any-success);
      color: #fff;

      &:hover {
        background-color: var(--any-success-pale);
        border-color: var(--any-success-pale);
      }

      &:active {
        background-color: var(--any-success-deep);
        border-color: var(--any-success-deep);
      }

      &:disabled {
        background-color: var(--any-success);
        border-color: var(--any-success);
        color: #fff;
        opacity: .4;
      }
    }

    &.warning {
      background-color: var(--any-warning);
      border-color: var(--any-warning);
      color: #fff;

      &:hover {
        background-color: var(--any-warning-pale);
        border-color: var(--any-warning-pale);
      }

      &:active {
        background-color: var(--any-warning-deep);
        border-color: var(--any-warning-deep);
      }

      :disabled {
        background-color: var(--any-warning);
        border-color: var(--any-warning);
        color: #fff;
        opacity: .4;
      }
    }

    &.danger {
      background-color: var(--any-danger);
      border-color: var(--any-danger);
      color: #fff;

      &:hover {
        background-color: var(--any-danger-pale);
        border-color: var(--any-danger-pale);
      }

      &:active {
        background-color: var(--any-danger-deep);
        border-color: var(--any-danger-deep);
      }

      &:disabled {
        background-color: var(--any-danger);
        border-color: var(--any-danger);
        color: #fff;
        opacity: .4;
      }
    }

    &.info {
      background-color: var(--any-info);
      border-color: var(--any-info);
      color: #fff;

      &:hover {
        background-color: var(--any-info-pale);
        border-color: var(--any-info-pale);
      }

      &:active {
        background-color: var(--any-info-deep);
        border-color: var(--any-info-deep);
      }

      &:disabled {
        background-color: var(--any-info);
        border-color: var(--any-info);
        color: #fff;
        opacity: .4;
      }
    }
  }

  /* 线框按钮 */
  &.line {
    background-color: #fff;
    color: #333;
    border-color: #cdcdcd;

    &:hover {
      color: var(--any-primary);
      border-color: var(--any-primary);
    }

    &:active {
      color: var(--any-primary-deep);
      border-color: var(--any-primary-deep);
    }

    &:disabled {
      color: #999;
      background-color: #ffffff;
      border-color: #e6e6e6;
    }

    &.success {
      background-color: #fff;
      color: var(--any-success);
      border-color: var(--any-success);

      &:hover {
        color: var(--any-success-pale);
        border-color: var(--any-success-pale);
      }

      &:active {
        color: var(--any-success-deep);
        border-color: var(--any-success-deep);
      }
    }

    &.warning {
      background-color: #fff;
      color: var(--any-warning);
      border-color: var(--any-warning);

      &:hover {
        color: var(--any-warning-pale);
        border-color: var(--any-warning-pale);
      }

      &:active {
        color: var(--any-warning-deep);
        border-color: var(--any-warning-deep);
      }
    }

    &.danger {
      background-color: #fff;
      color: var(--any-danger);
      border-color: var(--any-danger);

      &:hover {
        color: var(--any-danger-pale);
        border-color: var(--any-danger-pale);
      }

      &:active {
        color: var(--any-danger-deep);
        border-color: var(--any-danger-deep);
      }
    }

    &.info {
      background-color: #fff;
      color: var(--any-info);
      border-color: var(--any-info);

      &:hover {
        color: var(--any-info-pale);
        border-color: var(--any-info-pale);
      }

      &:active {
        color: var(--any-info-deep);
        border-color: var(--any-info-deep);
      }
    }
  }

  /* 虚线按钮 */
  &.dashed {
    background-color: #fff;
    color: #333;
    border-color: #cdcdcd;
    border-style: dashed;

    &:hover {
      color: var(--any-primary);
      border-color: var(--any-primary);
    }

    &:active {
      color: var(--any-primary-deep);
      border-color: var(--any-primary-deep);
    }

    &:disabled {
      color: #999;
      background-color: #ffffff;
      border-color: #e6e6e6;
    }

    &.success {
      background-color: #fff;
      color: var(--any-success);
      border-color: var(--any-success);

      &:hover {
        color: var(--any-success-pale);
        border-color: var(--any-success-pale);
      }

      &:active {
        color: var(--any-success-deep);
        border-color: var(--any-success-deep);
      }
    }

    &.warning {
      background-color: #fff;
      color: var(--any-warning);
      border-color: var(--any-warning);

      &:hover {
        color: var(--any-warning-pale);
        border-color: var(--any-warning-pale);
      }

      &:active {
        color: var(--any-warning-deep);
        border-color: var(--any-warning-deep);
      }
    }

    &.danger {
      background-color: #fff;
      color: var(--any-danger);
      border-color: var(--any-danger);

      &:hover {
        color: var(--any-danger-pale);
        border-color: var(--any-danger-pale);
      }

      &:active {
        color: var(--any-danger-deep);
        border-color: var(--any-danger-deep);
      }
    }

    &.info {
      background-color: #fff;
      color: var(--any-info);
      border-color: var(--any-info);

      &:hover {
        color: var(--any-info-pale);
        border-color: var(--any-info-pale);
      }

      &:active {
        color: var(--any-info-deep);
        border-color: var(--any-info-deep);
      }
    }
  }

  /* 文本按钮 */
  &.text {
    background-color: transparent;
    color: #333;
    border-color: transparent;

    &:hover {
      color: var(--any-primary);
    }

    &:active {
      color: var(--any-primary-deep);
    }

    &:disabled {
      color: #333;
      opacity: .4;
      background-color: transparent;
      border-color: transparent;
    }

    &.success {
      background-color: transparent;
      border-color: transparent;
      color: var(--any-success);

      &:hover {
        color: var(--any-success-pale);
      }

      &:active {
        color: var(--any-success-deep);
      }
    }

    &.warning {
      background-color: transparent;
      border-color: transparent;
      color: var(--any-warning);

      &:hover {
        color: var(--any-warning-pale);
      }

      &:active {
        color: var(--any-warning-deep);
      }
    }

    &.danger {
      background-color: transparent;
      border-color: transparent;
      color: var(--any-danger);

      &:hover {
        color: var(--any-danger-pale);
      }

      &:active {
        color: var(--any-danger-deep);
      }
    }

    &.info {
      background-color: transparent;
      border-color: transparent;
      color: var(--any-info);

      &:hover {
        color: var(--any-info-pale);
      }

      &:active {
        color: var(--any-info-deep);
      }
    }
  }

  /* 链接按钮 */
  &.link {
    background-color: transparent;
    color: var(--any-primary);
    border-color: transparent;

    &:hover {
      color: var(--any-primary);
    }

    &:active {
      color: var(--any-primary-deep);
    }

    &:disabled {
      color: var(--any-primary);
      opacity: .4;
      background-color: transparent;
      border-color: transparent;
    }
    
    &.success, &.warning, &.danger, &.info {
      background-color: transparent;
      border-color: transparent;
    }
  }

  &:focus {
    outline: none;
    border-color: var(--any-primary-deep);
  }

  /* 尺寸 */
  &.large {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }

  &.middle {
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }

  &.small {
    padding: 0.25rem 0.5rem;
    font-size: 1rem;
  }

  &.mini {
    padding: 0.125rem 0.25rem;
    font-size: 0.9rem;
  }

  &.round {
    border-radius: 8px;
  }

  &.circle {
    border-radius: 100vh;
  }

  &.square {
    border-radius: 0;
  }

  svg {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    
    &.icon-loading {
      animation: any-spin 1s linear infinite;
    }
  }
}

@keyframes any-spin {
  to {
    transform: rotate(1turn);
  }
}
</style>
