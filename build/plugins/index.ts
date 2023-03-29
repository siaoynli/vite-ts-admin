
import vue from '@vitejs/plugin-vue'
import { splitVendorChunkPlugin, type PluginOption } from 'vite'

import progress from 'vite-plugin-progress'
import colors from 'picocolors'
import removeConsole from "vite-plugin-remove-console";
import viteCompression from 'vite-plugin-compression';


import eslint from "./eslint"
import html from './html';
import unplugin from './unplugin';
import svgIcon from './svgIcon';
import rollup from './rollup';




export function setupVitePlugins(viteEnv: ImportMetaEnv): (PluginOption | PluginOption[])[] {
  const plugins = [
    vue(),
    eslint(),
    svgIcon(),
    html(viteEnv),
    unplugin(),
    viteCompression(),
    removeConsole(),
    progress({
      format: `${colors.green(colors.bold('Bouilding'))} ${colors.cyan(
        '[:bar]'
      )} :percent`
    }),
    splitVendorChunkPlugin(),
  ];
  if (viteEnv.DEV) {
    plugins.push(rollup());
  }
  return plugins;
}