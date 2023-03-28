import type { ProxyOptions } from 'vite';

/**
 * 设置网络代理
 * @param isOpenProxy - 是否开启代理
 * @param envConfig - env环境配置
 */
export function createViteProxy(isOpenProxy: boolean, envConfig: ServiceEnvConfigWithProxyPattern) {
  if (!isOpenProxy) return undefined;

  const proxy: Record<string, string | ProxyOptions> = {
    [envConfig.proxyPattern]: {
      target: envConfig.url,
      changeOrigin: true,
      rewrite: path => path.replace(new RegExp(`^${envConfig.proxyPattern}`), '')
    }
  };

  return proxy;
}


export function getProxyEnvConfig(env: ImportMetaEnv): ServiceEnvConfigWithProxyPattern {
  const { VITE_PROXY_HOST } = env
  return {
    url: VITE_PROXY_HOST,
    proxyPattern: '/proxy-pattern'
  }
}