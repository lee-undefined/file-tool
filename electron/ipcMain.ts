const { ipcMain, dialog } = require("electron");

ipcMain.handle("openFile", async (event: Event, someArgument: any) => {
  const result = dialog.showOpenDialog({
    properties: ["openFile", "multiSelections"],
  });
  return result;
});
