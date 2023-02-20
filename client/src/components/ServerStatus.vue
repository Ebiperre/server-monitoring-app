<template>
    <div class="server-status">
      <h1>Server Status</h1>
      <div v-if="connected" class="status-connected">
        <i class="fas fa-circle"></i>
        <p>Connected</p>
      </div>
      <div v-else class="status-disconnected">
        <i class="fas fa-circle"></i>
        <p>Disconnected</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ServerStatus',
    data() {
      return {
        connected: false
      }
    },
    mounted() {
      this.connectToServer();
    },
    methods: {
      connectToServer() {
        this.connected = true;
      }
    }
  }
  </script>
  
  <style scoped>
  .server-status {
    margin-top: 50px;
    text-align: center;
  }
  
  .status-connected {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #28a745;
  }
  
  .status-disconnected {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dc3545;
  }
  </style>