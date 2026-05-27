<template>
  <div class="api-table">
    <div v-if="props.props && props.props.length > 0" class="api-section">
      <h3 class="api-section-title">Props</h3>
      <div class="api-table-wrapper">
        <table class="api-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="prop in props.props" :key="prop.name">
              <td class="prop-name">
                <code>{{ prop.name }}</code>
                <span v-if="prop.required" class="required">*</span>
                <span v-if="prop.readonly" class="readonly">readonly</span>
              </td>
              <td class="prop-type">
                <code>{{ prop.type }}</code>
              </td>
              <td class="prop-default">
                <code v-if="prop.default !== undefined">{{ prop.default }}</code>
                <span v-else>-</span>
              </td>
              <td class="prop-desc">{{ prop.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-if="safeEvents.length > 0" class="api-section">
      <h3 class="api-section-title">Events</h3>
      <div class="api-table-wrapper">
        <table class="api-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Parameters</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="evt in safeEvents" :key="evt.name">
              <td class="event-name">
                <code>{{ evt.name }}</code>
              </td>
              <td class="event-params">
                <code v-if="evt.paramsDisplay && evt.paramsDisplay.length > 0">
                  {{ evt.paramsDisplay }}
                </code>
                <span v-else>void</span>
              </td>
              <td class="event-desc">{{ evt.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-if="props.slots && props.slots.length > 0" class="api-section">
      <h3 class="api-section-title">Slots</h3>
      <div class="api-table-wrapper">
        <table class="api-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="slot in props.slots" :key="slot.name">
              <td class="slot-name">
                <code>{{ slot.name }}</code>
                <span v-if="slot.default" class="default-slot">(default)</span>
              </td>
              <td class="slot-desc">{{ slot.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-if="props.exposes && props.exposes.length > 0" class="api-section">
      <h3 class="api-section-title">Exposes</h3>
      <div class="api-table-wrapper">
        <table class="api-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="expose in props.exposes" :key="expose.name">
              <td class="expose-name">
                <code>{{ expose.name }}</code>
              </td>
              <td class="expose-type">
                <code>{{ expose.type }}</code>
              </td>
              <td class="expose-desc">{{ expose.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface ApiProp {
  name: string
  type: string
  default?: any
  required?: boolean
  readonly?: boolean
  description: string
}

interface ApiEvent {
  name: string
  params?: any[] | string
  description: string
}

interface ApiSlot {
  name: string
  description: string
  default?: boolean
}

interface ApiExpose {
  name: string
  type: string
  description: string
}

interface SafeEvent {
  name: string
  paramsDisplay: string | null
  description: string
}

const props = withDefaults(defineProps<{
  props?: ApiProp[]
  events?: ApiEvent[]
  slots?: ApiSlot[]
  exposes?: ApiExpose[]
}>(), {
  props: () => [],
  events: () => [],
  slots: () => [],
  exposes: () => []
})

const safeEvents = computed<SafeEvent[]>(() => {
  try {
    const raw = Array.isArray(props.events) ? props.events : []
    return raw.map((evt: any) => {
      let paramsDisplay: string | null = null
      try {
        const p = evt?.params
        if (p !== undefined && p !== null) {
          if (Array.isArray(p)) {
            const strs = p
              .filter((x: any) => x !== null && x !== undefined)
              .map((x: any) => typeof x === 'string' ? x : String(x))
            if (strs.length > 0) {
              paramsDisplay = strs.join(', ')
            }
          } else if (typeof p === 'string') {
            paramsDisplay = p
          }
        }
      } catch {
        // ignore per-event formatting errors
      }
      return {
        name: typeof evt?.name === 'string' ? evt.name : 'unknown',
        paramsDisplay,
        description: typeof evt?.description === 'string' ? evt.description : ''
      }
    })
  } catch {
    return []
  }
})
</script>

<style scoped>
.api-table {
  width: 100%;
}

.api-table-wrapper {
  overflow-x: auto;
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  margin: 0;
}

.api-table {
  border-collapse: collapse;
  width: 100%;
  background: #fff;
}

.api-table th {
  background: #f6f8fa;
  border-bottom: 2px solid #e1e4e8;
  padding: 14px 24px;
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  color: #24292e;
}

.api-table td {
  padding: 14px 24px;
  border-bottom: 1px solid #e1e4e8;
  font-size: 14px;
  line-height: 1.5;
}

.api-table tr:last-child td {
  border-bottom: none;
}

.api-section {
  margin: 36px 0;
}

.api-section-title {
  margin: 0 0 16px 0;
  font-size: 18px;
  font-weight: 600;
  color: #24292e;
  padding-bottom: 8px;
  border-bottom: 2px solid #e1e4e8;
}

/* Prop styling */
.prop-name {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-weight: 600;
  color: #d73a49;
}

.prop-name .required {
  color: #d73a49;
  font-weight: bold;
  margin-left: 4px;
}

.prop-name .readonly {
  color: #6f42c1;
  font-size: 11px;
  margin-left: 6px;
  background: #f6f8fa;
  padding: 2px 6px;
  border-radius: 3px;
  font-weight: normal;
}

.prop-type {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  color: #6f42c1;
}

.prop-default {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  color: #28a745;
  font-style: italic;
}

.prop-desc {
  color: #24292e;
}

/* Event styling */
.event-name {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-weight: 600;
  color: #d73a49;
}

.event-params {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  color: #6f42c1;
}

.event-desc {
  color: #24292e;
}

/* Slot styling */
.slot-name {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-weight: 600;
  color: #d73a49;
}

.default-slot {
  color: #6f42c1;
  font-size: 11px;
  margin-left: 6px;
  background: #f6f8fa;
  padding: 2px 6px;
  border-radius: 3px;
}

.slot-desc {
  color: #24292e;
}

/* Expose styling */
.expose-name {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-weight: 600;
  color: #d73a49;
}

.expose-type {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  color: #6f42c1;
}

.expose-desc {
  color: #24292e;
}

/* Code styling */
code {
  background: #f6f8fa;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 13px;
}

@media (max-width: 768px) {
  .api-table th,
  .api-table td {
    padding: 8px 12px;
  }

  .api-section-title {
    font-size: 16px;
  }
}
</style>
