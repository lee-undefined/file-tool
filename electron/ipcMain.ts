// process.d.ts
const { ipcMain, dialog, process } = require("electron");

ipcMain.handle("openFile", async (event: Event, someArgument: any) => {
  const result = dialog.showOpenDialog({
    properties: ["openFile", "multiSelections"],
  });
  return result;
});
ipcMain.handle("percentCPUUsage", async (event: Event, someArgument: any) => {
  const result = process.getCPUUsage();
  console.log(result);

  return result;
});
