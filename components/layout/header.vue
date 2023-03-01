<template>
  <header class="header">
    <div class="row">
      <div class="row_start">
        <NuxtLink to="/" class="header_logo">
          <LogoNuxt />
        </NuxtLink>
      </div>
      <div class="row_center">
        <a href="#finder" target="_self" class="header_finder">
          <span class="header_finder_text">
            <Icon name="search" />
            <span>Quick search</span>
          </span>
          <kbd><abbr title="Command">⌘</abbr> K</kbd>
        </a>
      </div>
      <div class="row_end">
        <a href="https://github.com/nuxt">
          <Icon name="mdi:github" />
        </a>
        <a href="https://github.com/nuxt">
          <Icon name="mdi:discord" />
        </a>
        <a href="https://github.com/nuxt">
          <Icon name="mdi:twitter" />
        </a>
      </div>
    </div>
  </header>
</template>

<style lang="ts">
css({
  '.header': {
    uiBorderB: 'base',
    uiBg: 'base',
    position: 'sticky',
    height: '{space.16}',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    '.row': {
      height: '100%',
      '&_start': {
        uiFlexStart: true,
      },
      '&_center': {
        uiFlexCenter: true,
        padding: '0 {space.5}',
      },
      '&_end': {
        uiFlexEnd: true,
        gap: '{space.2}'
      }
    },
    '&_logo': {
      uiText: 'accent',
      '.logo-nuxt': {
        height: '{space.6}'
      }
    },
    '&_finder': {
      uiFlexBetween: true,
      uiBorder: 'base',
      uiText: 'info',
      gap: '{space.10}',
      height: '{space.10}',
      padding: '0 {space.3}',
      borderRadius: '{space.5}',
      fontSize: '{font.size.md}',
      textDecoration: 'none',
      width: '100%',
      '&:hover': {
        uiBorder: 'accent',
        uiText: 'base',
      },
      '&_text': {
        uiFlexCenter: true,
        gap: '{space.2}',
        '.icon': {
          width: '{space.4}',
          height: '{space.4}'
        }
      },
      'kbd': {
        uiFlexCenter: true,
        uiText: 'info',
        gap: '{space.1}',
        paddingRight: '{space.1}',
        fontSize: '{font.size.sm}',
        fontWeight: 500,
        'abbr': {
          fontSize: '{font.size.lg}',
          paddingTop: '2px',
          textDecorationLine: 'none',
        }
      }
    },
    '.row_end': {
      'a': {
        uiText: 'base',
        padding: '{space.1}',
        '&:hover': {
          uiTextPrimary: 400
        },
        '.icon': {
          width: '{space.5}',
          height: '{space.5}',
        }
      },
    }
  }
})
</style>
