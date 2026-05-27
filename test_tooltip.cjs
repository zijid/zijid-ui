const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  await page.goto("http://localhost:5173/tooltip", { waitUntil: "networkidle" });
  await page.screenshot({ path: "tooltip-full.png", fullPage: true });
  console.log("Full page screenshot saved");
  
  const buttons = await page.locator(".z-tooltip").all();
  console.log("Found " + buttons.length + " tooltip wrappers");
  
  for (let i = 0; i < buttons.length; i++) {
    await buttons[i].hover({ force: true });
    await page.waitForTimeout(400);
    await page.screenshot({ path: "tip-" + i + ".png" });
    console.log("Tooltip " + i + " screenshot saved");
  }
  
  await browser.close();
})();
