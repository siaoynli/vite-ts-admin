
import path from 'path'

export function getRootPath() {
  return path.resolve(__dirname)
}


export function getSrcPath() {
  return path.resolve(__dirname, 'src')
}


export function getDirPath(dir = "src") {
  return path.resolve(__dirname, dir)
}