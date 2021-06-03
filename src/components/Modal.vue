<template>
  <div>
    <div
      @click="isOpen=true"
      class="app-button">
      Create
  </div>
    <div class="modal" :class="{'is-active': isOpen}">
      <div class="modal-content">
        <span @click="close" class="close">&times;</span>
        <slot/>
      </div>
    </div>
  </div>
</template>    
<script>
export default {
  props: {
   
  },
  data() {
    return {
      isOpen: false
    }
  },
  watch: {
    close(isClose){
      if(isClose && this.isOpen){
        this.isOpen = false;
      }
    }
  },
  methods: {
   close(){
     this.isOpen = false
   }
  }
}
</script>
<style scoped>
.label {
   display: block;
  font-size: 18px;
  font-weight: bold;
}
.form-input{
  padding: 10px;
  font-size: 17px;
}
.form-control {
  margin-bottom: 10px
}
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  line-height: 8px;
}
.close:hover {
  cursor: pointer;
}
.modal {
  display: none;
  position: fixed; 
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto; 
  background-color: rgba(0, 0, 0, 0.4);
}
.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  text-align: left;
}
.modal.is-active {
    display: block;
}
</style>