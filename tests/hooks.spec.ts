import { test, expect, Page } from '@playwright/test';

test.beforeAll('Before All', async () => {
    console.log('Before All');
  });

test.afterAll('After all', async () =>  {
   console.log('After all');
});  

test.beforeEach('Before Each', async () => {
  console.log('Before Each');

});

test.afterEach('After Each', async () => {
    console.log('After Each');
});

test('test1', async   ({page}) => {
  console.log('Test 1');
});

test('test2', async   ({page}) => {
  console.log('Test 2');
});