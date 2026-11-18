// Gera os PNG de todas as peças: node instagram/gerador/render.js
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const out = path.resolve(__dirname, '..');
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1200, height: 2000 }, deviceScaleFactor: 1 });
  await p.goto('file://' + path.join(__dirname, 'pecas.html'));
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(500);
  const ids = await p.$$eval('[id]', els => els.map(e => e.id).filter(i => /^(perfil|post|story|destaque)-/.test(i)));
  for (const id of ids) {
    const dir = id.startsWith('post') ? 'posts' : id.startsWith('story') ? 'stories' : id.startsWith('destaque') ? 'destaques' : 'perfil';
    await p.locator('#' + id).screenshot({ path: path.join(out, dir, id + '.png') });
    console.log(dir + '/' + id + '.png');
  }
  await b.close();
})();
