// Add an answer should:
// * Open a modal window:
// * The modal window should include information on the product and question which are being answered
// * Should include inputs for "Answer, Nickname" "Email" as well as a "Submit" button and "Upload your Photos"
// * Uploaded photos should be displayed as thumbnails
// * Clicking on the thumbnail should make an overlay of that image, which can be exited by clicking x
// * Only 5 images should be able to be uploaded
// * The upload an image button should disappear when there are 5 images.
// * Submit should query the API with the relevant information
// * Submit should not query if any Answer, Nickname, or Email is blank.
// * Submit should not query if the email is not in the correct email format.
// * Submit should not query if the images are invalid or cannot be uploaded.
// * Submit should close the window if the query is successful
// * Submit should alert an error message if the query cannot be made, explaining why the query isn't available.