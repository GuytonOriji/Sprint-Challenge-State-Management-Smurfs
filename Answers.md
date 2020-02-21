 (' !!!-- ' = answer tab)

What problem does the context API help solve?


!!!-- it helps solve the issue from child components not being able to pass data back up towards the parent components


In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

!!!-- ok store is a place where most of the Applications state data is held/changed,
!!!-- an action is used to communicate to the reducer and tell it what type of actions is taken place
!!!-- an reducer is used to make changes to the state based on the type of action its supposed to do(devs choice)


What is the difference between Application state and Component state? When would be a good time to use one over the other?

!!!-- Application state is good to use through out the app especially when its huge and more complex.
				OR
!!!-- Component State is good to use throught parent and there child components to share state data in both directions of the components flow(parents to childs and the otherway aroud) (down up) & (up down)

Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

!!!-- Redux-thunk intercepts our action function an places dispatch in its right place every time its ran, because we have dispatch kinda foward through the action function like so "const funcName => dispatch => "

What is your favorite state management system you've learned and this sprint? Please explain why!

context api and because its alot more smaller and siimple but when it comes to me coding a huge site I will be using redux hands down 
