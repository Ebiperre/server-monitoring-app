
<template>
    <div class="server-data">
      <h2>Server Data</h2>
      <div class="server-info">
        <div class="cpu-usage">
          <h3>CPU Usage</h3>
          <ul>
            <li v-for="(cpu, index) in cpus" :key="index">{{ index }}: {{ cpu.model }}</li>
          </ul>
        </div>
        <div class="memory-usage">
          <h3>Memory Usage</h3>
          <p>Total Memory: {{ totalMemory }} bytes</p>
          <p>Used Memory: {{ usedMemory }} bytes</p>
          <p>Free Memory: {{ freeMemory }} bytes</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ServerData',
    props: {
      cpus: Array,
      totalMemory: Number,
      usedMemory: Number
    },
    computed: {
      freeMemory() {
        return this.totalMemory - this.usedMemory;
      }
    }
  };
  </script>
  
  <style scoped>
  .server-data {
    margin-top: 50px;
  }
  
  .server-info {
    display: flex;
    justify-content: space-between;
  }
  
  .cpu-usage {
    flex: 1;
    text-align: left;
  }
  
  .memory-usage {
    flex: 1;
    text-align: right;
  }
  </style>