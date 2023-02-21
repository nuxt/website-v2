export default {
  bg: value => ({
    backgroundColor: '{color.bg.' + value + '}',
  }),
  bgPrimary: value => ({
    backgroundColor: '{color.primary.' + value + '}',
  }),
  border: value => ({
    border: '1px solid {color.border.' + value + '}',
  }),
  borderX: value => ({
    borderLeft: '1px solid {color.border.' + value + '}',
    borderRight: '1px solid {color.border.' + value + '}',
  }),
  borderY: value => ({
    borderBottom: '1px solid {color.border.' + value + '}',
    borderTop: '1px solid {color.border.' + value + '}',
  }),
  borderB: value => ({
    borderBottom: '1px solid {color.border.' + value + '}',
  }),
  borderL: value => ({
    borderLeft: '1px solid {color.border.' + value + '}',
  }),
  borderR: value => ({
    borderRight: '1px solid {color.border.' + value + '}',
  }),
  borderT: value => ({
    borderTop: '1px solid {color.border.' + value + '}',
  }),
  borderPrimary: value => ({
    border: '1px solid {color.primary.' + value + '}',
  }),
  borderXPrimary: value => ({
    borderLeft: '1px solid {color.primary.' + value + '}',
    borderRight: '1px solid {color.primary.' + value + '}',
  }),
  borderYPrimary: value => ({
    borderBottom: '1px solid {color.primary.' + value + '}',
    borderTop: '1px solid {color.primary.' + value + '}',
  }),
  borderBPrimary: value => ({
    borderBottom: '1px solid {color.primary.' + value + '}',
  }),
  borderLPrimary: value => ({
    borderLeft: '1px solid {color.primary.' + value + '}',
  }),
  borderRPrimary: value => ({
    borderRight: '1px solid {color.primary.' + value + '}',
  }),
  borderTPrimary: value => ({
    borderTop: '1px solid {color.primary.' + value + '}',
  }),
  text: value => ({
    color: '{color.text.' + value + '}',
  }),
  textPrimary: value => ({
    color: '{color.primary.' + value + '}',
  })
}
