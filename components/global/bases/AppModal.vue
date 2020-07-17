<template>
  <div>
    <div
      v-if="src"
      class="cursor-pointer"
      data-cy="modal-image"
      @click="showModal = true"
    >
      <img :src="src" :alt="alt" />
    </div>
    <button
      v-else
      data-cy="modal-button"
      class="no-underline mt-4 font-medium text-sm px-4 py-2 shadow uppercase rounded hover:shadow-md sm:mr-4 py-3 px-6 text-base mb-4 primary bg-primary-base text-white hover:bg-primary-light"
      @click="showModal = true"
    >
      {{ $t('codeSandbox.open') }}
    </button>

    <transition name="modal">
      <div v-if="showModal" class="modal-mask" keep-alive data-cy="modal-open">
        <div class="modal-wrapper">
          <div class="modal-container flex flex-col">
            <div class="w-full flex justify-end">
              <button
                class="mb-4 w-auto"
                data-cy="modal-close"
                @click="showModal = false"
              >
                <XmarkCircleIcon class="svg" />
              </button>
            </div>
            <div class="modal-body flex-1" :class="{ 'overflow-scroll': src }">
              <img v-if="src" :src="src" :alt="alt" />
              <slot v-else></slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import XmarkCircleIcon from '~/assets/icons/xmark-circle.svg?inline'
  export default {
    components: {
      XmarkCircleIcon
    },
    props: {
      src: {
        type: String,
        required: false,
        default: ''
      },
      alt: {
        type: String,
        required: false,
        default: ''
      }
    },
    data() {
      return {
        showModal: false
      }
    },
    computed: {
      open() {
        return this.showModal
      }
    },
    head() {
      return this.open
        ? {
            bodyAttrs: {
              class: ['overflow-hidden']
            }
          }
        : undefined
    }
  }
</script>

<style>
  .svg {
    width: 20px;
  }

  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(18px);
  }

  .modal-container {
    width: calc(100vw - 80px);
    height: calc(100vh - 80px);
    margin: 40px 40px;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
  }

  .modal-body {
    margin: 0;
    display: flex;
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
