# React-Teller

[![Build Status](https://travis-ci.org/yatharthk/react-teller.svg?branch=master)](https://travis-ci.org/yatharthk/react-teller) [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> ReactJS notifications for the ES6 age. :rocket:

```
npm install --save react-teller
```

Harnessing the power of ES6 [tagged template literals](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals), `React-Teller` makes it extremely intuitive and fun to write notification components.

## Usage

Firstly, you define your notification using ES6 template strings:

```javascript
import React from 'react'
import Notification from 'react-teller'
import 'react-teller/dist/react-teller.css'

const MyNotification = Notification`
  Hello, I'm a notification!
`
```

And then you call your notification whenever needed:

```javascript
MyNotification()
```

Interesting, right? Let's go through some more features of `React-Teller` and how you can configure it.

### Title

An easy way to provide the `title` for your notification is through text line preceded with `#`.

```javascript
const MyNotification = Notification`
  # Notification Title
  Hello, I'm a notification
`
```

> NOTE: Only first line (preceded with `#`) will be taken into account as title. Rest goes into notification text content. Also, title should be placed preceding the content text.

### Configuration

`React-Teller` provides a number of configuration options:

| Option | Value(s) | Default |
|--------|----------|---------|
| `type` | `info` `success` `warning` `error`| `info` |
| `position` | `top-right` `top-left` `bottom-right` `bottom-left` | `top-right` |
| `animation` | `fade` `slide` | `slide` |
| `duration` | `(in ms)` | `5000` |

> NOTE: Currently, the animation supports `slide-out` effect only. More effects will be added in upcoming releases.

Adding configuration to your notification has been made dead simple. No additional JSON objects anymore. Just add configuration props to template at the very beginning following these rules:

- Starts with `--`
- One property each line

For instance,

```javascript
const MyNotification = Notification`
  -- position: top-left
  -- type: success
  # Notification Title
  Hello, I'm a notification
`
```

### Invocation/Rendering

As you must have noticed, `React-Notification` doesn't return a react component that you can render inside your other components. It's returns a function that takes care of rendering by itself.

### Calling notifications with data

Up till now you've seen templates with plain text. Now that's not very useful for all the cases. Let's say you have to shoot out a notification welcoming your newly on-boarded user addressing his name. You won't keep writing notifications every time with a new name, right? Write reusable notification:

```javascript
// declare reusable notification
const WelcomeUser = Notification`
  # Hey, ${0}!
  XYZ welcomes you onboard. Get started with writing about yourself!
`

WelcomeUser('John')
```

You can also use named variables and then pass object (instead of a `string`) with variable as `key`:

```javascript
const WelcomeUser = Notification`
  # Hey, ${'name'}!
  XYZ welcomes you onboard. Get started with writing about yourself!
`

WelcomeUser({name: 'John'})
```

### Overriding default configuration

Probably, there'll be times when you'd like to change the default configuration you've put up at the time of defining your notification. Well, it's as simple as passing first argument (while invoking your notification) as a JSON object with overriding properties and then your data values.

For example you declare your `WelcomeUser` notification of `type: info` :

```javascript
const WelcomeUser = Notification`
  -- type: info
  # Hey, ${'name'}!
  XYZ welcomes you onboard. Get started with writing about yourself!
`
```

At the time of invocation, maybe you need to render it as `type: success`. It's as simple as:

```javascript
WelcomeUser(
  {type: 'success'}, // overriding template config, very first argument
  {name: 'John'},    // Your usual template data
)
```

### Mouse Events

`React-Teller` currently ships with an `onClick` event that you pass with or in place of `overriding configuration` at the time of invoking the notification function.

```javascript
const handleClick = () => { /* do something */ }

WelcomeUser({onClick: handleClick, ...overrides}, {name: 'John'})
```

### Animation

`React Teller` ships with two effects - `Slide in-Slide out` and `Fade in-Fade out`. You can refer to the configuration table for valid `animation` property values.

## todo

- Better test coverage
- More animation/effects
- Supporting React components
- et al

## License

Licensed under the MIT License, Copyright © Yatharth Khatri.
