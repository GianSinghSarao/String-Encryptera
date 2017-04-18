var electronInstaller = require('electron-winstaller');
createWindowsInstallfile = electronInstaller.createWindowsInstaller({
    appDirectory: './Packaged/String Encrypter-Decrypter-win32-ia32/',
    outputDirectory: './Installer/String Encrypter-Decrypter-win32-ia32/',
    loadingGif: 'loader.gif',
    authors: 'Gian Singh Sarao',
    exe: 'String Encrypter-Decrypter.exe',
    iconUrl: 'icon.ico',
    setupIcon: 'icon.ico',
    setupExe: 'String Crypter Installer.exe',
    setupMsi: 'String Crypter Installer.msi'
  });
