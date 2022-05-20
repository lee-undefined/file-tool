const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  openFile: () => ipcRenderer.invoke("openFile"),
  percentCPUUsage: () => ipcRenderer.invoke("percentCPUUsage"),
});
