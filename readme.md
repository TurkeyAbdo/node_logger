## log levels

their is different log levels the lower the number the higher
server it is

```javascript
    {
        error: 0,
        warn: 1,
        info: 2,
        http: 3,
        verbose: 4,
        debug: 5,
        silly: 6
    }
```

winston is designed to be a simple and universal logging library with support for multiple transports. A transport is essentially a storage device for your logs. Each winston logger can have multiple transports (see: Transports) configured at different levels (see: Logging levels). For example, one may want error logs to be stored in a persistent remote location (like a database), but all logs output to the console or a local file.

the default loging level is 2 (info)
so you can't log anything after info if you don't specify the level

## format

Formats in winston can be accessed from winston.format. They are implemented in logform, a separate module from winston. This allows flexibility when writing your own transports in case you wish to include a default format with your transport.

In modern versions of node template strings are very performant and are the recommended way for doing most end-user formatting. If you want to bespoke format your logs, winston.format.printf is for you:

```javascript
const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(label({ label: "right meow!" }), timestamp(), myFormat),
  transports: [new transports.Console()],
});
```

you can alsot combine to formats useing a **format.combine** and add colorize it
useing a colorize() method

```javascript
const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf ,colorize} = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(
    label({
        colorize(),
        label: "right meow!" }),
        timestamp(),
        myFormat
    ),
  transports: [new transports.Console()],
});
```

https://github.com/winstonjs/winston <br/>
