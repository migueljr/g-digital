<template>
  <!-- Modal -->
  <div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style="z-index: 98">
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.modal-header{
  border-bottom: 0px !important;
}
.modal-body{
  padding: 0px 60px 30px !important;
}

.btn-close{
  margin-top:10px !important;
  margin-right:10px !important;
}

.modal-backdrop{
  z-index: 97 !important;
}
</style>

<script>
import {onMounted} from 'vue'
export default {
  name:"Modal",
  setup(){

  }

}
</script>