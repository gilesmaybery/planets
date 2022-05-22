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

To start:
    npm i


