<script setup lang="ts">
defineProps({
  list: {
    type: Array,
    required: true
  }
})
const route = useRoute()
// const localeRoute = useLocaleRoute()
const current = ref<string | null>(route.params.slug[0] as string)
function toggleBook (book) {
  if (current.value === book) {
    current.value = null
  } else {
    current.value = book
  }
}
</script>

<template>
  <ul class="list">
    <li v-for="group in list" :key="group.book">
      <template v-if="group.children">
        <button class="toggler" :class="{'toggler-active': $route.params.slug[0] === group.book, 'toggler-default': $route.params.slug[0] !== group.book && current !== group.book, 'toggler-open': current === group.book && $route.params.slug[0] !== group.book}" @click="toggleBook(group.book)">
          <span class="toggler-content">
            <span class="toggler-content-box">
              <Icon :name="group.icon + ($route.params.slug[0] === group.book ? '-solid' : '')" />
            </span>
            <span class="toggler-content-title">{{ group.title }}</span>
          </span>
          <Icon :name="current === group.book ? 'toggler-close' : 'toggler-open'" class="toggler-icon" />
        </button>
        <TransitionSlideUpDown :active="group.children.length && current === group.book">
          <nav class="list-nav">
            <NuxtLink v-for="link in group.children" :key="link._path" :to="link._path" class="link">
              {{ link.title }}
            </NuxtLink>
          </nav>
        </TransitionSlideUpDown>
      </template>
    </li>
  </ul>
</template>

<style lang="ts" scoped>
css({
  '.list': {
    position: 'sticky',
    top: '{space.20}',
    display: 'flex',
    flexDirection: 'column',
    gap: '{space.3}',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    paddingTop: '{space.1}',
    '&-nav': {
      display: 'flex',
      flexDirection: 'column',
      gap: '{space.3}',
      padding: '{space.3} 0',
      paddingLeft: '{space.10}',
    }
  },
  '.toggler': {
    uiFlexBetween: true,
    uiText: 'info',
    width: '100%',
    uiBg: 'base',
    padding: 0,
    border: 'none',
    cursor: 'pointer',
    '&-default': {
      uiText: 'info',
      '&:hover': {
        uiText: 'base',
        '.toggler-content-box': {
          uiBorder: 'base'
        }
      }
    },
    '&-active': {
      uiText: 'accent',
      fontWeight: 500,
      '.toggler-content-box': {
        uiTextPrimary: 400,
        uiBorder: 'accent'
      }
    },
    '&-open': {
      uiText: 'base',
      fontWeight: 500,
      '.toggler-content-box': {
        uiText: 'base',
        uiBorder: 'accent'
      }
    },
    '&-content': {
      uiFlexCenter: true,
      gap: '10px',
      '&-box': {
        uiFlexCenter: true,
        uiBorder: 'base',
        height: '{space.8}',
        width: '{space.8}',
        borderRadius: '{space.2}',
        '.icon': {
          height: '{space.4}',
          width: '{space.4}'
        }
      },
      '&-title': {
        fontSize: '{font.size.md}',
        fontWeigth: 500,
        textTransform: 'capitalize',
      }
    },
    '&-icon': {
      height: '{space.4}',
      width: '{space.4}',
      // opacity50: true,
      // '&:hover': {
      //   opacity80: true
      // }
    }
  },
  '.link': {
    position: 'relative',
    display: 'block',
    fontSize: '{font.size.sm}',
    paddingLeft: '{space.1}',
    // textTransform: 'capitalize',
    textDecoration: 'none',
    uiText: 'info',
    '&::before': {
      content: '""',
      position: 'absolute',
      width: '8px',
      height: '8px',
      top: '5px',
      left: '-28px',
      uiBg: 'reverse',
      borderRadius: '50%',
    },
    '&:hover': {
      uiText: 'base',
      // uiTextSecondary: true,
      // transitionAll: true,
      '&::before': {
        uiBg: 'reverseAccent',
        // uiBgBrandOpacity: 50,
        // rotate: '45deg'
      }
    }
  },
  '.router-link-exact-active, .router-link-exact-active:hover': {
    uiText: 'accent',
    '&::before': {
      uiBgPrimary: 400,
      // opacity: 0.5
    }
  }
})
</style>
