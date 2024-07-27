# singsing-ruby-bot

singsing-ruby-bot is a Telegram automation tool designed to help you manage and interact with [singsing](https://t.me/SingSing_TG_bot/app?startapp=1370196228-club668a76adef86ae0c0d24bd84).

<p align="center">
  <img src="public/singsing.jpg" alt="Sing Sing" width="300"/>
  <img src="public/run.png" alt="run" width="300"/>
</p>

### Features

- Auto claim Hourly mission
- Auto claim Daily mission

### How to use

[ WARNING ] this bot in development stage, if bot error you can try again. some error or bug will be fixed.

you can clone repository and add your token authorization

- Clone repository

```bash
git clone https://github.com/dkzhen/singsing-ruby-bot.git
```

- add config.json on folder configs nad if you multiple account format like this

```json
[
  {
    "token": "eyJh"
  },
  {
    "token": "eyJh"
  }
]
```

- install modules

```bash
npm install
```

- running script

```bash
npm run prod
```

### Token authorization

You can found on inspact element [F12] from telegram web. open the bot and see [ `on Headers Authorization from api singsing` ]

- `Authorization: eyJ..`

- example Authorization

```json
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWxsZXRfYWRkcmVzcyI6IjB4ZkM3NEQzMkY3NzZBNDY5NzQ2ODA5MmI3ZmUzYzRjMDk4ODIzNTk3OSIsInVzZXJfaWQiOiI2NjcyNWJjMTQzNDRhZTJmMWEwNDdmZjUiLCJ0Z19pZCI6IjE0OTMyMzExMTUiLCJ1c2VybmFtZSI6IjE0OTMyMzExMTUiLCJpYXQiOjE3MjA1MTQ2MjAsImV4cCI6MTcyMTExOTQyMH0.1AE50yLVEw_Eda1NbpvyojhQ0oLq4hm8vJEAXKx8zMA"
```

### Contact

You can contact me for more information or report an issue.

- [GitHub](https://github.com/dkzhen)

- [Telegram](https://t.me/dk_zhen2)
