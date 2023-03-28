/// <reference types="vite/client" />

declare module "*.vue" {
  import { ComponentOptions } from "vue"
  const component: ComponentOptions
  export default component
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_NAME: string
  readonly VITE_HTTP_PROXY: boolean
  readonly VITE_SERVICE_HOST: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

type ServiceEnvType = 'dev' | 'prod';

/** 后台服务的环境配置 */
interface ServiceEnvConfig {
  /** 请求地址 */
  url: string;
}


interface ServiceEnvConfigWithProxyPattern extends ServiceEnvConfig {
  /**
   * 匹配路径的正则字符串
   * - 用于拦截地址转发代理(任意以 /开头 + 字符串, 单个/不起作用)
   * - 和后端请求地址的前缀无关
   * - 有多个后端请求实例时，需要创建不同的值
   */
  proxyPattern: '/proxy-pattern';
}