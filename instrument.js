// instrument.js
import "dotenv/config";          // only if your DSN is in .env
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: process.env.SENTRY_DSN,   // note: your pasted `dsn: ,` is a syntax error
  integrations: [Sentry.expressIntegration()],
  tracesSampleRate: 1.0,
});