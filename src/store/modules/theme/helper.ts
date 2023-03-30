import type { GlobalThemeOverrides } from 'naive-ui';
import { cloneDeep } from 'lodash-es';

import { themeSetting } from '@/settings';
import { addColorAlpha, getColorPalette } from '@/utils';

export function initThemeSettings() {
  const themeColor = themeSetting.themeColor;
  const setting = cloneDeep({ ...themeSetting, themeColor });
  return setting;
}

type ColorType = 'primary' | 'info' | 'success' | 'warning' | 'error';
type ColorScene = '' | 'Suppl' | 'Hover' | 'Pressed' | 'Active';
type ColorKey = `${ColorType}Color${ColorScene}`;
type ThemeColor = Partial<Record<ColorKey, string>>;

interface ColorAction {
  scene: ColorScene;
  handler: (color: string) => string;
}


/** 设置主题颜色的各种场景对应的颜色 */
function getThemeColors(colors: [ColorType, string][]) {
  const colorActions: ColorAction[] = [
    { scene: '', handler: color => color },
    { scene: 'Suppl', handler: color => color },
    { scene: 'Hover', handler: color => getColorPalette(color, 5) },
    { scene: 'Pressed', handler: color => getColorPalette(color, 7) },
    { scene: 'Active', handler: color => addColorAlpha(color, 0.1) }
  ];

  const themeColor: ThemeColor = {};

  colors.forEach(color => {
    colorActions.forEach(action => {
      const [colorType, colorValue] = color;
      const colorKey: ColorKey = `${colorType}Color${action.scene}`;
      themeColor[colorKey] = action.handler(colorValue);
    });
  });

  return themeColor;
}

/** naive的主题颜色覆写 */
export function getNaiveThemeOverrides(colors: Record<ColorType, string>): GlobalThemeOverrides {
  //结构出每种颜色
  const { primary, success, warning, error } = colors;

  //info按钮颜色设置为比主色调浅一级
  const info = themeSetting.isCustomizeInfoColor ? colors.info : getColorPalette(primary, 7);

  const themeColors = getThemeColors([
    ['primary', primary],
    ['info', info],
    ['success', success],
    ['warning', warning],
    ['error', error]
  ]);
  const colorLoading = primary;
  return {
    //设置主颜色
    common: {
      ...themeColors
    },
    //设置loadingBar
    LoadingBar: {
      colorLoading
    }
  };
}