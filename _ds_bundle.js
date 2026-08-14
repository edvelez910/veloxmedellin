/* @ds-bundle: {"format":4,"namespace":"VelozVIPDesignSystem_b0ea98","components":[{"name":"CtaCard","sourcePath":"components/cards/CtaCard.jsx"},{"name":"FeatureCard","sourcePath":"components/cards/FeatureCard.jsx"},{"name":"QuoteCard","sourcePath":"components/cards/QuoteCard.jsx"},{"name":"StatBlock","sourcePath":"components/cards/StatBlock.jsx"},{"name":"StepCard","sourcePath":"components/cards/StepCard.jsx"},{"name":"TestimonialCard","sourcePath":"components/cards/TestimonialCard.jsx"},{"name":"VehicleCard","sourcePath":"components/cards/VehicleCard.jsx"},{"name":"ArrowButton","sourcePath":"components/core/ArrowButton.jsx"},{"name":"BrandLockup","sourcePath":"components/core/BrandLockup.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"SpecChip","sourcePath":"components/core/SpecChip.jsx"},{"name":"StarRating","sourcePath":"components/core/StarRating.jsx"},{"name":"FaqItem","sourcePath":"components/forms/FaqItem.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"NewsletterCard","sourcePath":"components/forms/NewsletterCard.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"FeatureRow","sourcePath":"components/marketing/FeatureRow.jsx"},{"name":"Hero","sourcePath":"components/marketing/Hero.jsx"},{"name":"LocationPill","sourcePath":"components/marketing/LocationPill.jsx"},{"name":"Marquee","sourcePath":"components/marketing/Marquee.jsx"},{"name":"CategoryRow","sourcePath":"components/navigation/CategoryRow.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/cards/CtaCard.jsx":"598a0e6c5943","components/cards/FeatureCard.jsx":"14fc060deb5d","components/cards/QuoteCard.jsx":"a93cee265b29","components/cards/StatBlock.jsx":"5b2484e87ec3","components/cards/StepCard.jsx":"fb54da44853a","components/cards/TestimonialCard.jsx":"e89a992f88ce","components/cards/VehicleCard.jsx":"f8ae74368881","components/core/ArrowButton.jsx":"fe77e4877e17","components/core/BrandLockup.jsx":"0df821414675","components/core/Button.jsx":"b2b1df4fe8a1","components/core/Eyebrow.jsx":"75406ceab816","components/core/Icon.jsx":"4fa8a80e335c","components/core/Pill.jsx":"7834ef091db7","components/core/SectionHeading.jsx":"dde55b5c22b3","components/core/SpecChip.jsx":"469687cc14d8","components/core/StarRating.jsx":"6825f3c77daa","components/forms/FaqItem.jsx":"a284ba6e6a66","components/forms/Input.jsx":"deb3fe7ff444","components/forms/NewsletterCard.jsx":"1818439fbac5","components/forms/Select.jsx":"7ba319f0451a","components/marketing/FeatureRow.jsx":"fcb8f40c7d9c","components/marketing/Hero.jsx":"682ba099535d","components/marketing/LocationPill.jsx":"1d4d060017b9","components/marketing/Marquee.jsx":"612ad1056659","components/navigation/CategoryRow.jsx":"ba8bffcd1d95","components/navigation/Footer.jsx":"ac5e1f1b1c55","components/navigation/NavBar.jsx":"d7f5bf4f75c0","ui_kits/website/BookingScreen.jsx":"5088f15e4007","ui_kits/website/FleetScreen.jsx":"376b559b537e","ui_kits/website/HomeScreen.jsx":"fe81aff7bc1f","ui_kits/website/ServicesScreen.jsx":"f49a4703cf55","ui_kits/website/data.js":"ff49d3fe7ae4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VelozVIPDesignSystem_b0ea98 = window.VelozVIPDesignSystem_b0ea98 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/QuoteCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Founder / promise quote in a light card — the brand's display voice. */
function QuoteCard({
  children,
  author,
  role,
  avatar,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      maxWidth: 640,
      margin: '0 auto',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--r-3xl)',
      padding: '44px 40px',
      boxShadow: 'var(--sh-card)',
      textAlign: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 26px',
      fontFamily: 'var(--font-display)',
      fontSize: '22px',
      fontStyle: 'italic',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-strong)',
      lineHeight: 1.4
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px'
    }
  }, avatar && /*#__PURE__*/React.createElement("img", {
    src: avatar,
    alt: author,
    style: {
      width: 38,
      height: 38,
      borderRadius: 'var(--r-circle)',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-muted)',
      fontWeight: 'var(--fw-medium)'
    }
  }, author, role ? ', ' + role : '')));
}
Object.assign(__ds_scope, { QuoteCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/QuoteCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Big display number over a hairline rule, with a caption. */
function StatBlock({
  value,
  label,
  onDark = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-black)',
      fontSize: 'clamp(44px,5.4vw,74px)',
      letterSpacing: 'var(--ls-mega)',
      lineHeight: 1,
      marginBottom: '14px',
      paddingBottom: '20px',
      borderBottom: onDark ? '1px solid var(--border-hairline-dark)' : '1px solid var(--border-hairline)',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-strong)'
    }
  }, value), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/BrandLockup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The Velox mark + wordmark. Always the supplied logo files — the wordmark is never re-typeset. */
function BrandLockup({
  variant = 'onDark',
  size = 30,
  showWordmark = true,
  assetBase = '../../assets',
  style,
  ...rest
}) {
  const file = showWordmark ? variant === 'onDark' ? '/logo-velox-lockup-white.png' : '/logo-velox-lockup.png' : '/mark-velox-star.png';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: assetBase + file,
    alt: "Velox VIP Services",
    style: {
      height: showWordmark ? size * 1.55 : size,
      width: 'auto',
      display: 'block'
    }
  }));
}
Object.assign(__ds_scope, { BrandLockup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/BrandLockup.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Wide-tracked uppercase kicker, borrowed from the "VIP SERVICES" lockup. */
function Eyebrow({
  children,
  tone = 'muted',
  style,
  ...rest
}) {
  const colors = {
    muted: 'var(--text-muted)',
    gold: 'var(--text-accent)',
    onDark: 'var(--text-on-dark-muted)',
    onDarkGold: 'var(--text-accent-on-dark)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'block',
      fontFamily: 'var(--font-caps)',
      fontSize: '12.5px',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: colors[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LUCIDE = 'https://unpkg.com/lucide-static@0.436.0/icons/';
const veloxIconCache = {};

/** Lucide glyph injected as real SVG so it inherits currentColor. */
function Icon({
  name = 'arrow-right',
  size = 20,
  style,
  ...rest
}) {
  const [markup, setMarkup] = React.useState(veloxIconCache[name] || null);
  React.useEffect(() => {
    if (veloxIconCache[name]) {
      setMarkup(veloxIconCache[name]);
      return;
    }
    let live = true;
    fetch(LUCIDE + name + '.svg').then(r => r.ok ? r.text() : '').then(t => {
      if (!t) return;
      const svg = t.replace(/<\?xml[^>]*\?>/g, '').replace(/width="24"/, 'width="100%"').replace(/height="24"/, 'height="100%"');
      veloxIconCache[name] = svg;
      if (live) setMarkup(svg);
    }).catch(() => {});
    return () => {
      live = false;
    };
  }, [name]);
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      flex: 'none',
      color: 'inherit',
      ...style
    },
    dangerouslySetInnerHTML: markup ? {
      __html: markup
    } : undefined
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/cards/CtaCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Wide light card: ring icon, one headline, one button. */
function CtaCard({
  iconName = 'star',
  title,
  action,
  tone = 'light',
  style,
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: dark ? 'var(--surface-inverse)' : 'var(--surface-card)',
      border: dark ? '1px solid var(--border-hairline-dark)' : '1px solid var(--border-hairline)',
      borderRadius: 'var(--r-2xl)',
      padding: '34px 38px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '24px',
      flexWrap: 'wrap',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 'var(--r-circle)',
      border: '1px solid var(--border-gold)',
      display: 'grid',
      placeItems: 'center',
      flex: 'none',
      color: dark ? 'var(--text-accent-on-dark)' : 'var(--text-accent)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconName,
    size: 24
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: '22px',
      fontWeight: 'var(--fw-bold)',
      maxWidth: 440,
      lineHeight: 1.28,
      color: dark ? 'var(--text-on-dark)' : 'var(--text-strong)'
    }
  }, title)), action);
}
Object.assign(__ds_scope, { CtaCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CtaCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/FeatureCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Photo-backed bento card: gradient scrim, icon badge, title and copy pinned to the bottom. */
function FeatureCard({
  image,
  iconName,
  badge,
  title,
  children,
  minHeight = 300,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--r-2xl)',
      minHeight,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      color: 'var(--text-on-dark)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-card)'
    }
  })), iconName && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 22,
      left: 22,
      width: 44,
      height: 44,
      borderRadius: 'var(--r-sm)',
      background: 'var(--surface-inverse)',
      border: '1px solid var(--border-gold)',
      display: 'grid',
      placeItems: 'center',
      zIndex: 2,
      color: 'var(--text-accent-on-dark)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconName,
    size: 22
  })), badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 2,
      background: 'var(--glass-light)',
      border: '1px solid var(--border-glass)',
      backdropFilter: 'var(--blur-glass)',
      borderRadius: 'var(--r-pill)',
      padding: '8px 16px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-body)'
    }
  }, badge), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      padding: '28px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 10px',
      fontFamily: 'var(--font-display)',
      fontSize: '22px',
      fontWeight: 'var(--fw-bold)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      color: 'rgba(255,255,255,.78)',
      maxWidth: 340,
      lineHeight: 'var(--lh-body)'
    }
  }, children)));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/StepCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Numbered dark step card — "cómo funciona". */
function StepCard({
  number,
  iconName,
  title,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-dark)',
      borderRadius: 'var(--r-2xl)',
      padding: '34px 30px 40px',
      textAlign: 'center',
      minHeight: 360,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      transform: hover ? 'translateY(var(--lift-lg))' : 'none',
      transition: 'transform var(--dur-slow) var(--ease)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-caps)',
      fontSize: '13px',
      letterSpacing: 'var(--ls-caps-sm)',
      color: 'var(--text-accent-on-dark)',
      fontWeight: 'var(--fw-medium)',
      marginBottom: 'auto'
    }
  }, number), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 74,
      height: 74,
      borderRadius: 'var(--r-circle)',
      border: '1px solid var(--border-gold)',
      display: 'grid',
      placeItems: 'center',
      margin: '28px 0',
      color: 'var(--text-accent-on-dark)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconName,
    size: 32
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '16px 0 12px',
      fontFamily: 'var(--font-display)',
      fontSize: '21px',
      fontWeight: 'var(--fw-bold)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-on-dark-muted)',
      maxWidth: 250,
      lineHeight: 'var(--lh-body)'
    }
  }, children));
}
Object.assign(__ds_scope, { StepCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/StepCard.jsx", error: String((e && e.message) || e) }); }

// components/core/ArrowButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** 48px circular icon button — carousel arrows, quiet inline actions. */
function ArrowButton({
  direction = 'right',
  iconName,
  onDark = true,
  label,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label || direction,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--r-circle)',
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer',
      background: hover ? onDark ? 'rgba(255,255,255,.10)' : 'var(--surface-sunken)' : 'transparent',
      border: onDark ? '1px solid var(--border-glass)' : '1px solid var(--border-hairline)',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-body)',
      transform: press ? 'scale(var(--press-scale))' : 'none',
      transition: 'background var(--dur-fast),transform var(--dur-fast)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconName || (direction === 'left' ? 'chevron-left' : 'chevron-right'),
    size: 20
  }));
}
Object.assign(__ds_scope, { ArrowButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ArrowButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const veloxBtnBase = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '10px',
  border: 'none',
  cursor: 'pointer',
  fontFamily: 'var(--font-sans)',
  fontWeight: 'var(--fw-semibold)',
  borderRadius: 'var(--r-pill)',
  whiteSpace: 'nowrap',
  textDecoration: 'none',
  transition: 'transform var(--dur-slow) var(--ease),background var(--dur-fast),color var(--dur-fast),box-shadow var(--dur-slow) var(--ease)'
};
const veloxBtnSizes = {
  sm: {
    padding: '11px 22px',
    fontSize: '14px'
  },
  md: {
    padding: '15px 26px',
    fontSize: '15px'
  },
  lg: {
    padding: '17px 30px',
    fontSize: '15px'
  }
};
const veloxBtnVariants = {
  gold: {
    background: 'var(--accent)',
    color: 'var(--text-on-gold)',
    boxShadow: 'var(--sh-gold)'
  },
  dark: {
    background: 'var(--ink-900)',
    color: 'var(--text-on-dark)'
  },
  light: {
    background: 'var(--grey-050)',
    color: 'var(--text-body)',
    boxShadow: 'var(--sh-sm)'
  },
  ghost: {
    background: 'rgba(255,255,255,.08)',
    color: 'var(--text-on-dark)',
    border: '1px solid var(--border-glass)',
    backdropFilter: 'var(--blur-glass)'
  },
  outlineGold: {
    background: 'transparent',
    color: 'var(--text-accent)',
    border: '1px solid var(--border-gold)'
  }
};
const veloxBtnHover = {
  gold: {
    background: 'var(--gold-400)',
    transform: 'translateY(var(--lift-sm))',
    boxShadow: '0 18px 44px rgba(201,169,107,.38)'
  },
  dark: {
    background: '#000',
    transform: 'translateY(var(--lift-sm))'
  },
  light: {
    transform: 'translateY(var(--lift-sm))',
    boxShadow: 'var(--sh-md)'
  },
  ghost: {
    background: 'rgba(255,255,255,.16)'
  },
  outlineGold: {
    background: 'rgba(201,169,107,.10)',
    borderColor: 'var(--accent)'
  }
};

/** Pill CTA. Gold is the primary action; dark/light/ghost carry secondary weight. */
function Button({
  children,
  variant = 'gold',
  size = 'md',
  icon,
  iconName,
  arrow = false,
  disabled = false,
  href,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  const css = {
    ...veloxBtnBase,
    ...veloxBtnSizes[size],
    ...veloxBtnVariants[variant],
    ...(hover && !disabled ? veloxBtnHover[variant] : null),
    ...(disabled ? {
      opacity: .42,
      cursor: 'not-allowed',
      boxShadow: 'none',
      transform: 'none'
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    style: css,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), iconName ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconName,
    size: size === 'sm' ? 16 : 18
  }) : icon, /*#__PURE__*/React.createElement("span", null, children), arrow && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      transition: 'transform var(--dur-slow) var(--ease)',
      transform: hover && !disabled ? 'translateX(5px)' : 'none'
    }
  }, "\u2192"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const veloxPillTones = {
  light: {
    background: 'var(--grey-050)',
    border: '1px solid var(--border-hairline)',
    color: 'var(--ink-600)',
    boxShadow: 'var(--sh-hairline)'
  },
  dark: {
    background: 'var(--ink-800)',
    border: '1px solid var(--border-hairline-dark)',
    color: 'var(--text-on-dark)'
  },
  glass: {
    background: 'var(--glass-dark)',
    border: '1px solid var(--border-glass)',
    color: 'var(--text-on-dark)',
    backdropFilter: 'var(--blur-glass)'
  },
  gold: {
    background: 'var(--surface-gold-soft)',
    border: '1px solid var(--border-gold)',
    color: 'var(--gold-800)'
  }
};

/** Small label capsule: section eyebrows, hero badges, live status. */
function Pill({
  children,
  tone = 'light',
  iconName,
  dot = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 16px',
      borderRadius: 'var(--r-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-medium)',
      ...veloxPillTones[tone],
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--status-live)',
      boxShadow: 'var(--sh-live-ring)',
      flex: 'none'
    }
  }), iconName && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconName,
    size: 17
  }), children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Eyebrow (or pill) + display headline, optionally with an action on the right. */
function SectionHeading({
  eyebrow,
  pill,
  title,
  lead,
  action,
  align = 'left',
  onDark = false,
  style,
  ...rest
}) {
  const dark = onDark;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: '20px',
      flexWrap: 'wrap',
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '760px',
      margin: align === 'center' ? '0 auto' : undefined
    }
  }, pill && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '18px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Pill, {
    tone: dark ? 'dark' : 'light'
  }, pill)), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '14px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: dark ? 'onDarkGold' : 'gold'
  }, eyebrow)), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-2)',
      fontWeight: 'var(--fw-bold)',
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--ls-display)',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-strong)'
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '18px 0 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-relaxed)',
      color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
      maxWidth: '560px',
      marginInline: align === 'center' ? 'auto' : undefined
    }
  }, lead)), action);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/SpecChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small spec chip inside vehicle cards: pasajeros, transmisión, maletas. */
function SpecChip({
  iconName,
  children,
  onDark = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px',
      padding: '8px 13px',
      borderRadius: 'var(--r-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-medium)',
      background: onDark ? 'rgba(255,255,255,.06)' : 'var(--surface-sunken)',
      border: onDark ? '1px solid var(--border-hairline-dark)' : '1px solid var(--border-hairline)',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--ink-600)',
      ...style
    }
  }, rest), iconName && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconName,
    size: 15
  }), children);
}
Object.assign(__ds_scope, { SpecChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SpecChip.jsx", error: String((e && e.message) || e) }); }

// components/cards/VehicleCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Fleet card: photo, category name, spec chips and a from-price. */
function VehicleCard({
  image,
  name,
  category,
  specs = [],
  price,
  priceUnit = '/ trayecto',
  footnote,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--r-3xl)',
      padding: 'var(--pad-card)',
      cursor: onClick ? 'pointer' : 'default',
      transform: hover ? 'translateY(var(--lift-md))' : 'none',
      boxShadow: hover ? 'var(--sh-card-hover)' : 'none',
      transition: 'transform var(--dur-slow) var(--ease),box-shadow var(--dur-slow) var(--ease)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 230,
      borderRadius: 'var(--r-lg)',
      overflow: 'hidden',
      background: 'var(--surface-sunken)',
      marginBottom: 'var(--sp-6)',
      position: 'relative'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.06)' : 'none',
      transition: 'transform var(--dur-image) var(--ease)'
    }
  }) : null, category && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 14,
      left: 14,
      padding: '7px 14px',
      borderRadius: 'var(--r-pill)',
      background: 'var(--glass-dark)',
      border: '1px solid var(--border-glass)',
      backdropFilter: 'var(--blur-glass)',
      color: 'var(--text-on-dark)',
      fontFamily: 'var(--font-caps)',
      fontSize: '11.5px',
      letterSpacing: 'var(--ls-caps-sm)',
      textTransform: 'uppercase'
    }
  }, category)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 var(--sp-5)',
      paddingBottom: 'var(--sp-5)',
      borderBottom: '1px solid var(--border-hairline)',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h3)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-tight)',
      color: 'var(--text-strong)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '14px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }
  }, specs.map((s, i) => /*#__PURE__*/React.createElement(__ds_scope.SpecChip, {
    key: i,
    iconName: s.iconName
  }, s.label))), price && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-black)',
      fontSize: '26px',
      color: 'var(--text-strong)',
      whiteSpace: 'nowrap'
    }
  }, price, /*#__PURE__*/React.createElement("small", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      color: 'var(--text-muted)',
      fontWeight: 'var(--fw-medium)',
      marginLeft: '4px'
    }
  }, priceUnit))), footnote && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--sp-4) 0 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-micro)',
      color: 'var(--text-faint)'
    }
  }, footnote));
}
Object.assign(__ds_scope, { VehicleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/VehicleCard.jsx", error: String((e && e.message) || e) }); }

// components/core/StarRating.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Gold rating stars (★ glyphs — the brand never uses a yellow star). */
function StarRating({
  value = 5,
  max = 5,
  size = 17,
  showValue = false,
  style,
  ...rest
}) {
  const stars = [];
  for (let i = 0; i < max; i++) {
    const filled = value - i;
    stars.push(/*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        position: 'relative',
        display: 'inline-block',
        color: 'rgba(201,169,107,.28)',
        fontSize: size + 'px',
        lineHeight: 1
      }
    }, "\u2605", /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        width: Math.max(0, Math.min(1, filled)) * 100 + '%',
        color: 'var(--status-star)'
      }
    }, "\u2605")));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '3px',
      ...style
    }
  }, rest), stars, showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: '8px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-semibold)',
      color: 'inherit'
    }
  }, value.toFixed(1)));
}
Object.assign(__ds_scope, { StarRating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StarRating.jsx", error: String((e && e.message) || e) }); }

// components/cards/TestimonialCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Client testimonial on an ink card, with optional portrait rail. */
function TestimonialCard({
  rating = 5,
  quote,
  name,
  role,
  photo,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-inverse-card)',
      border: '1px solid rgba(255,255,255,.07)',
      borderRadius: 'var(--r-3xl)',
      padding: '26px',
      display: 'flex',
      gap: '22px',
      color: 'var(--text-on-dark)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '16px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StarRating, {
    value: rating
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 auto',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'rgba(255,255,255,.82)'
    }
  }, quote), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '24px'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontSize: '18px',
      fontWeight: 'var(--fw-bold)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      color: 'var(--text-on-dark-faint)'
    }
  }, role))), photo && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 120,
      flex: 'none',
      borderRadius: 'var(--r-md)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/FaqItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Accordion row. Controlled via `open`/`onToggle`, or self-managed. */
function FaqItem({
  question,
  children,
  open,
  defaultOpen = false,
  onToggle,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultOpen);
  const isOpen = open !== undefined ? open : internal;
  const toggle = () => {
    onToggle ? onToggle(!isOpen) : setInternal(!isOpen);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      border: '1px solid ' + (isOpen ? 'var(--border-gold)' : 'var(--border-hairline)'),
      borderRadius: 'var(--r-lg)',
      overflow: 'hidden',
      transition: 'border-color var(--dur-fast)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    onClick: toggle,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '20px',
      padding: '24px 26px',
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      fontSize: '19px',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement("span", null, question), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 'var(--r-circle)',
      flex: 'none',
      display: 'grid',
      placeItems: 'center',
      position: 'relative',
      background: isOpen ? 'var(--accent)' : 'var(--surface-sunken)',
      transition: 'background var(--dur-fast)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      width: 13,
      height: 2,
      borderRadius: 2,
      background: isOpen ? 'var(--ink-900)' : 'var(--ink-900)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      width: 2,
      height: 13,
      borderRadius: 2,
      background: isOpen ? 'var(--ink-900)' : 'var(--ink-900)',
      transform: isOpen ? 'scaleY(0)' : 'none',
      transition: 'transform var(--dur-base) var(--ease)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: isOpen ? '400px' : '0',
      overflow: 'hidden',
      transition: 'max-height .45s var(--ease)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      padding: '0 26px 26px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-relaxed)',
      color: 'var(--text-muted)',
      maxWidth: 560
    }
  }, children)));
}
Object.assign(__ds_scope, { FaqItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FaqItem.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Single-line field. Light on page surfaces, ink inside dark cards. */
function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  iconName,
  tone = 'light',
  hint,
  style,
  ...rest
}) {
  const dark = tone === 'dark';
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: '8px',
      fontFamily: 'var(--font-caps)',
      fontSize: '11.5px',
      letterSpacing: 'var(--ls-caps-sm)',
      textTransform: 'uppercase',
      color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      background: dark ? 'var(--ink-900)' : 'var(--surface-card)',
      border: '1px solid ' + (focus ? 'var(--accent)' : dark ? 'var(--border-hairline-dark)' : 'var(--border-hairline)'),
      borderRadius: 'var(--r-sm)',
      padding: '12px 16px',
      transition: 'border-color var(--dur-fast)',
      boxShadow: focus ? 'var(--sh-gold-ring)' : 'none'
    }
  }, iconName && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconName,
    size: 17,
    style: {
      color: dark ? 'var(--text-on-dark-faint)' : 'var(--text-faint)'
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-body)',
      minWidth: 0
    }
  }, rest))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: '7px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-micro)',
      color: dark ? 'var(--text-on-dark-faint)' : 'var(--text-faint)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/NewsletterCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Inline capture card used in the footer. */
function NewsletterCard({
  title,
  description,
  placeholder = 'tu@correo.com',
  buttonLabel = 'Enviar',
  note,
  onSubmit,
  style,
  ...rest
}) {
  const [value, setValue] = React.useState('');
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-inverse-2)',
      border: '1px solid var(--border-hairline-dark)',
      borderRadius: 'var(--r-xl)',
      padding: '28px',
      marginTop: '26px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 8px',
      fontFamily: 'var(--font-display)',
      fontSize: '20px',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-on-dark)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 20px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-on-dark-muted)'
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      background: 'var(--ink-900)',
      border: '1px solid rgba(255,255,255,.1)',
      borderRadius: 'var(--r-sm)',
      padding: '6px 6px 6px 16px',
      marginBottom: '12px'
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: e => setValue(e.target.value),
    placeholder: placeholder,
    style: {
      flex: 1,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: 'var(--text-on-dark)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      minWidth: 0
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => onSubmit && onSubmit(value),
    style: {
      background: 'var(--accent)',
      color: 'var(--text-on-gold)',
      border: 'none',
      borderRadius: 'var(--r-xs)',
      padding: '11px 20px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-body-sm)',
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, buttonLabel)), note && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-micro)',
      color: 'var(--text-on-dark-faint)'
    }
  }, note));
}
Object.assign(__ds_scope, { NewsletterCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/NewsletterCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select in the Input shell. */
function Select({
  label,
  options = [],
  value,
  onChange,
  tone = 'light',
  iconName,
  style,
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: '8px',
      fontFamily: 'var(--font-caps)',
      fontSize: '11.5px',
      letterSpacing: 'var(--ls-caps-sm)',
      textTransform: 'uppercase',
      color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      background: dark ? 'var(--ink-900)' : 'var(--surface-card)',
      border: '1px solid ' + (dark ? 'var(--border-hairline-dark)' : 'var(--border-hairline)'),
      borderRadius: 'var(--r-sm)',
      padding: '12px 16px'
    }
  }, iconName && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconName,
    size: 17,
    style: {
      color: dark ? 'var(--text-on-dark-faint)' : 'var(--text-faint)'
    }
  }), /*#__PURE__*/React.createElement("select", _extends({
    value: value,
    onChange: onChange,
    style: {
      flex: 1,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      appearance: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-body)',
      minWidth: 0
    }
  }, rest), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value || o,
    value: o.value || o,
    style: {
      color: '#16171a'
    }
  }, o.label || o))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 17,
    style: {
      color: dark ? 'var(--text-on-dark-faint)' : 'var(--text-faint)'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/marketing/FeatureRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Centred icon + two-line label, used in the trio under the about lead. */
function FeatureRow({
  iconName,
  children,
  onDark = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '14px',
      maxWidth: 190,
      textAlign: 'center',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-medium)',
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-snug)',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--ink-600)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      display: 'grid',
      placeItems: 'center',
      color: onDark ? 'var(--text-accent-on-dark)' : 'var(--text-accent)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconName,
    size: 38
  })), children);
}
Object.assign(__ds_scope, { FeatureRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/FeatureRow.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Hero.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Full-bleed photo hero: ghost mega word, glass badges, display headline, CTA row. */
function Hero({
  image,
  megaWord,
  title,
  subtitle,
  badges,
  actions,
  minHeight = '100vh',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: 'relative',
      minHeight,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      overflow: 'hidden',
      background: 'var(--ink-950)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 0
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-hero)'
    }
  })), megaWord && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: '10%',
      left: 0,
      right: 0,
      zIndex: 1,
      textAlign: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-black)',
      color: 'rgba(201,169,107,.30)',
      fontSize: 'var(--fs-mega)',
      letterSpacing: 'var(--ls-mega)',
      lineHeight: .9,
      whiteSpace: 'nowrap',
      userSelect: 'none'
    }
  }, megaWord), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 'var(--maxw)',
      margin: '0 auto',
      padding: '0 var(--gutter) 64px',
      width: '100%'
    }
  }, badges && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px',
      justifyContent: 'center',
      marginBottom: '26px',
      flexWrap: 'wrap'
    }
  }, badges), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 18px',
      textAlign: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-1)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-display)',
      lineHeight: 'var(--lh-display)',
      color: 'var(--text-on-dark)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 auto 34px',
      maxWidth: 620,
      textAlign: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-relaxed)',
      color: 'rgba(255,255,255,.78)'
    }
  }, subtitle), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: '14px',
      flexWrap: 'wrap'
    }
  }, actions)));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// components/marketing/LocationPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Destination capsule with a round thumbnail. */
function LocationPill({
  name,
  image,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '9px',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      padding: '9px 16px 9px 9px',
      borderRadius: 'var(--r-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-body)',
      boxShadow: 'var(--sh-hairline)',
      ...style
    }
  }, rest), image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: 26,
      height: 26,
      borderRadius: 'var(--r-circle)',
      objectFit: 'cover'
    }
  }), name);
}
Object.assign(__ds_scope, { LocationPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/LocationPill.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Marquee.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Edge-masked infinite horizontal track — photo strips, allies, text bands. */
function Marquee({
  children,
  speed = 32,
  gap = 20,
  fadeEdges = true,
  reverse = false,
  style,
  ...rest
}) {
  const items = React.Children.toArray(children);
  const mask = 'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)';
  const kf = 'velox-marquee-' + (reverse ? 'rev' : 'fwd');
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      overflow: 'hidden',
      WebkitMaskImage: fadeEdges ? mask : undefined,
      maskImage: fadeEdges ? mask : undefined,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("style", null, '@keyframes velox-marquee-fwd{to{transform:translateX(-50%)}}@keyframes velox-marquee-rev{from{transform:translateX(-50%)}to{transform:none}}'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: gap + 'px',
      width: 'max-content',
      animation: kf + ' ' + speed + 's linear infinite'
    }
  }, items, items));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/navigation/CategoryRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Oversized display row used for the service/category list on ink panels. */
function CategoryRow({
  name,
  meta,
  onClick,
  first = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: '16px',
      padding: '22px 0',
      borderTop: first ? '1px solid var(--border-hairline-dark)' : 'none',
      borderBottom: '1px solid var(--border-hairline-dark)',
      cursor: 'pointer',
      paddingLeft: hover ? '14px' : '0',
      transition: 'padding-left var(--dur-base) var(--ease)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'clamp(32px,4.2vw,56px)',
      letterSpacing: 'var(--ls-display)',
      lineHeight: 1.05,
      color: hover ? 'var(--text-accent-on-dark)' : 'var(--text-on-dark)',
      transition: 'color var(--dur-fast)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-on-dark-faint)',
      fontWeight: 'var(--fw-medium)',
      whiteSpace: 'nowrap'
    }
  }, meta));
}
Object.assign(__ds_scope, { CategoryRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/CategoryRow.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Ink footer: brand, contact card, link columns, socials and the oversized wordmark. */
function Footer({
  columns = [],
  contact,
  children,
  socials = [],
  legal,
  megaWord = 'VELOX',
  assetBase = '../../assets',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-dark)',
      padding: '90px 0 0',
      overflow: 'hidden',
      position: 'relative',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr .6fr .6fr .8fr',
      gap: '40px',
      paddingBottom: '70px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.BrandLockup, {
    variant: "onDark",
    size: 30,
    assetBase: assetBase
  }), children), columns.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("h5", {
    style: {
      margin: '0 0 22px',
      fontFamily: 'var(--font-caps)',
      fontSize: '12.5px',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-accent-on-dark)',
      fontWeight: 'var(--fw-medium)'
    }
  }, c.title), c.links.map((l, j) => /*#__PURE__*/React.createElement("a", {
    key: j,
    href: l.href || '#',
    onClick: l.onClick ? event => {
      event.preventDefault();
      l.onClick();
    } : undefined,
    style: {
      display: 'block',
      color: 'var(--text-on-dark-muted)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      marginBottom: '14px',
      textDecoration: 'none'
    }
  }, l.label)))), contact && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    style: {
      margin: '0 0 22px',
      fontFamily: 'var(--font-caps)',
      fontSize: '12.5px',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-accent-on-dark)',
      fontWeight: 'var(--fw-medium)'
    }
  }, contact.title || 'Contacto'), contact.lines.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: '0 0 14px',
      color: 'var(--text-on-dark-muted)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-body)'
    }
  }, p)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '26px 0',
      borderTop: '1px solid var(--border-hairline-dark)',
      flexWrap: 'wrap',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-on-dark-faint)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-caption)'
    }
  }, legal), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '16px'
    }
  }, socials.map((s, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: s.href || '#',
    "aria-label": s.iconName,
    style: {
      color: 'rgba(255,255,255,.45)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.iconName,
    size: 19
  })))))), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-black)',
      fontSize: 'clamp(90px,20vw,300px)',
      letterSpacing: 'var(--ls-mega)',
      lineHeight: .8,
      color: 'rgba(201,169,107,.06)',
      textAlign: 'center',
      marginTop: '-10px',
      userSelect: 'none',
      whiteSpace: 'nowrap'
    }
  }, megaWord));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Fixed transparent nav that condenses to a blurred ink bar once scrolled. */
function NavBar({
  links = [],
  active,
  onNavigate,
  cta,
  scrolled = false,
  assetBase = '../../assets',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      position: 'sticky',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: scrolled ? '14px 34px' : '22px 34px',
      background: scrolled ? 'rgba(12,13,15,.72)' : 'transparent',
      backdropFilter: scrolled ? 'var(--blur-nav)' : 'none',
      boxShadow: scrolled ? 'var(--sh-nav)' : 'none',
      transition: 'padding var(--dur-base) var(--ease),background var(--dur-base),box-shadow var(--dur-base)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.BrandLockup, {
    variant: "onDark",
    size: 30,
    assetBase: assetBase
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '34px'
    }
  }, links.map(l => {
    const on = l.id === active;
    return /*#__PURE__*/React.createElement("a", {
      key: l.id,
      href: l.href || '#',
      onClick: e => {
        if (onNavigate) {
          e.preventDefault();
          onNavigate(l.id);
        }
      },
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--fs-body)',
        fontWeight: 'var(--fw-medium)',
        textDecoration: 'none',
        padding: '4px 0',
        position: 'relative',
        color: on ? 'var(--text-on-dark)' : 'rgba(255,255,255,.82)',
        borderBottom: on ? '2px solid var(--accent)' : '2px solid transparent',
        transition: 'color var(--dur-fast)'
      }
    }, l.label);
  })), cta !== null && (cta || /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    size: "sm",
    arrow: true
  }, "Reservar")));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BookingScreen.jsx
try { (() => {
const {
  Button,
  Input,
  Select,
  Pill,
  Eyebrow,
  SpecChip,
  Icon,
  StarRating,
  QuoteCard
} = window.VelozVIPDesignSystem_b0ea98;
const D = window.VELOX_DATA;
const bkWrap = {
  maxWidth: 'var(--maxw)',
  margin: '0 auto',
  padding: '0 var(--gutter)'
};
function BookingScreen({
  onNavigate
}) {
  const [step, setStep] = React.useState(1);
  const [form, setForm] = React.useState({
    servicio: 'Transfer aeropuerto → hotel',
    vehiculo: 'SUV & Camionetas',
    pax: '4',
    vuelo: 'AV 8412',
    fecha: '12 sep · 14:30',
    nombre: '',
    contacto: ''
  });
  const set = k => e => setForm({
    ...form,
    [k]: e.target.value
  });
  const openWhatsApp = () => {
    const message = ['Hola, quiero solicitar una cotizaci\xF3n con Velox VIP Services.', `Servicio: ${form.servicio}`, `Veh\xEDculo: ${form.vehiculo}`, `Pasajeros: ${form.pax}`, `Vuelo: ${form.vuelo || 'No aplica'}`, `Fecha y hora: ${form.fecha}`, `Nombre: ${form.nombre || 'Por confirmar'}`, `Contacto: ${form.contacto || 'Por confirmar'}`].join('\n');
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };
  const resumen = [['Servicio', form.servicio], ['Vehículo', form.vehiculo], ['Pasajeros', form.pax], ['Vuelo', form.vuelo || '—'], ['Fecha y hora', form.fecha]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-950)',
      minHeight: '100vh',
      paddingBottom: 90
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '70px 0 40px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: .35
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=80",
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-scrim)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...bkWrap,
      position: 'relative',
      zIndex: 2,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "onDarkGold"
  }, "Reserva en 2 pasos"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '16px 0 14px',
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(34px,4.4vw,56px)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-display)',
      color: 'var(--text-on-dark)'
    }
  }, "Cu\xE9ntanos tu plan"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 auto',
      maxWidth: 520,
      color: 'rgba(255,255,255,.72)',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-relaxed)'
    }
  }, "Sin pagos en l\xEDnea: confirmamos disponibilidad y tarifa por WhatsApp antes de cerrar."))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...bkWrap,
      display: 'grid',
      gridTemplateColumns: '1.25fr .75fr',
      gap: 34,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-inverse-card)',
      border: '1px solid var(--border-hairline-dark)',
      borderRadius: 'var(--r-3xl)',
      padding: 34
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 28
    }
  }, [1, 2].map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      flex: 1,
      height: 3,
      borderRadius: 2,
      background: step >= n ? 'var(--accent)' : 'rgba(255,255,255,.12)'
    }
  }))), step === 1 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 22px',
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 700,
      color: 'var(--text-on-dark)'
    }
  }, "1 \xB7 Tu trayecto"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Select, {
    tone: "dark",
    label: "Servicio",
    iconName: "car-front",
    value: form.servicio,
    onChange: set('servicio'),
    options: ['Transfer aeropuerto → hotel', 'Transfer hotel → aeropuerto', 'Movilidad por horas', 'Evento u ocasión especial', 'Tour privado']
  }), /*#__PURE__*/React.createElement(Select, {
    tone: "dark",
    label: "Veh\xEDculo",
    iconName: "users",
    value: form.vehiculo,
    onChange: set('vehiculo'),
    options: D.fleet.map(v => v.name)
  }), /*#__PURE__*/React.createElement(Input, {
    tone: "dark",
    label: "Pasajeros",
    iconName: "users",
    value: form.pax,
    onChange: set('pax')
  }), /*#__PURE__*/React.createElement(Input, {
    tone: "dark",
    label: "N\xFAmero de vuelo",
    iconName: "plane-landing",
    value: form.vuelo,
    onChange: set('vuelo'),
    hint: "Lo monitoreamos en tiempo real."
  }), /*#__PURE__*/React.createElement(Input, {
    tone: "dark",
    label: "Fecha y hora",
    iconName: "calendar",
    value: form.fecha,
    onChange: set('fecha'),
    style: {
      gridColumn: '1 / -1'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      margin: '22px 0 28px'
    }
  }, /*#__PURE__*/React.createElement(SpecChip, {
    onDark: true,
    iconName: "shield-check"
  }, "Conductor verificado"), /*#__PURE__*/React.createElement(SpecChip, {
    onDark: true,
    iconName: "receipt"
  }, "Tarifa cerrada"), /*#__PURE__*/React.createElement(SpecChip, {
    onDark: true,
    iconName: "clock"
  }, "Espera incluida 60 min")), /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    arrow: true,
    onClick: () => setStep(2)
  }, "Continuar")) : step === 2 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 22px',
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 700,
      color: 'var(--text-on-dark)'
    }
  }, "2 \xB7 Tus datos"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    tone: "dark",
    label: "Nombre y apellido",
    iconName: "user",
    placeholder: "Laura Restrepo",
    value: form.nombre,
    onChange: set('nombre')
  }), /*#__PURE__*/React.createElement(Input, {
    tone: "dark",
    label: "WhatsApp o correo",
    iconName: "message-circle",
    placeholder: "+57 300 000 0000",
    value: form.contacto,
    onChange: set('contacto')
  }), /*#__PURE__*/React.createElement(Input, {
    tone: "dark",
    label: "Notas del itinerario",
    iconName: "route",
    placeholder: "Silla para beb\xE9, dos paradas, conductor biling\xFCe\u2026",
    style: {
      gridColumn: '1 / -1'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 28,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    arrow: true,
    onClick: () => {
      setStep(3);
      openWhatsApp();
    }
  }, "Enviar solicitud"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setStep(1)
  }, "Volver"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 64,
      height: 64,
      borderRadius: 'var(--r-circle)',
      background: 'var(--accent)',
      color: 'var(--ink-900)',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 30
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 12px',
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      fontWeight: 700,
      color: 'var(--text-on-dark)'
    }
  }, "Solicitud recibida"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 26px',
      color: 'var(--text-on-dark-muted)',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-relaxed)',
      maxWidth: 420
    }
  }, "Te escribimos por WhatsApp en menos de 30 minutos con la confirmaci\xF3n y la tarifa cerrada. Si tu vuelo cambia, nosotros ajustamos."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    iconName: "message-circle",
    onClick: openWhatsApp
  }, "Abrir WhatsApp"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => {
      setStep(1);
      onNavigate('home');
    }
  }, "Volver al inicio")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-inverse-2)',
      border: '1px solid var(--border-hairline-dark)',
      borderRadius: 'var(--r-2xl)',
      padding: 26
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "onDarkGold"
  }, "Resumen"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, resumen.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 14,
      padding: '11px 0',
      borderBottom: '1px solid var(--border-hairline-dark)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-on-dark-faint)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-on-dark)',
      fontWeight: 500,
      textAlign: 'right'
    }
  }, v)))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '18px 0 0',
      fontSize: 'var(--fs-micro)',
      color: 'var(--text-on-dark-faint)'
    }
  }, "La tarifa se confirma por WhatsApp seg\xFAn itinerario y disponibilidad.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-inverse-card)',
      border: '1px solid var(--border-hairline-dark)',
      borderRadius: 'var(--r-2xl)',
      padding: 26,
      color: 'var(--text-on-dark)'
    }
  }, /*#__PURE__*/React.createElement(StarRating, {
    value: 5
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '14px 0 12px',
      fontSize: 'var(--fs-body-sm)',
      color: 'rgba(255,255,255,.82)',
      lineHeight: 'var(--lh-body)'
    }
  }, "\u201CEl vuelo lleg\xF3 dos horas tarde y el conductor segu\xEDa ah\xED, con el marcador en la mano.\u201D"), /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 16
    }
  }, "Laura Restrepo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '16px 20px',
      border: '1px solid var(--border-gold)',
      borderRadius: 'var(--r-xl)',
      color: 'var(--text-accent-on-dark)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body-sm)'
    }
  }, "+57 300 000 0000 \xB7 24/7")))));
}
Object.assign(window, {
  BookingScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BookingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FleetScreen.jsx
try { (() => {
const {
  Hero,
  Pill,
  Button,
  SectionHeading,
  VehicleCard,
  SpecChip,
  StatBlock,
  CtaCard,
  Eyebrow,
  Icon
} = window.VelozVIPDesignSystem_b0ea98;
const D = window.VELOX_DATA;
const fleetWrap = {
  maxWidth: 'var(--maxw)',
  margin: '0 auto',
  padding: '0 var(--gutter)'
};
const FILTERS = [{
  id: 'all',
  label: 'Todo'
}, {
  id: 'sedan',
  label: 'Sedán & Hatchback'
}, {
  id: 'suv',
  label: 'SUV & Camionetas'
}, {
  id: 'van',
  label: 'Vans'
}, {
  id: 'bloques',
  label: 'Por horas'
}];
function FleetScreen({
  onNavigate
}) {
  const [filter, setFilter] = React.useState('all');
  const list = filter === 'all' ? D.fleet : D.fleet.filter(v => v.id === filter);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    minHeight: "56vh",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=2000&q=80",
    megaWord: "FLOTA",
    title: "Flota adaptable, servicio constante",
    subtitle: "Entendemos que no todos los viajes ni todos los presupuestos son iguales. El est\xE1ndar Velox no depende del carro: depende del trato y la log\xEDstica."
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 0 110px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: fleetWrap
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Categor\xEDas",
    title: "Elige por grupo, equipaje y presupuesto",
    style: {
      marginBottom: 34
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      marginBottom: 38
    }
  }, FILTERS.map(x => {
    const on = x.id === filter;
    return /*#__PURE__*/React.createElement("button", {
      key: x.id,
      onClick: () => setFilter(x.id),
      style: {
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--fs-body-sm)',
        fontWeight: 500,
        padding: '10px 18px',
        borderRadius: 'var(--r-pill)',
        background: on ? 'var(--ink-900)' : 'var(--surface-card)',
        color: on ? 'var(--text-on-dark)' : 'var(--text-body)',
        border: '1px solid ' + (on ? 'var(--ink-900)' : 'var(--border-hairline)'),
        transition: 'background var(--dur-fast)'
      }
    }, x.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 'var(--gap-grid)',
      marginBottom: 60
    }
  }, list.map(v => /*#__PURE__*/React.createElement(VehicleCard, {
    key: v.id,
    image: v.image,
    name: v.name,
    category: v.category,
    specs: v.specs,
    price: v.price,
    priceUnit: v.unit,
    footnote: v.footnote,
    onClick: () => onNavigate('reserva')
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-dark)',
      borderRadius: 'var(--r-3xl)',
      padding: '52px 48px',
      marginBottom: 'var(--gap-grid)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "onDarkGold"
  }, "Incluido en toda categor\xEDa"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 30,
      marginTop: 34
    }
  }, [['user-check', 'Conductor verificado y de presentación impecable'], ['radar', 'Seguimiento del vuelo y del trayecto'], ['receipt', 'Tarifa cerrada acordada antes de salir'], ['message-circle', 'Un contacto de WhatsApp para todo el itinerario']].map(([ic, txt]) => /*#__PURE__*/React.createElement("div", {
    key: ic
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 46,
      height: 46,
      borderRadius: 'var(--r-circle)',
      border: '1px solid var(--border-gold)',
      color: 'var(--text-accent-on-dark)',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 22
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-on-dark-muted)',
      lineHeight: 'var(--lh-body)'
    }
  }, txt))))), /*#__PURE__*/React.createElement(CtaCard, {
    iconName: "car-front",
    title: "\xBFNo sabes qu\xE9 categor\xEDa necesitas? Te la recomendamos seg\xFAn tu grupo.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "gold",
      arrow: true,
      onClick: () => onNavigate('reserva')
    }, "Pedir recomendaci\xF3n")
  }))));
}
Object.assign(window, {
  FleetScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FleetScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  Hero,
  Pill,
  Button,
  SectionHeading,
  Eyebrow,
  Marquee,
  FeatureRow,
  QuoteCard,
  VehicleCard,
  CategoryRow,
  StepCard,
  FeatureCard,
  CtaCard,
  StatBlock,
  TestimonialCard,
  LocationPill,
  FaqItem,
  ArrowButton,
  Icon
} = window.VelozVIPDesignSystem_b0ea98;
const D = window.VELOX_DATA;
const veloxSec = {
  padding: '110px 0',
  position: 'relative'
};
const veloxWrap = {
  maxWidth: 'var(--maxw)',
  margin: '0 auto',
  padding: '0 var(--gutter)'
};
const COLLAGE = [{
  src: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=700&q=80',
  w: 300,
  h: 340,
  top: 0,
  left: '32%',
  speed: -30
}, {
  src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80',
  w: 250,
  h: 250,
  top: 70,
  left: '56%',
  speed: 40
}, {
  src: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80',
  w: 240,
  h: 230,
  top: 180,
  left: '20%',
  speed: -20
}, {
  src: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=700&q=80',
  w: 280,
  h: 320,
  top: 280,
  left: '58%',
  speed: 30
}, {
  src: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=700&q=80',
  w: 280,
  h: 250,
  top: 320,
  left: '20%',
  speed: -40
}, {
  src: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=600&q=80',
  w: 250,
  h: 270,
  top: 490,
  left: '36%',
  speed: 25
}, {
  src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=700&q=80',
  w: 280,
  h: 250,
  top: 530,
  left: '53%',
  speed: -25
}];
function CollageSection() {
  const ref = React.useRef(null);
  const [off, setOff] = React.useState(0);
  React.useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        setOff((r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    ref: ref,
    style: {
      padding: '60px 0 120px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 820,
      maxWidth: 1080,
      margin: '0 auto'
    }
  }, COLLAGE.map((c, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: c.src,
    alt: "",
    style: {
      position: 'absolute',
      width: c.w,
      height: c.h,
      top: c.top,
      left: c.left,
      objectFit: 'cover',
      borderRadius: 'var(--r-md)',
      boxShadow: 'var(--sh-image)',
      transform: 'translateY(' + off * c.speed + 'px)',
      willChange: 'transform'
    }
  }))));
}
function HomeScreen({
  onNavigate
}) {
  const [faq, setFaq] = React.useState(0);
  const [ti, setTi] = React.useState(0);
  const t = D.testimonials;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=80",
    megaWord: "MEDELL\xCDN",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Tu tranquilidad,", /*#__PURE__*/React.createElement("br", null), "nuestra ruta."),
    subtitle: "Movilidad privada y concierge de experiencias en Medell\xEDn. No somos una app de transporte ni una rentadora: somos tu aliado de confianza en la ciudad.",
    badges: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Pill, {
      tone: "glass",
      iconName: "plane-landing"
    }, "Seguimiento de vuelo en tiempo real"), /*#__PURE__*/React.createElement(Pill, {
      tone: "glass",
      iconName: "shield-check"
    }, "Conductores verificados"), /*#__PURE__*/React.createElement(Pill, {
      tone: "glass",
      dot: true
    }, "Disponibles ahora")),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "gold",
      arrow: true,
      onClick: () => onNavigate('reserva')
    }, "Reservar por WhatsApp"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => onNavigate('flota')
    }, "Ver la flota"))
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...veloxSec,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: veloxWrap
  }, /*#__PURE__*/React.createElement(Pill, null, "Qui\xE9nes somos"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 900,
      margin: '30px auto 46px',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-lead)',
      fontWeight: 600,
      lineHeight: 1.32,
      letterSpacing: 'var(--ls-tight)',
      color: 'var(--text-strong)'
    }
  }, "Resolvemos toda la log\xEDstica de transporte e itinerarios para que viajes con absoluta tranquilidad, seguridad y confort \u2014 adapt\xE1ndonos a tus necesidades, tu grupo y tu presupuesto."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 60,
      flexWrap: 'wrap',
      marginBottom: 70
    }
  }, /*#__PURE__*/React.createElement(FeatureRow, {
    iconName: "clock"
  }, "Puntualidad", /*#__PURE__*/React.createElement("br", null), "impecable"), /*#__PURE__*/React.createElement(FeatureRow, {
    iconName: "shield-check"
  }, "Seguridad", /*#__PURE__*/React.createElement("br", null), "absoluta"), /*#__PURE__*/React.createElement(FeatureRow, {
    iconName: "radar"
  }, "Seguimiento", /*#__PURE__*/React.createElement("br", null), "real"), /*#__PURE__*/React.createElement(FeatureRow, {
    iconName: "route"
  }, "Soluciones", /*#__PURE__*/React.createElement("br", null), "a medida"))), /*#__PURE__*/React.createElement(Marquee, {
    speed: 40,
    gap: 20,
    style: {
      margin: '0 0 60px'
    }
  }, D.strip.map(s => /*#__PURE__*/React.createElement("img", {
    key: s,
    src: s,
    alt: "",
    style: {
      width: 300,
      height: 200,
      objectFit: 'cover',
      borderRadius: 'var(--r-lg)',
      boxShadow: 'var(--sh-sm)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: veloxWrap
  }, /*#__PURE__*/React.createElement(QuoteCard, {
    author: "Velox VIP Services",
    role: "hospitalidad paisa de alto nivel"
  }, "\u201CSofisticado pero cercano: elegantes en la presentaci\xF3n, c\xE1lidos en el trato.\u201D"))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      minHeight: 560
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=80",
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-dark)',
      padding: '70px 64px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "dark"
  }, "Portafolio de soluciones")), D.services.map((s, i) => /*#__PURE__*/React.createElement(CategoryRow, {
    key: s.id,
    first: i === 0,
    name: s.name,
    meta: s.meta,
    onClick: () => onNavigate('servicios')
  })))), /*#__PURE__*/React.createElement("section", {
    style: veloxSec
  }, /*#__PURE__*/React.createElement("div", {
    style: veloxWrap
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    pill: "Nuestra flota adaptable",
    title: "El est\xE1ndar VIP no depende del carro, sino del trato",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "dark",
      arrow: true,
      onClick: () => onNavigate('flota')
    }, "Ver flota completa"),
    style: {
      marginBottom: 52
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 'var(--gap-grid)'
    }
  }, D.fleet.slice(0, 4).map(v => /*#__PURE__*/React.createElement(VehicleCard, {
    key: v.id,
    image: v.image,
    name: v.name,
    category: v.category,
    specs: v.specs,
    price: v.price,
    priceUnit: v.unit,
    footnote: v.footnote,
    onClick: () => onNavigate('flota')
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: veloxWrap
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 44px',
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, "Aliados, rutas y experiencias que coordinamos")), /*#__PURE__*/React.createElement(Marquee, {
    speed: 32,
    gap: 80
  }, ['AEROPUERTO JMC', 'OLAYA HERRERA', 'GUATAPÉ', 'COMUNA 13', 'EJE CAFETERO', 'ORIENTE ANTIOQUEÑO', 'RUTAS GASTRONÓMICAS', 'BODAS &amp; EVENTOS'].map(b => /*#__PURE__*/React.createElement("span", {
    key: b,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 24,
      letterSpacing: '.02em',
      color: 'var(--grey-400)',
      whiteSpace: 'nowrap'
    }
  }, b)))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...veloxSec,
      textAlign: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: veloxWrap
  }, /*#__PURE__*/React.createElement(Pill, null, "C\xF3mo funciona"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '26px auto 60px',
      maxWidth: 720,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-2)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-display)',
      lineHeight: 1.12,
      color: 'var(--text-strong)'
    }
  }, "Reservado en minutos, ejecutado al detalle"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gap-grid)',
      maxWidth: 1080,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(StepCard, {
    number: "01",
    iconName: "message-circle",
    title: "Escr\xEDbenos"
  }, "Cu\xE9ntanos vuelo, fecha, n\xFAmero de pasajeros y qu\xE9 quieres hacer en la ciudad."), /*#__PURE__*/React.createElement(StepCard, {
    number: "02",
    iconName: "route",
    title: "Armamos tu itinerario"
  }, "Te proponemos veh\xEDculo, horarios y tarifa cerrada seg\xFAn tu grupo y presupuesto."), /*#__PURE__*/React.createElement(StepCard, {
    number: "03",
    iconName: "plane-landing",
    title: "Te esperamos en la puerta"
  }, "Seguimiento del vuelo, marcador personalizado y ayuda con el equipaje.")))), /*#__PURE__*/React.createElement("section", {
    style: veloxSec
  }, /*#__PURE__*/React.createElement("div", {
    style: veloxWrap
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "gold"
  }, "Por qu\xE9 Velox"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 56px',
      maxWidth: 640,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-2)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-display)',
      lineHeight: 1.12,
      color: 'var(--text-strong)'
    }
  }, "Log\xEDstica resuelta, trato de anfitri\xF3n"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.15fr 1fr 1fr',
      gap: 'var(--gap-bento)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--r-2xl)',
      padding: 28,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Marquee, {
    speed: 26,
    gap: 14,
    style: {
      borderRadius: 'var(--r-md)',
      marginBottom: 26
    }
  }, D.destinations.slice(0, 5).map(d => /*#__PURE__*/React.createElement("div", {
    key: d.name,
    style: {
      position: 'relative',
      width: 190,
      height: 150,
      borderRadius: 'var(--r-sm)',
      overflow: 'hidden',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: d.image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 12,
      textAlign: 'center',
      color: '#fff',
      fontWeight: 600,
      fontSize: 15,
      textShadow: '0 2px 8px rgba(0,0,0,.6)'
    }
  }, d.name)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    arrow: true,
    onClick: () => onNavigate('servicios')
  }, "Ver cobertura")), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '6px 0 8px',
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, "Medell\xEDn y alrededores"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)',
      fontSize: 'var(--fs-body-sm)',
      maxWidth: 320
    }
  }, "Del aeropuerto al Oriente antioque\xF1o, Guatap\xE9 y el Eje Cafetero.")), /*#__PURE__*/React.createElement(FeatureCard, {
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
    iconName: "user-check",
    title: "Conductores de confianza"
  }, "Personal verificado, presentaci\xF3n impecable y trato c\xE1lido paisa de alto nivel."), /*#__PURE__*/React.createElement(FeatureCard, {
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=900&q=80",
    badge: "24/7",
    title: "Coordinaci\xF3n permanente"
  }, "Un solo contacto por WhatsApp para todo tu itinerario, antes y durante el viaje."), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '2 / span 2'
    }
  }, /*#__PURE__*/React.createElement(CtaCard, {
    iconName: "map-pin",
    title: "Tu itinerario en Medell\xEDn, resuelto en una sola conversaci\xF3n.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "gold",
      arrow: true,
      onClick: () => onNavigate('reserva')
    }, "Cotizar ahora")
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...veloxSec,
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-dark)',
      overflow: 'hidden',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: .22
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1800&q=80",
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-scrim)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...veloxWrap,
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "onDarkGold"
  }, "C\xF3mo trabajamos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 64px',
      maxWidth: 560,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-2)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-display)',
      lineHeight: 1.12
    }
  }, "Cuatro compromisos, cero improvisaci\xF3n"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 30
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "24/7",
    label: "Coordinaci\xF3n y seguimiento de vuelos"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "3",
    label: "Categor\xEDas de flota, del sed\xE1n a la van"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "JMC \xB7 EOH",
    label: "Los dos aeropuertos de Medell\xEDn"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "100%",
    label: "Retorno seguro garantizado en eventos"
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...veloxSec,
      background: 'var(--surface-inverse-2)',
      color: 'var(--text-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: veloxWrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 20,
      marginBottom: 48,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "onDarkGold"
  }, "Lo que dicen"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 0',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-2)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-display)'
    }
  }, "Clientes que vuelven")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(ArrowButton, {
    direction: "left",
    onClick: () => setTi(Math.max(0, ti - 1))
  }), /*#__PURE__*/React.createElement(ArrowButton, {
    direction: "right",
    onClick: () => setTi(Math.min(t.length - 1, ti + 1))
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      transition: 'transform .6s var(--ease)',
      transform: 'translateX(calc(' + -ti + ' * (33.333% + 8px)))'
    }
  }, t.map((x, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: '0 0 calc((100% - 48px)/3)'
    }
  }, /*#__PURE__*/React.createElement(TestimonialCard, x))))))), /*#__PURE__*/React.createElement("section", {
    style: veloxSec
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...veloxWrap,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 60,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--r-3xl)',
      overflow: 'hidden',
      aspectRatio: '1/1',
      boxShadow: 'var(--sh-image)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
    alt: "Guatap\xE9",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "gold"
  }, "D\xF3nde te llevamos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 22px',
      maxWidth: 440,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-2)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-display)',
      lineHeight: 1.12,
      color: 'var(--text-strong)'
    }
  }, "Medell\xEDn, el Oriente y m\xE1s all\xE1"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 30px',
      color: 'var(--text-muted)',
      fontSize: 'var(--fs-body-lg)',
      maxWidth: 440,
      lineHeight: 'var(--lh-relaxed)'
    }
  }, "Traslados urbanos, rutas intermunicipales y tours privados con agencias aliadas. Tarifa acordada antes de salir, siempre."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    arrow: true,
    onClick: () => onNavigate('reserva')
  }, "Planear mi itinerario")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-muted)',
      fontWeight: 600,
      marginBottom: 16
    }
  }, "Destinos frecuentes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12
    }
  }, D.destinations.map(d => /*#__PURE__*/React.createElement(LocationPill, {
    key: d.name,
    name: d.name,
    image: d.image
  })))))), /*#__PURE__*/React.createElement("section", {
    style: veloxSec
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...veloxWrap,
      display: 'grid',
      gridTemplateColumns: '.85fr 1.15fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 36px',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-2)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-display)',
      lineHeight: 1.08,
      color: 'var(--text-strong)'
    }
  }, "Preguntas", /*#__PURE__*/React.createElement("br", null), "frecuentes"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-dark)',
      borderRadius: 'var(--r-2xl)',
      padding: 34
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 'var(--r-circle)',
      border: '1px solid var(--border-gold)',
      display: 'grid',
      placeItems: 'center',
      marginBottom: 26,
      color: 'var(--text-accent-on-dark)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "headset",
    size: 24
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 20px',
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 700
    }
  }, "\xBFNo encuentras tu respuesta?"), /*#__PURE__*/React.createElement(Button, {
    variant: "light",
    arrow: true,
    onClick: () => onNavigate('reserva')
  }, "Escr\xEDbenos ahora"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, D.faqs.map((x, i) => /*#__PURE__*/React.createElement(FaqItem, {
    key: i,
    question: x.q,
    open: faq === i,
    onToggle: () => setFaq(faq === i ? -1 : i)
  }, x.a))))), /*#__PURE__*/React.createElement(CollageSection, null), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '40px 0 120px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: veloxWrap
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 auto 34px',
      maxWidth: 760,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-2)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-display)',
      lineHeight: 1.1,
      color: 'var(--text-strong)'
    }
  }, "Cu\xE9ntanos tu vuelo y tu plan. Del resto nos encargamos."), /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    size: "lg",
    arrow: true,
    onClick: () => onNavigate('reserva')
  }, "Reservar por WhatsApp"))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesScreen.jsx
try { (() => {
const {
  Hero,
  Pill,
  Button,
  SectionHeading,
  Eyebrow,
  FeatureCard,
  CtaCard,
  Icon,
  SpecChip,
  LocationPill,
  StepCard
} = window.VelozVIPDesignSystem_b0ea98;
const D = window.VELOX_DATA;
const svcWrap = {
  maxWidth: 'var(--maxw)',
  margin: '0 auto',
  padding: '0 var(--gutter)'
};
function ServicesScreen({
  onNavigate
}) {
  const [open, setOpen] = React.useState('transfer');
  const active = D.services.find(s => s.id === open) || D.services[0];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    minHeight: "62vh",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=2000&q=80",
    megaWord: "SERVICIOS",
    title: "Portafolio de soluciones",
    subtitle: "Cuatro formas de movernos contigo: transfers, movilidad por bloques, eventos y experiencias.",
    badges: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Pill, {
      tone: "glass",
      iconName: "map-pin"
    }, "Medell\xEDn y alrededores"), /*#__PURE__*/React.createElement(Pill, {
      tone: "glass",
      iconName: "clock"
    }, "Disponibilidad por horas o d\xEDas"))
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '90px 0 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: svcWrap
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Elige tu servicio",
    title: "Cada trayecto tiene una log\xEDstica distinta",
    style: {
      marginBottom: 44
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 14,
      marginBottom: 34
    }
  }, D.services.map(s => {
    const on = s.id === open;
    return /*#__PURE__*/React.createElement("button", {
      key: s.id,
      onClick: () => setOpen(s.id),
      style: {
        textAlign: 'left',
        cursor: 'pointer',
        background: on ? 'var(--surface-inverse)' : 'var(--surface-card)',
        color: on ? 'var(--text-on-dark)' : 'var(--text-body)',
        border: '1px solid ' + (on ? 'var(--border-gold)' : 'var(--border-hairline)'),
        borderRadius: 'var(--r-xl)',
        padding: '20px 20px 22px',
        transition: 'background var(--dur-fast),border-color var(--dur-fast)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'grid',
        placeItems: 'center',
        width: 44,
        height: 44,
        borderRadius: 'var(--r-sm)',
        border: '1px solid ' + (on ? 'var(--border-gold)' : 'var(--border-hairline)'),
        color: on ? 'var(--text-accent-on-dark)' : 'var(--text-accent)',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: s.iconName,
      size: 22
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontFamily: 'var(--font-display)',
        fontSize: 18,
        fontWeight: 700,
        marginBottom: 6
      }
    }, s.name), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontFamily: 'var(--font-caps)',
        fontSize: 11,
        letterSpacing: 'var(--ls-caps-sm)',
        textTransform: 'uppercase',
        color: on ? 'var(--text-on-dark-faint)' : 'var(--text-faint)'
      }
    }, s.meta));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 40,
      alignItems: 'stretch',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--r-3xl)',
      padding: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--r-xl)',
      overflow: 'hidden',
      minHeight: 330
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: active.image,
    alt: active.name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 18px 18px 0',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "gold"
  }, active.meta), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '14px 0 16px',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-3)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-tight)',
      color: 'var(--text-strong)'
    }
  }, active.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 24px',
      color: 'var(--text-muted)',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-relaxed)'
    }
  }, active.copy), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 'auto'
    }
  }, /*#__PURE__*/React.createElement(SpecChip, {
    iconName: "shield-check"
  }, "Conductor verificado"), /*#__PURE__*/React.createElement(SpecChip, {
    iconName: "radar"
  }, "Seguimiento en vivo"), /*#__PURE__*/React.createElement(SpecChip, {
    iconName: "receipt"
  }, "Tarifa cerrada")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 26,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    arrow: true,
    onClick: () => onNavigate('reserva')
  }, "Reservar este servicio"), /*#__PURE__*/React.createElement(Button, {
    variant: "light",
    onClick: () => onNavigate('flota')
  }, "Ver veh\xEDculos")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '50px 0 90px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: svcWrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gap-bento)',
      marginBottom: 'var(--gap-bento)'
    }
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
    iconName: "plane-landing",
    title: "Recepci\xF3n en aeropuerto"
  }, "Marcador personalizado, bienvenida c\xE1lida y ayuda con el equipaje hasta el veh\xEDculo."), /*#__PURE__*/React.createElement(FeatureCard, {
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=900&q=80",
    iconName: "party-popper",
    title: "Eventos y ocasiones"
  }, "Bodas, conciertos y fiestas privadas con retorno seguro garantizado."), /*#__PURE__*/React.createElement(FeatureCard, {
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
    iconName: "utensils",
    title: "Reservas y alianzas"
  }, "Mesas en los mejores restaurantes y tours privados con agencias aliadas.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-muted)',
      fontWeight: 600,
      marginBottom: 16
    }
  }, "Cobertura habitual"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12
    }
  }, D.destinations.map(d => /*#__PURE__*/React.createElement(LocationPill, {
    key: d.name,
    name: d.name,
    image: d.image
  })))), /*#__PURE__*/React.createElement(CtaCard, {
    tone: "dark",
    iconName: "message-circle",
    title: "Escr\xEDbenos con tu itinerario y te respondemos en minutos.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "gold",
      arrow: true,
      onClick: () => onNavigate('reserva')
    }, "Hablar con Velox")
  }))));
}
Object.assign(window, {
  ServicesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Content used across the Velox VIP website kit. Copy tone: Spanish (Colombia), usted implícito → "tú" cercano.
window.VELOX_DATA = {
  nav: [{
    id: 'home',
    label: 'Inicio'
  }, {
    id: 'servicios',
    label: 'Servicios'
  }, {
    id: 'flota',
    label: 'Flota'
  }, {
    id: 'reserva',
    label: 'Reservar'
  }],
  fleet: [{
    id: 'sedan',
    name: 'Sedán & Hatchback',
    category: 'Ejecutivo · parejas',
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=80',
    specs: [{
      iconName: 'users',
      label: '1–3 pasajeros'
    }, {
      iconName: 'briefcase',
      label: '2 maletas'
    }, {
      iconName: 'snowflake',
      label: 'A/C'
    }],
    price: 'Desde COP 90.000',
    unit: '/ trayecto',
    footnote: 'Cómodo, ágil y de alta calidad a un precio accesible.'
  }, {
    id: 'suv',
    name: 'SUV & Camionetas',
    category: 'Familias · corporativo',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=80',
    specs: [{
      iconName: 'users',
      label: '4–6 pasajeros'
    }, {
      iconName: 'briefcase',
      label: '4 maletas'
    }, {
      iconName: 'shield-check',
      label: 'Conductor verificado'
    }],
    price: 'Desde COP 150.000',
    unit: '/ trayecto',
    footnote: 'Espacio superior, máximo confort y elegancia.'
  }, {
    id: 'van',
    name: 'Vans & Gran capacidad',
    category: 'Grupos · delegaciones',
    image: 'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?auto=format&fit=crop&w=900&q=80',
    specs: [{
      iconName: 'users',
      label: '7–15 pasajeros'
    }, {
      iconName: 'briefcase',
      label: 'Equipaje amplio'
    }, {
      iconName: 'route',
      label: 'Itinerario completo'
    }],
    price: 'Desde COP 320.000',
    unit: '/ trayecto',
    footnote: 'Logística perfecta para eventos y traslados de grupo.'
  }, {
    id: 'bloques',
    name: 'Bloques por horas',
    category: 'City concierge',
    image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=900&q=80',
    specs: [{
      iconName: 'clock',
      label: 'Mínimo 4 horas'
    }, {
      iconName: 'map-pin',
      label: 'Medellín y área'
    }, {
      iconName: 'user-check',
      label: 'Conductor a disposición'
    }],
    price: 'Desde COP 65.000',
    unit: '/ hora',
    footnote: 'Reuniones, compras, turismo local o noche.'
  }],
  services: [{
    id: 'transfer',
    name: 'Transfers aeropuerto',
    meta: 'JMC · EOH',
    iconName: 'plane-landing',
    copy: 'Monitoreamos la llegada de tu vuelo en tiempo real para estar en la puerta en el momento exacto, sin importar retrasos o adelantos. Marcador personalizado, bienvenida cálida y ayuda completa con el equipaje.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80'
  }, {
    id: 'concierge',
    name: 'Movilidad por bloques',
    meta: 'Horas o días',
    iconName: 'clock',
    copy: 'Conductor privado a disposición para trayectos en la ciudad, reuniones corporativas, salidas de compras o turismo local. Tú defines el itinerario; nosotros la logística.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80'
  }, {
    id: 'eventos',
    name: 'Eventos & ocasiones',
    meta: 'Retorno garantizado',
    iconName: 'party-popper',
    copy: 'Bodas, conciertos, festivales y fiestas privadas con transporte coordinado de principio a fin y retorno seguro garantizado para todos tus invitados.',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80'
  }, {
    id: 'experiencias',
    name: 'Experiencias & alianzas',
    meta: 'Guatapé · Comuna 13',
    iconName: 'utensils',
    copy: 'Reservas en los mejores restaurantes de la ciudad y tours privados por Guatapé, Comuna 13, Eje Cafetero y rutas gastronómicas, con agencias aliadas.',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80'
  }],
  destinations: [{
    name: 'Aeropuerto JMC',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=120&q=80'
  }, {
    name: 'El Poblado',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=120&q=80'
  }, {
    name: 'Laureles',
    image: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&w=120&q=80'
  }, {
    name: 'Guatapé',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=120&q=80'
  }, {
    name: 'Comuna 13',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=120&q=80'
  }, {
    name: 'Eje Cafetero',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=120&q=80'
  }, {
    name: 'Oriente antioqueño',
    image: 'https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?auto=format&fit=crop&w=120&q=80'
  }],
  strip: ['https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80'],
  testimonials: [{
    rating: 5,
    quote: 'El vuelo llegó dos horas tarde y el conductor seguía ahí, con el marcador en la mano. Cero estrés.',
    name: 'Laura Restrepo',
    role: 'Viaje corporativo',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80'
  }, {
    rating: 5,
    quote: 'Coordinaron la boda completa: llegada de invitados, fotos en Guatapé y retorno de madrugada.',
    name: 'Andrés &amp; Sofía',
    role: 'Boda en el Oriente',
    photo: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80'
  }, {
    rating: 4.5,
    quote: 'Reservaron mesa, ajustaron el itinerario dos veces y siempre respondieron en minutos.',
    name: 'Michael T.',
    role: 'Turista, 6 días en Medellín',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
  }],
  faqs: [{
    q: '¿Qué pasa si mi vuelo se retrasa?',
    a: 'Monitoreamos tu vuelo en tiempo real y ajustamos la hora de recogida sin costo adicional. Si se adelanta, también estamos ahí.'
  }, {
    q: '¿Cómo se cotiza el servicio?',
    a: 'Por itinerario. Nos cuentas fechas, número de pasajeros y qué quieres hacer, y armamos una propuesta según tu tipo de grupo y presupuesto.'
  }, {
    q: '¿El conductor habla inglés?',
    a: 'Tenemos conductores bilingües disponibles; indícalo al reservar y lo asignamos según disponibilidad.'
  }, {
    q: '¿Puedo cambiar el itinerario durante el servicio?',
    a: 'Sí. El conductor queda a tu disposición dentro del bloque contratado y coordinamos ajustes por WhatsApp en el momento.'
  }, {
    q: '¿Atienden fuera de Medellín?',
    a: 'Sí: Oriente antioqueño, Guatapé, Eje Cafetero y rutas intermunicipales, con tarifa acordada previamente.'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.CtaCard = __ds_scope.CtaCard;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.QuoteCard = __ds_scope.QuoteCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.StepCard = __ds_scope.StepCard;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.VehicleCard = __ds_scope.VehicleCard;

__ds_ns.ArrowButton = __ds_scope.ArrowButton;

__ds_ns.BrandLockup = __ds_scope.BrandLockup;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.SpecChip = __ds_scope.SpecChip;

__ds_ns.StarRating = __ds_scope.StarRating;

__ds_ns.FaqItem = __ds_scope.FaqItem;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.NewsletterCard = __ds_scope.NewsletterCard;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.FeatureRow = __ds_scope.FeatureRow;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.LocationPill = __ds_scope.LocationPill;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.CategoryRow = __ds_scope.CategoryRow;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
