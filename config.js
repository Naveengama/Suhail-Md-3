const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94762252934";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_08_03_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTExLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDkwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAyLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNixcbiAgICAgICAgNjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgODYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNixcbiAgICAgICAgNDAsXG4gICAgICAgIDM2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTE2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDk3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE0LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODksXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDg0LFxuICAgICAgICAzMixcbiAgICAgICAgMTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgODEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMzksXG4gICAgICAgIDM3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDgwLFxuICAgICAgICA1MixcbiAgICAgICAgOTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjE3LFxuICAgICAgICA4NixcbiAgICAgICAgMTMwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3LFxuICAgICAgICA3MixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDg4LFxuICAgICAgICA4MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxODUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDkzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDYxLFxuICAgICAgICA0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODEsXG4gICAgICAgIDc0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwick5tVzNnQU1EU2todlA5bVRDWGl3SFRvM0gvaUxhZ0Z5UWdERG54THY0VT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc2MjI1MjkzNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTBFRUE0RkQwNUUzREREM0REQkYxMDM3QURGNDg5MjdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQxMTg3MzE4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NjIyNTI5MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjRCODdDMzBERUI0NEU0ODYxMkYzRkI1MDcxRUE4NUY2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0MTE4NzMxOVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJyYUdpT1VBRFJSaUhGUzU0UmZxYzVRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjFlZjNkNzRhLWIwZGQtNGY1My1iM2YyLTM5Y2ZjZDA4OWFkM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTgsXG4gICAgICAxOTQsXG4gICAgICAyMCxcbiAgICAgIDEwNCxcbiAgICAgIDE0MCxcbiAgICAgIDI0OCxcbiAgICAgIDgzLFxuICAgICAgMjAwLFxuICAgICAgMTYzLFxuICAgICAgMjUwLFxuICAgICAgMTM4LFxuICAgICAgMTY1LFxuICAgICAgMTM2LFxuICAgICAgMjQxLFxuICAgICAgMTIsXG4gICAgICAzMixcbiAgICAgIDE3LFxuICAgICAgMTksXG4gICAgICA5MSxcbiAgICAgIDI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNixcbiAgICAgIDEyOSxcbiAgICAgIDg3LFxuICAgICAgNyxcbiAgICAgIDIxNixcbiAgICAgIDEwMyxcbiAgICAgIDcsXG4gICAgICA2MCxcbiAgICAgIDI0OCxcbiAgICAgIDE0NyxcbiAgICAgIDE0MixcbiAgICAgIDIzMSxcbiAgICAgIDQ1LFxuICAgICAgMTE2LFxuICAgICAgMTgwLFxuICAgICAgMTU2LFxuICAgICAgOSxcbiAgICAgIDUsXG4gICAgICAxNzksXG4gICAgICAyMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWVNFTlFDV1lcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzYyMjUyOTM0OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY0NDgwOTE0NDU2NjU3OjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS21YM2drUTd0R2h2Z1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrSmJlU1NXOVd2RWM5bjZkT1J5aTY1YUExL2hXaFpBWjF1VlBIVkFtRFI0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInZ0a0M3Z0RSUDVkZ0V5MFEwMDRxZkdtNnhPS3FuVXhDaWtTS0pMcTN3M1hJaDk1WWFYU2FDNkhnS3IvdjZ2SzhzaVEyVy9aTVdFNU5RbitQYTZQU0FnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImwzWE9GVjlpSUE0bWVKUFFsc3NtSzNWNWdFcEJKa1YxaEN0MS9GSGJmempIOFRjanhuVjZjOC9kSS9mZEs3T1Q4ZWZuOVErNUdRVzMwT1pwVW1EZ2dBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzYyMjUyOTM0OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQxMTg3MzEzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRmJQXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGYlAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJeE5rM1pEK0lEQ1Flc1NmY3pOVTZRbElkRGFOUVNUZXoydVNSdHJPdTBFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNDE3NDQ5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDExODczMTY2OTdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Malik sahab",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "MALIK SAHAB",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
