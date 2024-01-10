The challenge
Your challenge is to build out this GitHub user search app using the GitHub users API and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

View the optimal layout for the app depending on their device's screen size
See hover states for all interactive elements on the page
Search for GitHub users by their username
See relevant user information based on their search
Switch between light and dark themes
Bonus: Have the correct color scheme chosen for them based on their computer preferences. Hint: Research prefers-color-scheme in CSS.
Want some support on the challenge? Join our Slack community and ask questions in the #help channel.

The GitHub users API endpoint is https://api.github.com/users/:username. So, if you wanted to search for the Octocat profile, you'd be able to make a request to https://api.github.com/users/octocat.

Expected behaviour
On first load, show the profile information for Octocat.
Display an error message (as shown in the design) if no user is found when a new search is made.
If a GitHub user hasn't added their name, show their username where the name would be without the @ symbol and again below with the @ symbol.
If a GitHub user's bio is empty, show the text "This profile has no bio" with transparency added (as shown in the design). The lorem ipsum text in the designs shows how the bio should look when it is present.
If any of the location, website, twitter, or company properties are empty, show the text "Not Available" with transparency added (as shown in the design).
Website, twitter, and company information should all be links to those resaources. For the company link, it should remove the @ symbol and link to the company page on GitHub. For Octocat, with @github being returned for the company, this would lead to a URL of https://github.com/github.








:root {
  --lm-bg: #f6f8ff;
  --lm-bg-content: #fefefe;
  --lm-text: #4b6a9b;
  --lm-text-alt: #2b3442;
  --lm-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.2);
  --lm-shadow-inactive: 0px 16px 30px -10px rgba(0, 0, 0, 0.2);
  --lm-icon-bg: brightness(100%);
  /* Btn */
  --btn: #0079ff;
  --btn-hover: #60abff;
}