import * as electron from "electron";
import * as path from "path";
import * as url from "url";
var win;
function createWindow() {
    win = new electron.BrowserWindow({
        autoHideMenuBar: true,
        fullscreen: true,
        fullscreenable: false,
        maximizable: true
    });
    win.loadURL(url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file:",
        slashes: true
    }));
    win.on("closed", function () {
        win = null;
    });
}
electron.app.on("ready", createWindow);
electron.app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        electron.app.quit();
    }
});
electron.app.on("activate", function () {
    if (win === null) {
        createWindow();
    }
});
