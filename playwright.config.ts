import { defineConfig, devices } from "@playwright/test";

const PORT = Number(process.env.PORT || 8000);
const BASE_URL = process.env.PLAYWRIGHT_BASE_URL || `http://127.0.0.1:${PORT}`;
const isCI = !!process.env.CI;

export default defineConfig({
    testDir: "./tests",
    fullyParallel: true,
    forbidOnly: isCI,
    retries: isCI ? 2 : 0,
    workers: isCI ? 1 : undefined,
    reporter: isCI ? [["github"], ["html", { open: "never" }]] : [["list"], ["html", { open: "never" }]],
    use: {
        baseURL: BASE_URL,
        trace: "on-first-retry",
        screenshot: "only-on-failure",
        video: "retain-on-failure",
    },
    projects: [
        { name: "chromium", use: { ...devices["Desktop Chrome"] } },
        { name: "mobile", use: { ...devices["Pixel 7"] } },
    ],
    webServer: process.env.PLAYWRIGHT_BASE_URL
        ? undefined
        : {
              command: process.env.PLAYWRIGHT_USE_BUILD ? "npm run start" : "npm run dev",
              url: BASE_URL,
              reuseExistingServer: !isCI,
              timeout: 120_000,
              env: {
                  PORT: String(PORT),
              },
          },
});
