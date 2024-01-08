<template>
    <div class="members-container">
      <div v-for="(member, index) in members" :key="index" class="member-card">
        <img :src="member.image" alt="Member Image" class="member-image">
        <div class="member-details">
          <h5 class="member-name">{{ member.name }}</h5>
          <p class="member-role">{{ member.role }}</p>
        </div>
      </div>    
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        members: [
          {
            name: 'Member 1',
            role: 'Role 1',
            image: 'path/to/image1.jpg',
          },
          {
            name: 'Member 2',
            role: 'Role 2',
            image: 'path/to/image2.jpg',
          },
          // Add more members as needed
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .members-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  
  .member-card {
    box-sizing: border-box;
    width: 200px;
    margin: 15px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .member-image {
    width: 100%;
    height: auto;
    border-radius: 50%;
  }
  
  .member-details {
    margin-top: 10px;
  }
  
  .member-name {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
  }
  
  .member-role {
    margin: 0;
    font-size: 14px;
  }
  </style>