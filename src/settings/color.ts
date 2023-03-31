import colorJson from "./color.json"

interface traditionColorsDetail {
  label: string
  color: string
}


interface traditionColor {
  label: string
  data: traditionColorsDetail[]
}

//判断颜色是否在传统颜色中
export function isInTraditionColors(color: string) {
  return traditionColors.some(item => {
    const flag = item.data.some(v => v.color === color);
    return flag;
  });
}


export const traditionColors = colorJson as traditionColor[]
