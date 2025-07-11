* run the command 'npm install'
* create a .env.local file in the root dir of AI-Resume-Builder.
## the .env.local should have:
 * VITE_GOOGLE_AI_API_KEY -> should have the google gemini api key (for the ai functionality of the project to work)
  * VITE_STRAPI_API_KEY -> should have your strapi's full access api key (strapi config for postgres is also available in this repo)
  * VITE_API_BASE_URL -> will have the base url where content is to be rendered (mainly used for poduction i suppose)
  * VITE_CLERK_PUBLISHABLE_KEY -> clerk api key (for authentication of the user)
