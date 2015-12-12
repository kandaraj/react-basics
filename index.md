---
layout: index
---

### my learnings of React

ReactJS is yet another way of developing Javascript applications, and feel weird if you have been developing Javascript applications using AngularJS, Backbone, Knockout etc..,

*Key takeaway*

- Rethinking the best practices

- ReactJS is all about creating Components :)

- Simple, declarative and very fast because it only changes the DOM that actually need the updates.

- ReactJS does only 'V' part of MVC unlike other JS frameworks which provides MVC frameworks.

- ReactJS does not offer you any network capability out of the box, but it instead relay on other frameworks such as jQuery.

- **Controller?** - Nope - No Controller for ReactJS :)

- **Components** - everything in ReactJS is in Components.

- State, properties, Components => 3 pillars of ReactJS

- Mutable **state** of the application that renders into **html** by **Components**. State data is passed into different Components using **properties**.

- **jsx** is Javascript extension. Components resides in jsx file and transforms into Javascript using familiar libs like Babel.

- Server side calls? Yep, use jQuery.

- Webpack or browserify to transform the jsx into js.

### getting started

To get started, I got into creating a demo app from https://facebook.github.io/react/docs/tutorial.html and ended up something like this https://github.com/kandaraj/react-basics in less than half a day. So I suggest you to get started from here.

I have created a starter-template with Webpack, Webpack-dev-server which bundles up all the Javascript and transforms jsx into js. Ask me.

```
var component = React.createClass({
  render: function() {
    return (
      <div>
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});
```

If see the above code and thinking what the F*#$k is that HTML doing in Javascript, I suggest watch this video

https://youtu.be/KVZ-P-ZI6W4?list=PLb0IAmt7-GS1cbw4qonlQztYV1TAW0sCr

Once you get a hold of the above, there's a nice pluralsight video of ReactJS with Webpack.

https://app.pluralsight.com/library/courses/build-isomorphic-app-react-flux-webpack-firebase/table-of-contents

thinking in ReactJS way and to architect an application, i found this very helpful.

https://facebook.github.io/react/docs/thinking-in-react.html

Playing around JSX? then go here - https://babeljs.io/repl/ - converts jsx into js

To kick start in very quick and dirty, https://jsfiddle.net/reactjs/69z2wepo/ may be this should be a first link?
