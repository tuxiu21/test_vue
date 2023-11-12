module.exports = {
  packagerConfig: {
    asar: true,
    name:"OJ",
    icon:'./icons/icon'
  },
  rebuildConfig: {},
  makers: [
    // {
    //   name: '@electron-forge/maker-squirrel',
    //   config: {},
    // },
    {
      name: '@electron-forge/maker-wix',
      config: {
        language: 1033,
        manufacturer: 'My Awesome Company'
      }
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
    // {
    //   name: '@electron-forge/maker-squirrel',
    //   config: {
    //     certificateFile: './cert.pfx',
    //     certificatePassword: process.env.CERTIFICATE_PASSWORD
    //   }
    // }
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
};
