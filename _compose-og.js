const sharp = require('sharp');
const fs = require('fs');

async function go() {
  const src = 'C:/Users/GregorJarisch/.gemini/antigravity/brain/4575f1e4-3639-46ad-9150-614dc1cc5ef6/og_background_1776073657542.png';
  
  // Render EDDI logo SVG
  const logoSvg = fs.readFileSync('src/assets/eddi-logo-dark.svg');
  const logoPng = await sharp(logoSvg).resize(380, null).png().toBuffer();
  
  // Create subtitle as SVG text
  const subtitleSvg = Buffer.from(
    `<svg width="420" height="50" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="32" font-family="Helvetica, Arial, sans-serif" font-size="28" fill="white" font-weight="300">The Enterprise AI Orchestrator</text>
    </svg>`
  );
  const subtitlePng = await sharp(subtitleSvg).png().toBuffer();
  
  // Create tagline as SVG text  
  const taglineSvg = Buffer.from(
    `<svg width="480" height="35" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="24" font-family="Helvetica, Arial, sans-serif" font-size="18" fill="#b59a5e" font-weight="300" font-style="italic">Self-hosted &#xB7; Configuration-driven &#xB7; Production-ready</text>
    </svg>`
  );
  const taglinePng = await sharp(taglineSvg).png().toBuffer();
  
  // Cover the ENTIRE right side from x=520 onwards (all AI text)
  const coverRect = await sharp({
    create: { width: 510, height: 1024, channels: 4, background: { r: 17, g: 17, b: 21, alpha: 255 } }
  }).png().toBuffer();
  
  await sharp(src)
    .composite([
      // Cover all AI-generated text on the right
      { input: coverRect, left: 520, top: 0 },
      // Real EDDI logo wordmark
      { input: logoPng, left: 580, top: 380 },
      // Subtitle below logo
      { input: subtitlePng, left: 580, top: 520 },
      // Tagline near bottom
      { input: taglinePng, left: 580, top: 780 },
    ])
    .extract({ left: 0, top: 130, width: 1024, height: 538 })
    .resize(1200, 630, { fit: 'fill' })
    .png()
    .toFile('public/og-image.png');
  
  console.log('Done');
}
go().catch(e => console.error(e));
