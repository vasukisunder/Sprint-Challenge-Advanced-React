- [ ] Why would you use class component over function components (removing hooks from the question)?

One main reason to be able to use class components is that functional components are still fairly new, and many jobs or projects most likely will still depend on class component knowledge. You can also use React lifecycle methods only in class components and not in functional components. 

- [ ] Name three lifecycle methods and their purposes.

componentDidMount() is a method that is called when the component mounts and is ready. You can set state here or initiate an API call.

componentDidUpdate() is called when the app is updated. This method can be used to update the DOM when the state or props change.

componentWillUnmount is called right before the component unmounts. This is a place where you can "clean up" and set variables back to their initial state, clear caches, or cancel an API call.

- [ ] What is the purpose of a custom hook?

The main purpose of custom hooks is to allow you to group together similar chunks of code and be able to reuse them easily, therefore making your code more DRY. 

- [ ] Why is it important to test our apps?

Testing is an important part of software development because it ensures that products work smoothly, logic functions the way it is supposed to, and bugs are caught early on and minimized before reaching the final production state. It also helps you consider edge cases, helps document the code, and is an overall important safety net to have in order to avoid expensive mistakes.