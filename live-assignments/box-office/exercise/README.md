# Box office - junior frontend technical test

The purpose of this technical interview is to assess your problem-solving ability, your technical communication and your ability to write clear and well-structured code.

## The Task

### Duration ⏰ 1 hour max

### Description

For this task, we would like you to display a list of shows by fetching the shows from an endpoint and displaying them in the browser.
Here's what the page should look like:

![React Component](./assets/react-component.jpg)

### Acceptance criteria

- [ ] Shows should be displayed on three columns for desktop screens
- [ ] Each show card should include the show image, title and click through to the correct booking link
- [ ] "SOLD OUT" shows should be greyed out with a label of "SOLD OUT" in place of the "BOOK NOW" button. You should also **not** be able to click on these tiles
- [ ] Show tiles on the same row should all be equal height

## Available endpoints

### List all showings - `/api/shows/all-open` `GET`

You will need to use the `/api/shows/all-open` endpoint, which serves the array of show objects. On each object, you will find a `see_tickets_url_infos` property that stores an array of booking links. If this array is empty, then that show should appear as "SOLD OUT". If there are items in the array, then you should pick the url with a subdomain of `tktsonline.seetickets.com` as the booking link and if that is not available fallback to using the `officiallondontheatre.seetickets.com` url. You can access this data through the provided development server.

## Setup ⚙️

### Install dependencies

1. Go to the root of the repository.
1. Run `npm install`

### Check your server 🍽️

Now check your development server is working.

Start the development server using the script in the `package.json` at the root of the repo.

- Call the `/api` endpoint to check it's working correctly
- Call the `/api/shows/all-open` to check it's working correctly

### Check your client 💻

Start your frontend application using the script in the `package.json` at the root of this repo.

- Check the frontend development server is working.
