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

https://github.com/winstonjs/winston <br/>
