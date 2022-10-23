const modulesFiles = import.meta.glob('./*/*.*', { eager: true })
const modules: any = {};
for (const key in modulesFiles) {
  const moduleName = key.replace(/(.*\/)*([^.]+).*/gi, '$2');
  const value: any = modulesFiles[key];
  if (value.default) {
    // 兼容js
    modules[moduleName] = value.default;
  } else {
    // 兼容ts
    modules[moduleName] = value;
  }
}
export default modules;