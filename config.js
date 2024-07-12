const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "18768375254";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_17_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzksXG4gICAgICAgIDgzLFxuICAgICAgICA0NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICA5NCxcbiAgICAgICAgODksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA5LFxuICAgICAgICA2NixcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ3LFxuICAgICAgICA0NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NixcbiAgICAgICAgNDEsXG4gICAgICAgIDgwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjAyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjExLFxuICAgICAgICA3OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDkxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzQsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAzNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDksXG4gICAgICAgIDc1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAzMyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA5NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjksXG4gICAgICAgIDc3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTk5LFxuICAgICAgICA3LFxuICAgICAgICA2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTksXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTksXG4gICAgICAgIDgxLFxuICAgICAgICA0MixcbiAgICAgICAgMzUsXG4gICAgICAgIDE3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM2LFxuICAgICAgICA0NixcbiAgICAgICAgMTY3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTExLFxuICAgICAgICA5LFxuICAgICAgICAxODEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI5LFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA4NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDMyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjExLFxuICAgICAgICA4OCxcbiAgICAgICAgMTAyLFxuICAgICAgICA5MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDc4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQwLFxuICAgICAgICAwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNixcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjU1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTksXG4gICAgICAgIDM3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDI3LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUXJ0ZURQUERxbjV0ZmlYUWFMTHg2eDEwVFFEQTlhay92L0twU0M1RmxGZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTF9VVUpRRTBTQ2F2U3hJUjhaemlXZ1wiLFxuICBcInBob25lSWRcIjogXCI2MjBiYmI1YS0zYmQ1LTQxMWQtOWNiYy0zODJiMDg0ZWQwODZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM5LFxuICAgICAgMTU0LFxuICAgICAgMjAyLFxuICAgICAgMTIsXG4gICAgICAxNDMsXG4gICAgICA2NixcbiAgICAgIDI1MSxcbiAgICAgIDIyMCxcbiAgICAgIDM0LFxuICAgICAgMCxcbiAgICAgIDI5LFxuICAgICAgMjEzLFxuICAgICAgODcsXG4gICAgICAyNTIsXG4gICAgICAxNTUsXG4gICAgICAxMzQsXG4gICAgICAyMDIsXG4gICAgICAyMDQsXG4gICAgICAxNTEsXG4gICAgICA0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0OSxcbiAgICAgIDE5LFxuICAgICAgOTEsXG4gICAgICAxODYsXG4gICAgICA4MyxcbiAgICAgIDE5MSxcbiAgICAgIDg4LFxuICAgICAgMTY5LFxuICAgICAgMjAxLFxuICAgICAgMjAsXG4gICAgICA2NixcbiAgICAgIDE3NSxcbiAgICAgIDksXG4gICAgICAxNTQsXG4gICAgICA2OCxcbiAgICAgIDIyNixcbiAgICAgIDIzMyxcbiAgICAgIDM2LFxuICAgICAgMTUwLFxuICAgICAgNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSkM2VlE2WTdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjE4NzY4Mzc1MjU0OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4NjEyNzUzMjg2Nzc0NDoyNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPcnpzdm9HRU5DQ3hyUUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJMTnRieHZLbUY2OElzbTMxb3RmN01nczRxSnB5ZVpzeGFnQjYxNGpKVVk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiV1ZJSzRoVE9Lb2tHaEFYMC9MbytUdEdxQ3dVRWFxMTQ4bkVXcjNTQ2xGUGZvZWFnV25IRUYvTmVGK0R6WUVpSERpM01hekViS1ZRZUJVWE4zL2xTRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOStlSnZiNjh4QU1lOHFaeEdMU2U3SG53amRUSUh5NlN5bzRVbjVtdEFja08xaEN5SXRaYWExUGpOU2N2L2ZPSWJHWjUwUkRMQStxY3ZhdG1wUDFOQUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMTg3NjgzNzUyNTQ6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwODExODYwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "『 ᴰᵉᵛᶦˡ 』ŁØNɆŁɎƵȺꝀ『 ᴰᵉᵛᶦˡ",


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
