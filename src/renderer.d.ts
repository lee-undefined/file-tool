export interface IElectronAPI {
  openFile: () => Promise<void>;
  percentCPUUsage: () => Promise<void>;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
