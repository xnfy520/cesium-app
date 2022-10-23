const modulesFiles = import.meta.glob('./*/*.vue', { eager: true });
console.log(import.meta);

const modules: any = {};
for (const key in modulesFiles) {
    const moduleName = key.replace(/(.*\/)*([^.]+).*/gi, '$2');
    const value: any = modulesFiles[key];
    modules[moduleName] = value.default;
}

export default modules;