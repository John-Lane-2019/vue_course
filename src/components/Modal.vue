<template>
<div class="modal" :class="{'is-active': isOpen}">
    <div class="modal-content">
      <span @click="$emit('modalClosed', {value:'Just testing!'})" class="close">&times;</span>
      <p>Modal Window</p>
    </div>
  </div>
</template>    
<script>
export default {
   props: {
     isOpen: {
       required: true,
       type: Boolean
     },
     methods: {
       emitCloseModal() {
         this.$emit('modalClosed', {value:'Just testing!'})
       }
     } 
   }
}
</script>
<style scoped>
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
}

.modal.is-active {
    display: block;
}

</style>