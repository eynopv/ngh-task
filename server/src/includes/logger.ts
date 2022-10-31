import winston from 'winston';

const format = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp(),
  winston.format.printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
  })
);

const consoleTransport = new winston.transports.Console({
  format: format
});

const logger = winston.createLogger({
  level: 'debug',
  transports: [
    consoleTransport
  ]
});

export default logger;
