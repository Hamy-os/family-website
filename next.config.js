module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
    serverName: "JoeMama",
    fullServerName: "Joe Mama RP",
    discordLink: "https://discord.gg/YXa8AUW7Sf",
    fivemServerId: "vjarme",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    lspdApp: "https://form.typeform.com/to/d3cL14qy",
    bcsoApp: "",
    civApp: "",
    commsApp: "",
    devApp: "",
    staffApp: "",
    sahpApp: "",
    safrApp: "",
    bannerLink: "https://i.file.glass/i3ac2.webp",
    ownerName: "SaltySea",
    aboutText: "SaltySea is the maker and designer of this website. He hopes you enjoy it and have fun without. Much love xoxo",
    serverDescription: "Nulla minim incididunt magna consectetur ipsum ex aliqua officia eu occaecat commodo laborum sint. Dolore ad occaecat fugiat quis velit ex anim enim quis. Exercitation officia ad irure consequat officia veniam mollit incididunt Lorem ex. Occaecat deserunt est ad non cupidatat laboris ullamco do adipisicing proident duis nostrud. Ad enim non non in enim ea nostrud do voluptate sunt eiusmod.",
    advantageN1: "Quality Roleplay 💪",
    advantageN2: "Serious RP 😊",
    advantageN3: "Active Staff 👷‍♂️",
    advantageN4: "Custom Scripts 📃",
    advantageN5: "Custom Cars 🏎 And EUP",
    advantageN6: "Awesome website 😎",
  },
  reactStrictMode: true,  
  images: {
    domains: ['i.file.glass'],
  },
}