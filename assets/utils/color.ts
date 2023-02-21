export default {
  uiBg: value => ({
    backgroundColor: '{color.bg.' + value + '}',
  }),
  uiBgPrimary: value => ({
    backgroundColor: '{color.primary.' + value + '}',
  }),
  uiBorder: value => ({
    border: '1px solid {color.border.' + value + '}',
  }),
  uiBorderX: value => ({
    borderLeft: '1px solid {color.border.' + value + '}',
    borderRight: '1px solid {color.border.' + value + '}',
  }),
  uiBorderY: value => ({
    borderBottom: '1px solid {color.border.' + value + '}',
    borderTop: '1px solid {color.border.' + value + '}',
  }),
  uiBorderB: value => ({
    borderBottom: '1px solid {color.border.' + value + '}',
  }),
  uiBorderL: value => ({
    borderLeft: '1px solid {color.border.' + value + '}',
  }),
  uiBorderR: value => ({
    borderRight: '1px solid {color.border.' + value + '}',
  }),
  uiBorderT: value => ({
    borderTop: '1px solid {color.border.' + value + '}',
  }),
  uiBorderPrimary: value => ({
    border: '1px solid {color.primary.' + value + '}',
  }),
  uiBorderXPrimary: value => ({
    borderLeft: '1px solid {color.primary.' + value + '}',
    borderRight: '1px solid {color.primary.' + value + '}',
  }),
  uiBorderYPrimary: value => ({
    borderBottom: '1px solid {color.primary.' + value + '}',
    borderTop: '1px solid {color.primary.' + value + '}',
  }),
  uiBorderBPrimary: value => ({
    borderBottom: '1px solid {color.primary.' + value + '}',
  }),
  uiBorderLPrimary: value => ({
    borderLeft: '1px solid {color.primary.' + value + '}',
  }),
  uiBorderRPrimary: value => ({
    borderRight: '1px solid {color.primary.' + value + '}',
  }),
  uiBorderTPrimary: value => ({
    borderTop: '1px solid {color.primary.' + value + '}',
  }),
  uiText: value => ({
    color: '{color.text.' + value + '}',
  }),
  uiTextPrimary: value => ({
    color: '{color.primary.' + value + '}',
  })
}
