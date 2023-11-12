const { app, BrowserWindow } = require('electron')


const path=require('node:path')

const createWindow=()=>{
    const win=new BrowserWindow({
        width:800,
        height:600,
        // webPreferences:{
        //     // __dirname是electron自带的参量
        //     preload:path.join(__dirname,'preload.js')
        //     //path.join API 将多个路径联结在一起，创建一个跨平台的路径字符串。
        // }
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    // win.loadFile('wxxyoj2/index.html')
    const indexPath = path.join(__dirname, 'wxxyoj4/index.html')
    win.loadFile(indexPath)

    // win.webContents.on('will-navigate', (event, url) => {
    //     // event.preventDefault()
    //     console.log(event);
    //     console.log(url);
    //     // app.quit()
    //     // win.loadFile(indexPath)
        
    // })

    // let contents = win.webContents
    // contents.openDevTools()
}

app.whenReady().then(()=>{
    createWindow()
    app.on('activate',()=>{
        if(BrowserWindow.getAllWindows().length===0) createWindow()
    })
})

app.on('window-all-closed',()=>{
    if(process.platform!=='darwin') app.quit()
})
