# Answers to Questions

## 1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById selects a single element using its id. It returns only one element.

getElementsByClassName selects elements using class name. It returns a live HTMLCollection, which updates automatically when DOM changes.

querySelector selects the first matching element using CSS selectors.

querySelectorAll selects all matching elements and returns a static NodeList.

---

## 2. How do you create and insert a new element into the DOM?

First, we create an element using document.createElement().

Example:
const div = document.createElement("div");

Then we add content or attributes.

Finally, we insert it into the DOM using appendChild() or append().

Example:
document.body.appendChild(div);

---

## 3. What is Event Bubbling? And how does it work?

Event bubbling is a process where an event starts from the target element and moves upward to its parent elements.

For example, if we click a button inside a div, the click event first runs on the button, then on the div, then on the body.

---

## 4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is a technique where we attach a single event listener to a parent element instead of multiple child elements.

It works because of event bubbling.

It is useful because:
- Improves performance
- Handles dynamically added elements
- Reduces code repetition

---

## 5. Difference between preventDefault() and stopPropagation()

preventDefault() prevents the default behavior of an element.

Example: Prevent form submission.

stopPropagation() stops the event from bubbling to parent elements.

They solve different problems.

# Job-Application-Tracker
This project is a Job Application Tracker web application built using HTML, CSS, and Vanilla JavaScript.  Users can track their job applications by marking them as Interview or Rejected. The dashboard dynamically updates the total number of jobs, interview count, and rejected count.  The design is fully responsive for mobile devices.
## Live Site Link
([Add your Netlify/Vercel link here](https://rejowan-git.github.io/Job-Application-Tracker/))
## Features

- Dashboard with Total, Interview, and Rejected counts
- Tab system (All, Interview, Rejected
- Dynamic job filtering
- Status update (Not Applied → Interview → Rejected)
- Toggle between Interview and Rejected
- Delete functionality
- Empty state message with icon
- Fully responsive design

## Technologies Used

- HTML
- CSS (Vanilla)
- JavaScript (Vanilla)
