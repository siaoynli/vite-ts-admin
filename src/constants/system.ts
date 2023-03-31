export const themeLayoutModeLabels: Record<UnionKey.ThemeLayoutMode, string> = {
  vertical: '左侧菜单模式',
  horizontal: '顶部菜单模式',
  'vertical-mix': '左侧菜单混合模式',
  'horizontal-mix': '顶部菜单混合模式'
};

export const themeLayoutModeOptions: Common.OptionWithKey<UnionKey.ThemeLayoutMode>[] = [
  {
    value: 'vertical',
    label: themeLayoutModeLabels.vertical
  },
  {
    value: 'horizontal',
    label: themeLayoutModeLabels.horizontal
  },
  {
    value: 'vertical-mix',
    label: themeLayoutModeLabels['vertical-mix']
  },
  {
    value: 'horizontal-mix',
    label: themeLayoutModeLabels['horizontal-mix']
  }
];

export const themeScrollModeLabels: Record<UnionKey.ThemeScrollMode, string> = {
  wrapper: '外层滚动',
  content: '主体滚动'
};


export const themeScrollModeOptions: Common.OptionWithKey<UnionKey.ThemeScrollMode>[] = [
  {
    value: 'wrapper',
    label: themeScrollModeLabels.wrapper
  },
  {
    value: 'content',
    label: themeScrollModeLabels.content
  }
];
