<template>
    <div>
      <div class="container">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="image-wrapper"
          :style="{ display: currentIndex === index ? 'block' : 'none' }"
        >
          <img :src="image.src" :alt="image.alt" />
        </div>
      </div>
  
      <div class="description-wrapper">
        <div
          v-for="(image, index) in images"
          :key="index"
          :class="['description-item', { active: currentIndex === index }]"
          @mouseover="changeImage(index)"
          @mouseout="startAutoPlay"
        >
          {{ image.description }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          {
            src: "/media/1.jpg",
            alt: "Image 1",
            description: "图片1介绍",
          },
          {
            src: "/media/2.jpg",
            alt: "Image 2",
            description: "图片2介绍",
          },
          {
            src: "/media/3.jpg",
            alt: "Image 3",
            description: "图片3介绍",
          },
          {
            src: "/media/4.jpg",
            alt: "Image 4",
            description: "图片4介绍",
          },
        ],
        currentIndex: 0,
        intervalId: null,
        intervalTime: 2000,
      };
    },
    mounted() {
      this.startAutoPlay();
    },
    methods: {
      changeImage(index) {
        clearInterval(this.intervalId);
        this.currentIndex = index;
      },
      startAutoPlay() {
        this.intervalId = setInterval(() => {
          this.currentIndex = (this.currentIndex + 1) % this.images.length;
        }, this.intervalTime);
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  
  .image-wrapper {
    width: 400px;
    height: 400px;
    margin: 10px;
  }
  
  .image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .description-wrapper {
    margin-top: 0px;
    display: flex;
    justify-content: center;
  }
  
  .description-item {
    width: 100px;
    height: 40px;
    margin: 0;
    background-color: #f0f0f0;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
  }
  
  .description-item.active {
    background-color: #ccc;
  }
  </style>
  