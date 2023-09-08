# React Context and State Management Example

In this React project, I've created a simple example of how to manage and share state across different components using React Context. Let's break down what we've learned from this project:

## App.jsx

In `App.jsx`, I've set up the main application component. Here are the key takeaways:

1. **Context Creation**: I import `useState` and `createContext` from React. `AppContext` is created using `createContext()` and exported to be used by other components.

2. **State Management**: I use the `useState` hook to create a piece of state called `name`, which is initialized with the value "zed". This state represents the name I want to share across components.

3. **Context Provider**: I wrap the entire application inside `AppContext.Provider`, providing the `name` state as a value to be accessed by child components.

## ChangeName.jsx

In `ChangeName.jsx`, I've created a component responsible for changing the name. Here's what I've learned:

1. **Context Usage**: I import `useContext` and the `AppContext` from the `App.jsx` file. This allows me to access the `setName` function from the context.

2. **Local State**: I create a local state called `newName` using the `useState` hook to manage the input field's value.

3. **Input Handling**: I set up an input field and use the `setNewName` function to update the `newName` state as the user types.

4. **Updating Context**: When the "Submit" button is clicked, the `setName` function is called from the context, passing in the new name stored in `newName`.

## Middle.jsx

`Middle.jsx` is a simple functional component. I pass `props` as an argument but don't actually use it. Here's what I've learned:

1. **Component Props**: I can pass `props` to components, but in this case, I'm not using them. It's a placeholder for demonstrating the use of props.

## Top.jsx

In `Top.jsx`, I create another functional component. Here's what I've learned:

1. **Context Usage**: I import `useContext` and the `AppContext` from `App.jsx` to access the `name` state. This allows me to display the name in the component.

2. **Nested Component**: I include the `ChangeName` component, allowing users to change the name from within the `Top` component.

## Overall Project Flow

- When the application loads, the initial name "zed" is displayed in the `Top` component.
- The `ChangeName` component provides an input field where users can enter a new name.
- When the user clicks the "Submit" button in the `ChangeName` component, it updates the `name` state in the `App.jsx` component using the `setName` function from the context.
- This change in the `name` state is reflected in both the `Top` and `Middle` components, as they access and display the `name` value from the same context.
