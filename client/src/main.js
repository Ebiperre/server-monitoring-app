import Vue from 'vue'
import App from './App.vue'
import io from 'socket.io-client';

const socket = io('http://localhost:4000', {transports: ['websocket', 'polling', 'flashsocket']});

socket.on('connect', () => {
    console.log('Connected to server');
  });

// Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')