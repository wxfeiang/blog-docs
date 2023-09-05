// .vitepress/autoSidebarPlugin.ts
import { closeSync, openSync, readdirSync, statSync, utimesSync } from "fs"
import { join } from "path"
import { DefaultTheme } from "vitepress"
export interface PluginOption {
  ignoreList?: string[]
  ignoreFlag?: string
  path?: string
  configExtname?: string
}

let configPath: string

export default function autoSidebarPlugin(option: PluginOption = {}) {
  const docsPath = join(process.cwd(), option.path || "/docs")

  configPath = join(docsPath, `/.vitepress/config.${option.configExtname || "ts"}`)

  return {
    name: "vite-plugin-vitepress-auto-nav",
    configureServer({ watcher }: any) {
      const fsWatcher = watcher.add("*.md")
      fsWatcher.on("all", (event: string) => {
        // 监听md文件变更，有增删文件时触发刷新
        if (event !== "change") {
          hotUpdate()
        }
      })
    },
    transform(source: string, id: string) {
      if (/\/@siteData/.test(id)) {
        // 创建侧边栏对象
        const sidebar = genSidebarMulti(docsPath, option)
        // 插入数据
        const code = injectSidebar(source, sidebar)
        return { code }
      }
    }
  }
}

function hotUpdate() {
  const time = new Date()

  // 通过修改配置文件修改时间或触发修改操作，使Vite刷新
  // 刷新后会重新运行生成操作，实现热更新功能
  try {
    utimesSync(configPath, time, time)
  } catch (err) {
    closeSync(openSync(configPath, "w"))
  }
}

function genSidebarMulti(path: string, options: PluginOption): DefaultTheme.SidebarMulti {
  let { ignoreFlag = "_", ignoreList = [] } = options
  ignoreList = [".vitepress", "public", "components", "assets", "scripts", ...ignoreList]
  const data: DefaultTheme.SidebarMulti = {}
  let dirs = readdirSync(path)
    .filter((n) => statSync(join(path, n)).isDirectory() && !ignoreList.includes(n))
    .sort(localeSort)

  for (const dir of dirs) {
    const items = genSideBarItems(ignoreFlag, path, dir)
    data[`/${dir}/`] = items
  }
  return data
}

function genSideBarItems(
  ignoreFlag: string,
  targetPath: string,
  ...rest: string[]
): DefaultTheme.SidebarItem[] {
  const result: DefaultTheme.SidebarItem[] = []

  let dirs = readdirSync(join(targetPath, ...rest)).sort(localeSort)

  for (const dir of dirs) {
    // 忽略固定前缀目录或文件
    if (dir.startsWith(ignoreFlag)) continue
    const isDir = statSync(join(targetPath, ...rest, dir)).isDirectory()
    if (isDir) {
      // 是非空目录
      const items = genSideBarItems(ignoreFlag, targetPath, ...rest, dir)
      if (items.length) {
        result.push({
          text: dir,
          collapsed: false,
          items
        })
      }
    } else {
      // 是页面
      const text = dir.replace(/.md$/, "")
      const item: DefaultTheme.SidebarItem = {
        text,
        link: "/" + [...rest, text].join("/")
      }
      result.push(item)
    }
  }
  return result
}

function injectSidebar(source: string, data: DefaultTheme.SidebarMulti) {
  const targetPosition = source.indexOf("{", source.indexOf("themeConfig")) + 1
  const sidebarStr = `"sidebar": ${JSON.stringify(data)},`.replace(/"/g, '\\"')
  return source.slice(0, targetPosition) + sidebarStr + source.slice(targetPosition)
}

function localeSort(a: string, b: string) {
  return a.localeCompare(b)
}
