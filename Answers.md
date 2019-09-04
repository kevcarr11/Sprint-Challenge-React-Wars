# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

⁃ ReactJS is a library that provides developers with the ability to build large scale applications effectively.
⁃ ReactJS solves the problem of overloading the DOM with too many event changes by creating the virtual DOM. We simply tell the virtual DOM which elements and state (data) to render to the actual DOM, and it will do so, taking a lot of pressure off our browsers.


2. What does it mean to think in react?

⁃ Learning how to separate your UI into components, where each component matches one piece of your data model and has one responsibility.

3. Describe state.

⁃The heart of every React component is its “state”, an object that determines how that component renders & behaves.

4. Describe props.

⁃ Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) which are kinda like a global variable or object

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

⁃ A side effect is anything that effects something outside the scope of the function being executed. We can sync these to prop changes by using the useEffect hook and placing it inside of the component function.
