# Voice Discord Multiple 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)  <!-- Badge for license -->

## Description
This project provides a voice command interface for Discord, allowing users to interact with the Discord server through various commands. Key features include:

- **Voice Commands**: Send voice commands to perform actions within the Discord server.
- **Auto Send Messages**: Automatically send predefined messages at specified intervals.
- **Auto Wakeup**: Wake up and respond to specific triggers or commands.

![Version](https://img.shields.io/badge/version-1.0.1-blue.svg)  <!-- Badge for version -->

## Cloning the Repository
To clone this repository, run the following command:
```
git clone https://github.com/getlies/Voice-Discord-Multiple
```

## Installation
To install the project, run:
```
npm install
```

## Usage
To use the project, execute:
```
node index.js
```

### Configuration
Here is the configuration object from `setup/config.js` that you can customize:

```javascript
const config = {
  prefix: "+",                           // Command prefix
  AutoWakeupJockie: false,               // Enable or disable auto wakeup functionality
  allowedUsers: [
    "123456789012345678",                // Your Discord user ID 
    "987654321098765432"                 // Additional user IDs
    sayReplyEnabled: false,              // Enable or disable replytag command say
  ],
  VC: {
    channelId: "channelId",              // ID of the voice channel
    selfMute: false,                     // Mute the bot in the voice channel
    selfDeaf: false,                     // Deaf the bot in the voice channel
    stream: false                        // Stream audio from the voice channel
  },
  levelingRole: {
    levelingspamSet: false,              // Enable or disable leveling spam
    spamchannelId: "channelId",          // ID of the spam channel
    spamContent: "_ _",                  // Content for spam messages 
    spamInterval: 50000,                 // Interval for sending spam messages (in milliseconds)
    autoDeleteSpam: false,               // Enable or disable auto deletion of spam messages
    deleteInterval: 100                  // Interval for deleting spam messages (in milliseconds)
  }
};
module.exports = config;
```

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Note
**Please be aware that disabling your account is done at your own risk. This project is shared solely for educational purposes, and I do not take responsibility for any consequences that may arise from its use.**

## Updates
- The `+say` command behavior has been updated. The `sayReplyEnabled` flag in `setup/config.js` controls whether the bot replies to the command message (`true`) or sends a message to the channel without replying (`false`).
