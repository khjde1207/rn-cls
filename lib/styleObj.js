import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default {
  f: {v: 'fontSize', t: wp},
  ff: {v: 'fontFamily', t: String},
  lh: {v: 'lineHeight', t: wp},
  fw: {v: 'fontWeight', t: String},
  w: {v: 'width', t: wp},
  wh: {v: 'height', t: wp},

  h: {v: 'height', t: hp},
  hw: {v: 'width', t: hp},

  ma: {v: 'margin', t: wp},
  mb: {v: 'marginBottom', t: wp},
  me: {v: 'marginEnd', t: wp},
  mh: {v: 'marginHorizontal', t: wp},
  ml: {v: 'marginLeft', t: wp},
  mr: {v: 'marginRight', t: wp},
  ms: {v: 'marginStart', t: wp},
  mt: {v: 'marginTop', t: wp},
  mv: {v: 'marginVertical', t: wp},

  pa: {v: 'padding', t: wp},
  pb: {v: 'paddingBottom', t: wp},
  pe: {v: 'paddingEnd', t: wp},
  ph: {v: 'paddingHorizontal', t: wp},
  pl: {v: 'paddingLeft', t: wp},
  pr: {v: 'paddingRight', t: wp},
  ps: {v: 'paddingStart', t: wp},
  pt: {v: 'paddingTop', t: wp},
  pv: {v: 'paddingVertical', t: wp},

  sdof: {v: 'shadowOffset', t: JSON.parse},
  sdor: {v: 'shadowRadius', t: Number},
  sdop: {v: 'shadowOpacity'},
  ele: {v: 'elevation', t: Number},

  tsdof: {v: 'textShadowOffset', t: wp},
  tsdor: {v: 'textShadowRadius', t: wp},
  tsdoc: {v: 'textShadowColor', t: 'color'},

  flex: {v: 'flex', t: Number},
  flx: {v: 'flex', t: Number},
  fx: {v: 'flex', t: Number},

  flexb: {v: 'flexBasis'},
  flxb: {v: 'flexBasis'},
  fxb: {v: 'flexBasis'},

  fleg: {v: 'flexGrow'},
  flg: {v: 'flexGrow'},
  fxg: {v: 'flexGrow'},

  flexs: {v: 'flexShrink'},
  flxs: {v: 'flexShrink'},
  fxs: {v: 'flexShrink'},

  fd: {v: 'flexDirection'},

  col: {v: 'column'},
  row: {v: 'row'},
  colr: {v: 'column-reverse'},
  rowr: {v: 'row-reverse'},

  fwrap: {v: 'flexWrap'},
  wr: {v: 'wrap'},
  wrap: {v: 'wrap'},
  nw: {v: 'nowrap'},

  lesp: {v: 'letterSpacing'},
  z: {v: 'zIndex', t: Number},
  op: {v: 'opacity', t: Number},

  po: {v: 'position'},
  ab: {v: 'absolute'},
  re: {v: 'relative'},

  top: {v: 'top', t: hp},
  bottom: {v: 'bottom', t: hp},
  left: {v: 'left', t: wp},
  right: {v: 'right', t: wp},

  full: {o: {position: 'absolute', left: 0, top: 0, right: 0, bottom: 0}},
  fulla: {
    o: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: wp(100),
      height: hp(100),
    },
  },

  ac: {v: 'alignContent'},
  ai: {v: 'alignItems'},
  as: {v: 'alignSelf'},

  s: {v: 'flex-start'},
  e: {v: 'flex-end'},
  c: {v: 'center'},
  st: {v: 'stretch'},
  sb: {v: 'space-between'},
  sa: {v: 'space-around'},
  se: {v: 'space-evenly'},
  b: {v: 'baseline'},
  auto: {v: 'auto'},

  dp: {v: 'display'},
  none: {v: 'none'},

  jc: {v: 'justifyContent'},

  br: {v: 'borderRadius', t: Number},
  bs: {v: 'borderStyle'},

  solid: {v: 'solid'},
  dotted: {v: 'dotted'},
  dashed: {v: 'dashed'},

  bfv: {v: 'backfaceVisibility'},

  fs: {v: 'fontStyle'},

  ta: {v: 'textAlign'},
  l: {v: 'left'},
  r: {v: 'right'},

  j: {v: 'justify'},

  tdl: {v: 'textDecorationLine'},

  of: {v: 'overflow'},

  v: {v: 'visible'},
  hidden: {v: 'hidden'},
  hi: {v: 'hidden'},

  rsm: {v: 'resizeMode'},

  bw: {v: 'borderWidth', t: Number},
  bbw: {v: 'borderBottomWidth', t: Number},
  btw: {v: 'borderTopWidth', t: Number},
  bew: {v: 'borderEndWidth', t: Number},
  blw: {v: 'borderLeftWidth', t: Number},
  brw: {v: 'borderRightWidth', t: Number},
  bsw: {v: 'borderStartWidth', t: Number},

  bber: {v: 'borderBottomEndRadius', t: Number},
  bblr: {v: 'borderBottomLeftRadius', t: Number},
  bbrr: {v: 'borderBottomRightRadius', t: Number},
  bbsr: {v: 'borderBottomStartRadius', t: Number},
  bter: {v: 'borderTopEndRadius', t: Number},
  btlr: {v: 'borderTopLeftRadius', t: Number},
  btrr: {v: 'borderTopRightRadius', t: Number},
  btsr: {v: 'borderTopStartRadius', t: Number},

  bgc: {v: 'backgroundColor'},
  bc: {v: 'borderColor'},
  blc: {v: 'borderLeftColor'},
  btc: {v: 'borderTopColor'},
  brc: {v: 'borderRightColor'},
  bbc: {v: 'borderBottomColor'},
  bsc: {v: 'borderStartColor'},
  bec: {v: 'borderEndColor'},

  sdoc: {v: 'shadowColor'},
  tint: {v: 'tintColor'},
  selc: {v: 'selectionColor'},
  tdc: {v: 'textDecoratiojnColor'},
  phtc: 'laceholderTextColor',
  subtc: 'ubtitleColor',
  tc: {v: 'titleColor'},
  uc: {v: 'underlayColor'},
  color: {v: 'color'},

  //react-native-elements
  chkc: {v: 'checkedColor'},
  unchkc: {v: 'uncheckedColor'},
  rec: {v: 'reverseColor'},
  winbgc: {v: 'windowBackgroundColor'},
  iconc: {v: 'iconColor'},
  hic: {v: 'highlightColor'},
  poc: {v: 'pointerColor'},
  statusc: {v: 'androidStatusBarColor'},
  phic: {v: 'placeholderIconColor'},
  seldc: {v: 'selectedColor'},
};
