import app from "./app";
import { logger } from "./lib/logger";
import { startBot } from "./bot";

const rawPort = process.env["PORT"] || "10000";
const port = Number(rawPort);

app.listen(port, (err) => {
  if (err) {
    logger.error({ err }, "Error listening on port");
    process.exit(1);
  }
  logger.info({ port }, "Server listening");
});

if (process.env["TELEGRAM_BOT_TOKEN"]) {
  startBot();
} else {
  logger.warn("TELEGRAM_BOT_TOKEN not set - Telegram bot not started");
}
