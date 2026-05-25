<template>
  <div class="api-table">
    <div v-if="props.length > 0" class="api-section">
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
            <tr v-for="prop in props" :key="prop.name">
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

    <div v-if="events.length > 0" class="api-section">
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
            <tr v-for="event in events" :key="event.name">
              <td class="event-name">
                <code>{{ event.name }}</code>
              </td>
              <td class="event-params">
                <code v-if="event.params && event.params.length > 0">
                  {{ event.params.map(p => typeof p === 'string' ? p : JSON.stringify(p)).join(', ') }}
                </code>
                <span v-else>void</span>
              </td>
              <td class="event-desc">{{ event.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-if="slots.length > 0" class="api-section">
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
            <tr v-for="slot in slots" :key="slot.name">
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

    <div v-if="exposes.length > 0" class="api-section">
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
            <tr v-for="expose in exposes" :key="expose.name">
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
  params?: any[]
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

const props = defineProps<{
  props?: ApiProp[]
  events?: ApiEvent[]
  slots?: ApiSlot[]
  exposes?: ApiExpose[]
}>()
</script>

<style scoped>
.api-table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  overflow: hidden;
}

.api-table th {
  background: #f6f8fa;
  border-bottom: 2px solid #e1e4e8;
  padding: 12px 16px;
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  color: #24292e;
}

.api-table td {
  padding: 12px 16px;
  border-bottom: 1px solid #e1e4e8;
  font-size: 14px;
  line-height: 1.5;
}

.api-table tr:last-child td {
  border-bottom: none;
}

.api-section {
  margin-bottom: 32px;
}

.api-section-title {
  margin: 0 0 16px 0;
  font-size: 18px;
  font-weight: 600;
  color: #24292e;
  padding-bottom: 8px;
  border-bottom: 2px solid #e1e4e8;
}

.api-table-wrapper {
  overflow-x: auto;
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
  .api-table {
    font-size: 12px;
  }
  
  .api-table th,
  .api-table td {
    padding: 8px 12px;
  }
  
  .api-section-title {
    font-size: 16px;
  }
}
</style>
