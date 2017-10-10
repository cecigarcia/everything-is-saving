# Everything is saving: 
#### the inspiring story of creating a react-native app


## Getting Started

### Trying and dismissing create-react-native-app

At first, we try to follow the react-native [Quick Start tutorial](https://facebook.github.io/react-native/releases/next/docs/getting-started.html) installing and using the create-react-native-app command line utility (node is needed):

* npm install -g create-react-native-app
* create-react-native-app EverythingIsSaving
* npm start

Later, we **dismissed this option** because it's not possible to include custom native modules beyond the React Native APIs and components that are available in the Expo client app. If you know that you'll eventually need to include your own native code in addition to JS you can use the create-react-native-app command anyway and use **npm run eject** at some point to create your own native builds or you can just build the project with native code, as we did.


### Building Projects With Native Code (so much better, we hope)

Follow the React-native ['Building Projects with Native Code' tutorial](https://facebook.github.io/react-native/releases/next/docs/getting-started.html)

The instructions are a bit different depending on your development operating system, and whether you want to start developing for iOS or Android. We started with macOS and iOS (node and watchman needed) but the main steps are similar:

* npm install -g react-native-cli
* Open iOS simulator (Android emulator in the other case)
* react-native run-ios / react-native run-android

We also created a [github repository](https://github.com/cecigarcia/everything-is-saving) 

## Install the right dependencies

### Babel

Babel preset for react-native

* npm install --save babel-preset-react-native


### Look and feel

Customizable Icons for React Native 

* npm install --save react-native-vector-icons

[NativeBase](https://nativebase.io/) 

* npm install native-base --save

**Warning:** Native Base f*cked us up with versioning. Now we got it running with version native-base: 2.3.2 and react-native 0.49.3

### Searching for the suitable navigation

[React-Navigation](https://github.com/react-community/react-navigation)

* npm install --save react-navigation

**Warning** Watch out for possible errors with [Nesting navigators](https://reactnavigation.org/docs/intro/nesting)

## Don't forget to link

After installing a library with native dependencies (like  you need to link them to get them work properly

* react-native link

## Package structure

Organize the project following something like [Organizing a React-Native Project] (https://medium.com/the-react-native-log/organizing-a-react-native-project-9514dfadaa0)

**Warning** [After react-native v0.49](https://github.com/facebook/react-native/releases/tag/v0.49.0): When creating a new project, generated template has a single, shared entry-point: index.js, instead of RN typical index.ios.js and index.android.js

## Let's hit it

* Add and configuration navigation (create a couple tabs: expenses-screen and incomes-screen)
* Create fixtures like app/fixtures/expenses.js with test data
* Start the expenses/incomes model (Create an ExpensesList component in app/components/expenses/expenses-list.js and import it in expenses-screen)

* Using dynamic lists with native-base and react-navigation we found ourselves in [this mess](https://github.com/GeekyAnts/NativeBase/issues/221), the second tab doesn't render until we scroll the list. It is resolved by adding prop `removeClippedSubviews={false}` to List 🎉

* Wrapping our custom native-base component with a react-native <View> fuck the styles up. Custom styles are needed in that scenario 
`<View style={{flex:1, flexDirection: 'row'}} />`


## Clone it from github

To get it running in your own devices you just need to:

* git clone https://github.com/cecigarcia/everything-is-saving.git
* npm install
* react-native run-ios / react-native run-android (in your previously opened simulator)