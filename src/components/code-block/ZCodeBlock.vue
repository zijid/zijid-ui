<template>
  <div class="z-code-block" :class="[`is-${theme}`, { 'is-borderless': borderless }]">
    <div v-if="showHeader" class="z-code-block__header">
      <span class="z-code-block__lang">
        <svg v-if="languageIcon" class="z-code-block__lang-icon" width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path :d="languageIcon" fill="currentColor" />
        </svg>
        {{ title || language || 'Code' }}
      </span>
      <button
        v-if="showCopy"
        class="z-code-block__copy"
        :class="{ 'is-copied': isCopied }"
        :disabled="isCopied"
        @click="handleCopy"
      >
        <svg v-if="!isCopied" class="z-code-block__copy-icon" width="14" height="14" viewBox="0 0 14 14" fill="none">
          <rect x="2.5" y="2.5" width="9" height="9" rx="1" stroke="currentColor" stroke-width="1.2" />
          <path d="M4 4V2.5a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v7a.5.5 0 01-.5.5H10" stroke="currentColor" stroke-width="1.2" />
        </svg>
        <svg v-else class="z-code-block__copy-icon" width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3.5 7L5.5 9L10.5 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        {{ isCopied ? copiedText : copyText }}
      </button>
    </div>
    <div class="z-code-block__body" :style="bodyStyle" :class="{ 'is-scrollable': isScrollable, 'is-wrapped': wrapLines }">
      <pre class="z-code-block__pre" :class="{ 'is-line-numbers': showLineNumbers }"><code class="z-code-block__code"><template v-for="(line, index) in codeLines" :key="index"><span v-if="showLineNumbers" class="z-code-block__line-num" :class="{ 'is-highlighted': isHighlighted(index) }">{{ startLine + index }}</span><span class="z-code-block__line" :class="{ 'is-highlighted': isHighlighted(index) }">{{ line }}</span><br v-if="index < codeLines.length - 1"></template></code></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

defineOptions({ name: 'ZCodeBlock' })

const props = withDefaults(defineProps<{
  code: string
  language?: string
  showHeader?: boolean
  maxHeight?: string | number
  showLineNumbers?: boolean
  startLine?: number
  highlightLines?: number[]
  title?: string
  showCopy?: boolean
  copyText?: string
  copiedText?: string
  wrapLines?: boolean
  fontSize?: string | number
  theme?: 'dark' | 'light'
  borderless?: boolean
}>(), {
  code: '',
  language: '',
  showHeader: true,
  maxHeight: undefined,
  showLineNumbers: false,
  startLine: 1,
  highlightLines: () => [],
  title: '',
  showCopy: true,
  copyText: '复制',
  copiedText: '已复制',
  wrapLines: false,
  fontSize: undefined,
  theme: 'dark',
  borderless: false
})

const isCopied = ref(false)

const codeLines = computed(() => props.code.split('\n'))

const isHighlighted = (index: number) => props.highlightLines.length > 0 && props.highlightLines.includes(index + 1)

const isScrollable = computed(() => props.maxHeight !== undefined)

const bodyStyle = computed(() => {
  const style: Record<string, string> = {}
  if (props.maxHeight !== undefined) {
    const h = typeof props.maxHeight === 'number' ? props.maxHeight + 'px' : props.maxHeight
    style.maxHeight = h
    style.overflowY = 'scroll'
  }
  if (props.fontSize !== undefined) {
    style.fontSize = typeof props.fontSize === 'number' ? props.fontSize + 'px' : props.fontSize
  }
  if (props.wrapLines) {
    style.overflowX = 'hidden'
  }
  return style
})

const languageIcon = computed(() => {
  const lang = props.language.toLowerCase()
  const icons: Record<string, string> = {
    'javascript': 'M2 2l1.5 1.5L7 2l3.5 1.5L12 2l.5.5v9L12 12l-3.5-1.5L5 12l-3-1.5V2z',
    'typescript': 'M2 2h10v10H2V2zm2 1.5v1h2.5v5h1v-5H10v-1H4z',
    'html': 'M1 2l1.2 10L7 13l4.8-1L13 2H1zm3.4 3.5l-.2 2H9l-.2 2.5-1.8.5-1.8-.5-.1-1H4.2l.2 2.5L7 12l2.6-1 .4-4H5.4z',
    'css': 'M2 2l1 10L7 13l4-1 1-10H2zm8.5 3.5H5.3l.2 1.5H10l-.3 3-2.7 1-2.7-1-.2-1.5h1.5l.1 1L7 9.5l1.6-.5.2-1.5H4l-.3-3h6.6l.2 1z',
    'vue': 'M7 2L2 12h2.5L7 7l2.5 5H12L7 2z',
    'json': 'M2 3h2l1.5 2L7 3h2L9 3l2 2.5v3L9 11l-1-1.5L7 11l-1.5-2L4 11l-2-2.5v-3L2 3z',
    'xml': 'M1 2l1.2 10L7 13l4.8-1L13 2H1zm3.4 3.5l-.2 2H9l-.2 2.5-1.8.5-1.8-.5-.1-1H4.2l.2 2.5L7 12l2.6-1 .4-4H5.4z',
    'bash': 'M6 2l1 1-3 3.5L7 10l-1 1-4-4.5L6 2zm2 0l4 4.5L8 11l-1-1 3-3.5L7 3l1-1z',
    'shell': 'M6 2l1 1-3 3.5L7 10l-1 1-4-4.5L6 2zm2 0l4 4.5L8 11l-1-1 3-3.5L7 3l1-1z',
    'python': 'M7 2C4.5 2 3 3 3 5v1.5c0 1.5 1 2.5 2.5 2.5H3c-1.5 0-2 1-2 2.5V11c0 2 1.5 3 4 3s4-1 4-3V9.5c0-1.5-1-2.5-2.5-2.5h2.5c1.5 0 2-1 2-2.5V5c0-2-1.5-3-4-3zm-2 2a.5.5 0 110 1 .5.5 0 010-1zm4 0a.5.5 0 110 1 .5.5 0 010-1z'
  }
  return icons[lang] || ''
})

function handleCopy() {
  navigator.clipboard.writeText(props.code).then(() => {
    isCopied.value = true
    setTimeout(() => {
      isCopied.value = false
    }, 2000)
  }).catch(() => {
    const textarea = document.createElement('textarea')
    textarea.value = props.code
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
    isCopied.value = true
    setTimeout(() => {
      isCopied.value = false
    }, 2000)
  })
}
</script>

<style scoped>
.z-code-block {
  display: flex;
  flex-direction: column;
  font-family: 'Consolas', 'Cascadia Code', 'Fira Code', 'Monaco', 'Menlo', monospace;
  font-size: 13px;
  line-height: 1.6;
  background: #1e1e2e;
  border: 1px solid #2a2a3e;
  border-radius: 6px;
  overflow: hidden;
  color: #d4d4d8;
}

/* ========== Light Theme ========== */
.z-code-block.is-light {
  background: #f8f9fa;
  border-color: #dde0e4;
  color: #2c3e50;
}

.z-code-block.is-light .z-code-block__header {
  background: #eef0f2;
  border-bottom-color: #dde0e4;
}

.z-code-block.is-light .z-code-block__lang {
  color: #6b7c93;
}

.z-code-block.is-light .z-code-block__copy {
  border-color: #d0d4da;
  color: #6b7c93;
}

.z-code-block.is-light .z-code-block__copy:hover {
  background: #e2e5e9;
  border-color: #a0aab8;
  color: #2c3e50;
}

.z-code-block.is-light .z-code-block__copy:active {
  background: #d0d4da;
}

.z-code-block.is-light .z-code-block__copy.is-copied {
  background: #0078d4;
  border-color: #0078d4;
  color: #ffffff;
}

.z-code-block.is-light .z-code-block__line-num {
  color: #a0aab8;
  border-right-color: #dde0e4;
}

.z-code-block.is-light .z-code-block__line.is-highlighted {
  background: #fffbdd;
}

.z-code-block.is-light .z-code-block__line-num.is-highlighted {
  background: #fffbdd;
}

.z-code-block.is-light ::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.06);
}

.z-code-block.is-light ::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
}

.z-code-block.is-light ::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.35);
}

.z-code-block.is-light ::-webkit-scrollbar-thumb:active {
  background: rgba(0, 0, 0, 0.5);
}

.z-code-block.is-light {
  scrollbar-color: rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.06);
}

/* ========== Borderless ========== */
.z-code-block.is-borderless {
  border: none;
  border-radius: 0;
}

/* ========== Header ========== */
.z-code-block__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 12px;
  background: #181825;
  border-bottom: 1px solid #2a2a3e;
  user-select: none;
  min-height: 28px;
}

.z-code-block__lang {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 600;
  color: #8888aa;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-family: 'Segoe UI', system-ui, sans-serif;
}

.z-code-block__lang-icon {
  opacity: 0.5;
}

.z-code-block__copy {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 3px 10px;
  border: 1px solid #3a3a5a;
  border-radius: 4px;
  background: transparent;
  color: #8888aa;
  font-size: 11px;
  font-family: 'Segoe UI', system-ui, sans-serif;
  cursor: pointer;
  transition: background-color 90ms ease-out, border-color 90ms ease-out, color 90ms ease-out;
  line-height: 1;
}

.z-code-block__copy:hover {
  background: #2a2a4a;
  border-color: #5555aa;
  color: #e0e0e0;
}

.z-code-block__copy:active {
  background: #3a3a5a;
}

.z-code-block__copy.is-copied {
  background: #0e639c;
  border-color: #0e639c;
  color: #ffffff;
  cursor: default;
}

.z-code-block__copy-icon {
  flex-shrink: 0;
}

/* ========== Body ========== */
.z-code-block__body {
  overflow-x: auto;
  overflow-y: auto;
}

.z-code-block__body.is-scrollable {
  overflow-y: scroll;
}

.z-code-block__pre {
  margin: 0;
  padding: 12px 16px;
  white-space: pre;
  tab-size: 2;
}

.z-code-block__pre.is-line-numbers {
  padding: 0;
}

.z-code-block__code {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  white-space: inherit;
  tab-size: inherit;
}

/* ========== Line Numbers ========== */
.z-code-block__line-num {
  display: inline-block;
  width: 40px;
  min-width: 40px;
  padding: 0 12px 0 16px;
  text-align: right;
  color: #555577;
  user-select: none;
  border-right: 1px solid #2a2a3e;
  margin-right: 12px;
  font-size: inherit;
  line-height: inherit;
  opacity: 0.6;
}

.z-code-block__line {
  padding-right: 16px;
}

.z-code-block__line.is-highlighted {
  background: #2a2a40;
  border-radius: 2px;
}

.z-code-block__line-num.is-highlighted {
  background: #2a2a40;
  opacity: 1;
  color: #aaaaee;
}

/* ========== Wrap Lines ========== */
.z-code-block__body.is-wrapped .z-code-block__pre {
  white-space: pre-wrap;
  word-break: break-all;
}

/* ========== Dark Scrollbar ========== */
.z-code-block ::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.z-code-block ::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
}

.z-code-block ::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.45);
  border-radius: 3px;
  min-height: 32px;
  transition: background 120ms ease;
}

.z-code-block ::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.6);
}

.z-code-block ::-webkit-scrollbar-thumb:active {
  background: rgba(255, 255, 255, 0.75);
}

.z-code-block ::-webkit-scrollbar-corner {
  background: transparent;
}

.z-code-block {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.45) rgba(255, 255, 255, 0.07);
}
</style>
