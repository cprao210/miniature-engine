const designSupportedWidth = 1280;
export const minSupportedWidth = 500;
export const maxSupportedWidth = 1366;

export let { innerWidth } = window;
if (innerWidth < minSupportedWidth) {
  innerWidth = minSupportedWidth;
} else if (innerWidth > maxSupportedWidth) {
  innerWidth = maxSupportedWidth;
}

export const scaleFactor = innerWidth / designSupportedWidth;

const getScaledValue = (value = 0) => {
  return `${value * scaleFactor}px`;
};

// const get

export const dim = {
  _0px: getScaledValue(0),
  _1px: getScaledValue(1),
  _2px: getScaledValue(2),
  _4px: getScaledValue(4),
  _6px: getScaledValue(6),
  _7px: getScaledValue(7),
  _8px: getScaledValue(8),
  _10px: getScaledValue(10),
  _12px: getScaledValue(12),
  _14px: getScaledValue(14),
  _16px: getScaledValue(16),
  _18px: getScaledValue(18),
  _20px: getScaledValue(20),
  _22px: getScaledValue(22),
  _24px: getScaledValue(24),
  _26px: getScaledValue(26),
  _28px: getScaledValue(28),
  _30px: getScaledValue(30),
  _32px: getScaledValue(32),
  _34px: getScaledValue(34),
  _36px: getScaledValue(36),
  _38px: getScaledValue(38),
  _40px: getScaledValue(40),
  _42px: getScaledValue(42),
  _44px: getScaledValue(44),
  _46px: getScaledValue(46),
  _48px: getScaledValue(48),
  _50px: getScaledValue(50),
  _52px: getScaledValue(52),
  _54px: getScaledValue(54),
  _56px: getScaledValue(56),
  _58px: getScaledValue(58),
  _60px: getScaledValue(60),
  _62px: getScaledValue(62),
  _64px: getScaledValue(64),
  _66px: getScaledValue(66),
  _68px: getScaledValue(68),
  _70px: getScaledValue(70),
  _72px: getScaledValue(72),
  _74px: getScaledValue(74),
  _76px: getScaledValue(76),
  _78px: getScaledValue(78),
  _80px: getScaledValue(80),
  _82px: getScaledValue(82),
  _84px: getScaledValue(84),
  _86px: getScaledValue(86),
  _88px: getScaledValue(88),
  _90px: getScaledValue(90),
  _92px: getScaledValue(92),
  _300px: getScaledValue(300),
  _scale: function _scale(value) {
    return getScaledValue(value);
  },
};
