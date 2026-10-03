import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('link', { name: 'Skechers Mens Summits -' }).dblclick();
  await page.goto('https://www.amazon.in/Skechers-232057ID-LTGY-Skechers-232057ID-LTGY-SHOES-Mens-Casual-Shoes-UK9/dp/B0BQHQ2QGZ/?_encoding=UTF8&pd_rd_w=Nb8dr&content-id=amzn1.sym.b919c641-8e33-49fa-a820-0b6961c2556f&pf_rd_p=b919c641-8e33-49fa-a820-0b6961c2556f&pf_rd_r=4SM7XPS14EGGJJQKTKY5&pd_rd_wg=qO3oz&pd_rd_r=77481afe-1476-4aa9-bbd1-f43ded5bca2e&ref_=pd_hp_d_r_btf_a2i_gw_cml&th=1&psc=1');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'DOCTOR HEALTH SUPER SOFT Men\'s Running Shoes | Lightweight Sports Shoes with' }).dblclick();
  const page1 = await page1Promise;
  await page1.goto('https://www.amazon.in/dp/B0HJ8KX512/ref=sspa_dk_detail_0?pd_rd_i=B0HJ8KX512&pd_rd_w=kPRbB&content-id=amzn1.sym.9a67d0ba-b3d8-41ee-8e29-a3d839054b56&pf_rd_p=9a67d0ba-b3d8-41ee-8e29-a3d839054b56&pf_rd_r=CFKZW0EE6JV0N2H5PHSF&pd_rd_wg=yVLSZ&pd_rd_r=8fffbbee-3e89-4d9a-b5a2-a2ba9e8f1561&aref=yWjoC7I0CQ&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWwy&th=1&psc=1');
  const page2Promise = page1.waitForEvent('popup');
  await page1.getByRole('link', { name: 'Glemia Men\'s Shoes,' }).dblclick();
  const page2 = await page2Promise;
});