# Submission Notes

These notes will be read by HubSpot developers. Drop us a line!

## Given more time, what would you have done differently?

### Things I could have improved

1. **Improve UX for dropdown** - We could make it easier to click on each item of the dropdown. It would also be nice that if after the user selected multiple options that they would display near the button at the top so users could see exactly which options were chosen.
2. **State Management** - The app is still fairly small so I did not need to bloat my app with Redux at this point. I was able to utilize render props to pass around local state to help with readability and reusability. If the app was to get any larger and started to introduce a page for each of the movies you would want to start to introduce a more robust state management system. You could either use HOCs with the Context API or Redux which at this point might offer better handling around async calls to external APIs.
3. **TypeAhead & Elastic Search** - The search could be improved to help the user more when they are typing into the input of the search. It would be nice to allow for a typeahead feature so users can see possible matches once they start typing. Elastic Search would allow us to provide the user with a fast search experience if we had a large enough dataset and also supports fuzzy matching in case the users makes a spelling mistake.
4. **Animations** - We could offer better transitions and animations when the dropdowns are open and the buttons are being clicked. We could also add a hover state to each dropdown item to make it easier for the user to see which item they are hovered over.
5. **Infinite Scroll** - To keep the app as fast as possible I didn't use common libraries such as Isotope or Infinite scroll in my app to not increase the bundle size anymore than it is. If the amount of media being displayed increases we would want to consider an infinite scroll to paginate the amount of movies being displayed. Instead of using the infinite scroll plugin we could implement something similar with the Intersection Observer API which is a newer browser API but native to the browser without a heavy library.
6. **Path & Query params** - We could add query params to the URL of the app when we are filtering and searching for movies to allow the users to bookmark specific filters of movies directly in their browser. It would also allow users to share the app with their friends with a specific filter in the URL and we could filter out the movies automatically once the app is mounted.
7. **Loading indicators & error handling state** - For any of the async calls we are making to an external API where the user might need to wait for the response we would want to show a loading indicator so the user knows the app is loading and has not thrown an error or frozen. Since we're also dealing with an async response having error handling state around if an error is thrown from an API would be helpful to show the user directly on the page that the fetch to the movies has failed and they should take another action or reload the page.
8. **Code splitting** - Since the app is getting to a larger bundle size if we notice any performance issues with the app this would be a good opportunity to introduce code splitting into the app. This wil allow us to serve up smaller chunks of the app as needed to by the user. This could improve the speed and experience for the users trying to search for movies.

## How did you deviate from the directions, if at all, and why?

### Why I deviated from the directions

I decided to use React instead of using EJS. I took the HTML markup that was in EJS files and seperated them in to three main files. Most of the markup is in the filterableContent.jsx file. I moved the last section which was made to setup the media grid and moved this into it's own file so I could seperate these into more managable components. I added a dynamic component for the dropdown components but the outer HTML is the same from the original source files. I decided to not use Gulp and instead setup a config with Webpack to help my productivty. I setup Webpack with Babel to compile my es6 code down to es5 and also installed a new plugin to support class properties for my class based components. I also setup Eslint & Prettier following AirBnb style guide to help with linting and formatting code automatically on save of my files.

## Is there anything else you'd like to let us know?

The React apps that have been made by your team for Acquisition is very inspiring. This is why I ended up building out a React app as I was also looking into other tools HubSpot builds such as the Make your Persona app and was very impressed with the design and the experience that this can offer for marketers. The HubSpot Canvas system is also very impressive, would have been nice to use a nice system for this app as it's very nice as a developer to have this great library that has been developed by very talented designers to make the experience great for the user. Thanks again!
