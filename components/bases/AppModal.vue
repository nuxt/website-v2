<template>
  <div>
    <button id="show-modal"
            class="no-underline mt-4 font-medium text-sm px-4 py-2 shadow uppercase rounded hover:shadow-md sm:mr-4 py-3 px-6 text-base mb-4 primary bg-primary-base text-white hover:bg-primary-light"
            @click="showModal = true"
    >{{ $t('codeSandbox.open') }}</button>
    <transition name="modal">
      <div v-if="showModal" class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container flex">

            <div class="modal-header">
              <slot name="header">
              </slot>
            </div>

            <div class="modal-body flex-1">
              <slot>
              </slot>
            </div>

            <div class="modal-footer">
              <slot name="footer">
                <button class="modal-default-button" @click="showModal = false">
                  X
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>

</template>

<script>
export default {
  data () {
    return {
      showModal: false
    }
  }
}
</script>

<style>

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width:100vw;
  height: 100vh;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 0;
  display:flex;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
