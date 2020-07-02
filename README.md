# Meticulist

A single page productivity application that uses a framework of boards, lists, and cards to give easily-accessible visual structure to projects and tasks.

### [Live Link](https://meticulist.herokuapp.com/#/)

![Meticulist basics](https://meticulist-seeds.s3-us-west-1.amazonaws.com/Meticulist_basics_2.png)

Meticulist is lovingly modeled after [Trello](www.trello.com) and is based on the same [kanban](https://en.wikipedia.org/wiki/Kanban_(development))-style approach to process management and improvement.

## Technologies

* Backend: Ruby on Rails, PostgreSQL
* Frontend: React, Redux
* Hosting: Heroku
* Additional technologies:
  * [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd): adds drag and drop functionality
  * [throttle-debounce](https://www.npmjs.com/package/throttle-debounce): limits execution rate of event handlers
  * [Unsplash API](https://unsplash.com/developers): provides access to Unsplash's free high-quality image database

## Features
### User Authentication

Users sign-up or sign-in via a straightforward interface with dynamic error-handling to get started with Meticulist.

Passwords are secured with [bcrypt](https://rubygems.org/gems/bcrypt) and are not stored.

### Boards

The central top-level element of Meticulist is the board. Boards are designed to contain all information about a particular project.

![Board index](https://meticulist-seeds.s3-us-west-1.amazonaws.com/SiteAssets/Board+index.png)

Upon sign-in, users are presented with all of the boards they have access to along with the option to create a new board. Board creation happens via a modal form that prompts the user to assign a title, an optional description, and an optional background photo to their new board.

![Board create](https://meticulist-seeds.s3-us-west-1.amazonaws.com/SiteAssets/Board+create.png)

### Lists & Cards

Selecting or creating a board leads to Meticulist's main interface, where users can define tasks (cards) for their board and group them into lists.

Lists and cards can be easily reorganized thanks to react-beautiful-dnd's drag and drop functionality, allowing for a smooth and intuitive user interface.

![Drag and drop](https://meticulist-seeds.s3-us-west-1.amazonaws.com/SiteAssets/Kapture+2020-07-01+at+2.35.38.gif)

Behind the scenes, we've taken 2 key steps to ensure better performance and user experience:

***

**1. Limiting the number of database calls after a drag**

There are a number of ways to accomplish relative ordering, but many of them require many database calls whose successes are intertwined. For instance, if a card only stores a reference to its own relative index in a list, it's unwieldy to save a new location on the board. We have to make calls to save the new indices of every card that shifts during the drag (GIF 1). On the other hand, if a card stores references to the cards that come directly before and after it, we gain some performance: This time the worst case scenario involves 5 calls: the moving card itself, its former neighbors, and its new neighbors (GIF 2).

Meticulist does a little better than this by abstracting the ordering away from the cards and to the lists that contain them. Each list has a reference to the ids of the cards contained within it and their relative order, while each card only has a reference to its list's id. Now the worst case scenario involves 3 calls: the card itself, its former list, and its new list (GIF 3).

`3 gifs of reordering highlighting the number of saves`

In addition to the card saving its new list id, we edit each list by making this call:
```javascript
export const reorderCards = (cardOrder, listId) => (
    $.ajax({
        method: "PATCH",
        url: `/api/lists/${listId}`,
        data: {list: {card_order: JSON.stringify(cardOrder)}}
    })
);
```

***

**2. Optimistically updating the frontend**

While a normal thunk action makes a database call, waits for confirmation, and then returns a response to be patched into our frontend state, waiting for that process to finish after every drag can be jarring to user experience. Meticulist therefore does not wait for backend confirmation- immediately after a user finishes a drag, we dispatch at most four total actions: three to save the results to the backend, and one to update the frontend with the _assumed_ results of that drag.

Only after a failed backend save will Meticulist render an error and attempt to re-sync the frontend with the backend state.

```javascript
export const reorderTwoLists = (cardOrder1, listId1, cardOrder2, listId2) => (dispatch) => {
    dispatch(receiveTwoLists(cardOrder1, listId1, cardOrder2, listId2))
    ListAPI.reorderCards(cardOrder1, listId1)
        .fail(errors => dispatch(receiveListErrors(errors.responseJSON)))
    ListAPI.reorderCards(cardOrder2, listId2)
        .fail(errors => dispatch(receiveListErrors(errors.responseJSON)))
};
```

***

### Card Attributes (Description, Due Date, & Comments)

Every card is a repository of information for one particular task. Users can add a detailed description, a due date, and any number of comments to each of their cards.

These fields are referenced below the title of the card in the board show view, and users can see & change all of a card's information in that card's dedicated card show modal view.

<img src="https://meticulist-seeds.s3-us-west-1.amazonaws.com/SiteAssets/Card+show.png" width="800">

Due dates will dynamically change color based on how soon each card is due, both on the card show modal and in the indicator on the overall board view. If the card is due within 24 hours, the due date background will appear 🟡yellow🟡, while overdue cards will be marked with 🔴red🔴

<img src="https://meticulist-seeds.s3-us-west-1.amazonaws.com/SiteAssets/Due+dates.png" width="350">

## Future Updates

Meticulist's roadmap includes the following:
* Sharing boards with other Meticulist users
* Card attachments
* 'Tutorial' modal with basic Meticulist instructions
