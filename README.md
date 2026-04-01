# Anonymous Feedback Collector

A full-stack web application that allows users to create secure, anonymous rooms to receive honest feedback from peers. Built as a demonstration of MERN-stack architecture.

## 🚀 Tech Stack
* **Frontend:** React.js, Vite, React Router
* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas (Mongoose)

## 💡 Features
* **Instant Room Generation:** One-click creation of unique, random room IDs.
* **Anonymous Submissions:** Users can submit feedback without logging in or revealing their identity.
* **Real-time Dashboard:** Creators can view all feedback associated with their specific room ID.
* **RESTful API:** Clean separation of concerns between the React client and Express server.

## 🛠️ How to Run Locally

1. Clone the backend repository and add your MongoDB URI to a `.env` file.
2. Run `npm install` and `node server.js` to start the backend on port 5000.
3. Clone this frontend repository.
4. Run `npm install` and `npm run dev` to start the Vite server.
