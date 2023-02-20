<template>
  <div>
    <ServerData :cpus="cpus" :totalMemory="totalMemory" :usedMemory="usedMemory" />
  </div>
</template>

<script>
import ServerData from './ServerData.vue';

export default {
  name: 'App',
  components: {
    ServerData,
  },
  data() {
    return {
      cpus: [
        { model: 'Intel(R) Core(TM) i5-5257U CPU @ 2.70GHz' },
        { model: 'Intel(R) Core(TM) i5-5257U CPU @ 2.70GHz' },
        { model: 'Intel(R) Core(TM) i5-5257U CPU @ 2.70GHz' },
        { model: 'Intel(R) Core(TM) i5-5257U CPU @ 2.70GHz' },
      ],
      totalMemory: 8589934592, // 8 GB
      usedMemory: 4294967296, // 4 GB
    };
  },
};
</script>