
import path from 'path'

export function getRootPath() {
  return path.resolve(process.cwd());
}


export function getSrcPath() {
  const rootPath = getRootPath();
  return `${rootPath}/src`;
}


export function getDirPath(dirName = "src") {
  const rootPath = getRootPath();
  return `${rootPath}/${dirName}`;
}