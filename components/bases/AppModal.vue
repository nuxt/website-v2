<template>
  <div keep-alive>
    <button id="show-modal"
            class="no-underline mt-4 font-medium text-sm px-4 py-2 shadow uppercase rounded hover:shadow-md sm:mr-4 py-3 px-6 text-base mb-4 primary bg-primary-base text-white hover:bg-primary-light"
            @click="showModal = true"
    >{{ $t('codeSandbox.open') }}</button>
    <transition name="modal">
      <div v-if="showModal" class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container flex">

            <div class="modal-body flex-1">
              <slot>
              </slot>
            </div>

            <div class="close">
              <button class="ml-4 w-full" @click="showModal = false">
                <CloseIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>

</template>

<script>
import CloseIcon from '~/assets/icons/times.svg?inline'

export default {
  components: {
    CloseIcon
  },
  data () {
    return {
      showModal: false
    }
  },
  head () {
    return {
      bodyAttrs: {
        class: this.showModal ? 'overflow-y-scroll' : 'do-nothing'
      }
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

.modal-body {
  margin: 0;
  display:flex;

}

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
