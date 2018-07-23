# reactive-mobx-form  [![npm version](https://badge.fury.io/js/reactive-mobx-form.svg)](https://badge.fury.io/js/reactive-mobx-form)
Forms library for React+MobX application. Under the hood it uses efficient MobX observable mechanizm, that allows tracking changes in form fields and rerender only things that have changed. This makes developer a feeling of working with 2-way databinding and reduces much boilerplate code needed to handle input events in 1-way data flow environment. 

The library is inspired by [Angular Reactive Forms](https://angular.io/guide/reactive-forms) and [Redux Form](http://redux-form.com). It has simalar syntax to Redux Form, because of concept that are neutural to React world. So if you previously had experience with it, it will be easy for you to start using `reactive-mobx-form`. But still one of the goals of this library is to be simple in usage for everyone.

## Documentation
[Examples](https://vict-shevchenko.github.io/reactive-mobx-form) can be found here. Documentation is under development, but you already can see some code and usage

## Important notice
Library is on its initial development stage, is unstable and may contain bugs. Most of all API will change.

If considering a software development as next steps:
1. Make it work <-- we are here
2. Make it right
3. Make it fast

Starting of version `0.2.10` library contains all basic functionallity for handling simple and complex(nested) forms. For now I will focus on its documentation and differnt improvements(performace and code organization). API should left stable for some time. If you are using a library and require any help, please create an issue.

## Motivation
 Working with forms was always a pain in web development. This library is an attempt to solve it for MobX and React users.
 
Goals:
1. Minimal configuration
2. Easy to learn and start with
3. Preferable over own solutions(I hope it to be)

## Capabilities
Its now possible: 
1. Render simple one level forms
2. Validate fields, see **validatorjs** docs
3. Render multi-level fields with `ControlSection` Component
4. Render filed, that contains array of data. Both singe item array, or array of objects.
5. Submit a form

## Dependancy
reactive-mobx-forms depends directly on:
1. [validatorjs](https://github.com/skaterdav85/validatorjs) library for validation. It is small, effective and scalable. 
2. [prop-types](https://github.com/facebook/prop-types)

reactive-mobx-forms peer dependencies are:
1. [react](https://github.com/facebook/react)
2. [mobx](https://github.com/mobxjs/mobx)
3. [mobx-react](https://github.com/mobxjs/mobx-react)

## Know Issues
1. There is a problem when using [preact](https://github.com/developit/preact). For some reason, if inside of componentWillMount any state change is executed(form.refisterField => changes form.values => changes form.validation => changes form.errors, that are observed by Control Component), all lifecicle methods of Component are executed twice. Which then tries to register filed twice. Possible ways of solving can be:
  1. Register field in componentDidMount 
  2. Get rid of componentWillMount and do stuff in constructor
This requires more investigation....

## Installation

```
npm install reactive-mobx-form --save // you can omit --save flag if using npm > 5
```

## Usage

### Step 1
Create and expose to all your application a `formStore` via [Provider](https://github.com/mobxjs/mobx-react#provider-and-inject) from `mobx-react`

```javascript
import { Provider } from 'mobx-react';
import { FormStore } from 'reactive-mobx-form';

const formStore = new FormStore();

render(
  <Provider appStore={appStore} formStore={formStore}> //appStore - is any other store in your application
    <App />
  </Provider>,
  document.getElementById('root')
);
```

### Step 2
Create a form

```javascript
import { reactiveMobxForm, Control } from 'reactive-mobx-form';

class ContactForm extends Component {
  render() {
    const { submit } = this.props;
    
    return (
      <form onSubmit={submit}>
        <div>
          <label htmlFor="name">Name</label>
          <Control name="name" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <Control name="age" component="input" type="number"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const ContactFormReactive = reactiveMobxForm('contacts' [, formDefinition])(ContactForm); // 2nd parameter (formDefinition) is optional. 

export default ContactFormReactive;
```

Detailed explanation of [formDefinition](https://vict-shevchenko.github.io/reactive-mobx-form/#/api/reactiveMobxForm()) object

### Step 3
Use your form and enjoy

```javascript
import ContactForm from './ContactForm';

export default Page extends Component {
  handleSubmit(form) {
    console.log(form)
  }

  render() {
    <div>
      <ContactForm onSubmit={this.handleSubmit.bind(this)} /> // schema={{fieldName: [initialValue, rules]}} optional parameter
    </div>
  }
}
```

## How form submission is happening. 
When you call `props.submit` function that is passed to your form - submission is started. Inside it calls your `submit` function (those you have passed into `onSubmit` parameter) will be called inside of promise(so it may be async).
props.submit` is also async function, that returns a promise, so you can add any required callbacks in `.then` and `.catch` methods.
If your `submit` function returns a `resolved Promise` - `result will be passed to `props.submit.then` method. 
If your `submit` function returns `rejectedPromise` than `form.submitionError` flag is raised and error will be passed to `props.submit.catch` method. 


## Language Support
By default error messages are in English. But you can change them. `reactive-mobx-form` provides you with interface for this. Under the hood it uses [Validatorjs Language Support](https://github.com/skaterdav85/validatorjs#language-support)

### Change language
In the `index.js` or other entry point of your app.

```javascript
import { configureValidator } from 'reactive-mobx-form';

configureValidator({
  language: 'ru'
});
```

You can use MobX autorun funtion in order to execute this code each time app language change. Be carefull as changing the language happens on `Validator` class and effects all forms, even created before language switch.

### Custom attribute names
When display error messages, you may want to modify how field name is displayed in error message. For example if field name is 'user.name' and this field is required. You'd like to see it in error message like 'The user name field is required.'. This may be done via setting custom attribute names(locally) or attribute names formatter function(globally). Same as language support, the functionallity relays on [Validatorjs Custom attribute names](https://github.com/skaterdav85/validatorjs#custom-attribute-names).

### Change custom attribute names globally
In the `index.js` or other entry point of your app.

```javascript
import { configureValidator } from 'reactive-mobx-form';

configureValidator({
  setAttributeFormatter: (attribute) => attribute.replace(/\./g, ' ')
});
```

`setAttributeFormatter` property should be a function, that accepts 1 parmenter field name, processes and returns it. In this example if we had a field name like 'user.name' it will be 'user name' in error message.

### Change custom attribute names per form instance
Here we will benefit from other optional parameter to `reactiveMobxForm` creation function called `validator` .In place where you initialize form

```javascript
const ContactFormReactive = reactiveMobxForm('contacts', {
    validator: {
      attributeNames: { // this option is available per form only
        'users[0]' : 'First User'
      }
      // local setAttributeFormatter is not implemented yet
    }
  })(ContactForm)
```

`attributeNames` is an object that maps field name to attribute in error message. So if we had a field name like 'user.[0]' it will be 'First user' in error message.

## Custom Error Messages
With custom error messages it is possible to completely modify error message for some rule or combination of rule and field

```javascript
const ContactFormReactive = reactiveMobxForm('contacts', {
    validator: {
      errorMessages: {
        'required': 'You forgot to give a :attribute' // this format will be userd for all required fields
        'required.email': 'Without an :attribute we can\'t reach you!' // format for required email field
      }
    }
  })(ContactForm)
```

##[FAQ](https://github.com/vict-shevchenko/reactive-mobx-form/blob/master/docs/FAQ.md)
