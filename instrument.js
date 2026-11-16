// instrument.js
import "dotenv/config";          // only if your DSN is in .env
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [Sentry.expressIntegration()],
  tracesSampleRate: 1.0,
  enableLogs: true,
});