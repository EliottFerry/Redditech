/**
 * @format
 */
<<<<<<< HEAD
import React from 'react';
import serviceStorage from '../services/Storage';

it('Info user icon', async () => {
  expect(await serviceStorage.getData("user_icon_img")).toBeUndefined();
});

it('Info username', async () => {
  expect(await serviceStorage.getData("Username")).toBeUndefined();
});

it('Info user description', async () => {
  expect(await serviceStorage.getData("user_description")).toBeUndefined();
});

it('Info user banner', async () => {
  expect(await serviceStorage.getData("user_banner")).toBeUndefined();
});
=======

import 'react-native';
import serviceStorage from '../services/Storage';
 
describe('Test Suite 1', function() {
    it('Test 1', function() {
        assert.ok(true, "This shouldn't fail");
    })

    it('Test 2', function() {
        assert.ok(1 === 1, "This shouldn't fail");
        assert.ok(false, "This should fail");
    })
})
>>>>>>> f1c6b6b716378d023bcc33a56a912874c16d9746
