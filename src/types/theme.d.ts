declare namespace Theme {

  interface Setting {
    /** 暗黑模式 */
    darkMode: boolean;
    /** 是否自动跟随系统主题 */
    followSystemTheme: boolean;
    //主题颜色
    themeColor: string,
    //主题颜色列表
    themeColorList: string[],

    /** 自定义颜色 */
    customColor: CustomColor;
    /** 是否自定义info的颜色(默认取比主题色深一级的颜色) */
    isCustomizeInfoColor: boolean
  }


  interface CustomColor {
    /** 信息 */
    info: string;
    /** 成功 */
    success: string;
    /** 警告 */
    warning: string;
    /** 错误 */
    error: string;
  }

}