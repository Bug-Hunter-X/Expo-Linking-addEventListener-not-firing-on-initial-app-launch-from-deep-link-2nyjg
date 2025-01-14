# Expo Linking.addEventListener Not Firing on App Launch from Deep Link

This repository demonstrates a bug in Expo's `Linking` API where `Linking.addEventListener` fails to trigger when the app is initially launched via a deep link.  While `Linking.getInitialURL` successfully retrieves the deep link URL, the event listener remains inactive.

## Problem

The expected behavior is that `Linking.addEventListener` should fire when the app is launched from a deep link. However, in this case, the event listener is only triggered when a new deep link is opened *after* the app has already started.

## Solution

The solution involves using `Linking.getInitialURL` to handle the initial deep link and then setting up the `Linking.addEventListener` for subsequent deep links.