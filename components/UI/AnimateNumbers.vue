<template>
  <div>{{ displayedValue }}</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  from: {
    type: Number,
    required: true,
  },
  to: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    default: 1000,
  },
});

const displayedValue = ref(props.from);
const startAnimation = () => {
  const startTime = performance.now();
  const duration = props.duration;
  const startValue = props.from;
  const endValue = props.to;

  const animate = (currentTime) => {
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    displayedValue.value = Math.floor(startValue + progress * (endValue - startValue));

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};

onMounted(() => {
  startAnimation();
});
</script>
