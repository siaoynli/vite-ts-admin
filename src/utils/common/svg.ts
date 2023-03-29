export const files: Record<string, string> = import.meta.glob('@/assets/svg-icons/*.svg', {
  eager: true,
  import: 'default'
})

export function allSvgFiles() {
  const name: string[] = []
  Object.keys(files).forEach((c: string) => {
    //删除src/assets/icons
    c = c.substring(0, c.length - 4).slice(17)
    name.push(c)
  })
  return name
}
