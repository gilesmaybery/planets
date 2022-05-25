Thoughts when starting:

When reading the spec I envisioned 2 panels alongside one another, taking up half the screen real estate each. The left hand-side will be a list, which allows the user to select from any of the 9 planets, cough, "Pluto's a planet.....in this app".
The right hand side will be a 3D view of the planets, it would be cool to have them orbiting the sun in the correct configuration but for this app we will just line them up in a row.
The planets will be created to reusable components, as they will just be sphere's with different textures/bump maps applied to them (Thought it could look cool with some nice textures/bumpmaps).
If a user selects a planet, the panel on the left will switch to a detail view of the planet.
This will correpspond to an alternate view/component that will replace the entire 2D list on the left, it will display information and images retrieved from the given API for e.g -> Mars images and metadata:

    https://images-api.nasa.gov/search?q=mars&media_type=image)

The planet that has been selected in the 3D panel should do some animation to show that it has been selected, I'd like to do a slight zoom and "bobbing" up and down.
The user should be able to go back via a button in the detail view or by deselecting/selecting another planet.

I am not planning on spending too much time on the stlying component of the panels, most of my time/effort will be focused on the 3D rendering and creation of a reusable "Planet" component and the "Detail View" when a planet is selected.

In the detail view, I will use the API calls - I will only make the call once a user has selected a planet. 
I will have to create an interface for the incoming data and create a reusable component that can render the retrieved images/text.




Planets App:

    A 2 panel application that displays a 2D and 3D view alongside one another.
    The user can select either view to show a more detailed view of the planet along with some relevant images.

To install:
    npm i

To start:
    npm start


##Things I'd Add:

1) Fix Texture/Bump map loading so that the planets look awesome.
2) Finish StateManager for state sharing between components -
   Could have done a few things, like callbacks to parent classes, a state management library, etc
3) Styling
4) Write tests for the API class - Could also convert it into a functional class - easier for testing
5) General code cleanup - Could neaten some components up and
   maybe think about how I'd restructure the component hiearchy
6) Function descriptions for every function 
i.e.
This really helps with intellisense and keeps thing understandable/readable.
///
/@name doSomething
/@desc Does something with something
/@param x : Number - The number of x's
///
   
##Concluding Remarks:

This took me a little longer than I wanted, there was a little bit of a hurdle using three-js/fibre as I had to learn Three and Fibre. I did'nt want to use PIXI as I thought it would be cool to show I could master the basics of these 2 new libraries to me.
I also spent a whack of time messing with texture loading and bump maps, but in the end I decided to go with some proceduarlly generated objects, as I couldn't get the textures to load correctly.
In plain threejs I'd be able to accomplish this rather easily it seems, but Fibre through a few curve balls and I think with a bit more time with it I'd be able to load some cool textures/bump maps to make my planets more realistic.

I've added a mix of Js/TS files. I struggled a bit with Fibre and ts, not exactly sure why but I didn't want to spend too much time on getting this working.

I added a few abstraction classes for neatness and to show how I'd probably approach the problem should it be a "proper" app or task. 

I hope the Typescript examples display that I am comforatble within the language, I implemented a singleton StateManager which could be used as a single source of truth for state. (Definitely not complete)

I did not complete the detailed view but I did show examples of how I'd type(Interfaces) out the incoming data. 

Overall I really enjoyed learning Three and Three-Fibre, Fibre is a really cool abstraction for Three.
I believe I would thrive in such a coding environment.