# Real-Time Chat App 💬

## 👋 About This Project
Hi! This is a **Real-Time Chat Application** built with Firebase Realtime Database.  
Users can join different chat rooms and communicate **instantly** with each other.

## ✨ Features
- Real-time messaging (no page refresh needed)  
- Multiple chat rooms support  
- Custom username for each user  
- Clean and simple user interface  
  

## 🛠️ Technologies Used
- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Firebase Realtime Database  
- **Libraries:** Firebase SDK 8.10.0  

## 📂 Project Structure
```
chat-app/
│
├── index.html          # Main HTML page
├── style.css           # Styling
├── app.js              # Chat logic
├── firebase.js         # Firebase config
└── screenshots/        # App screenshots
```

## 🎥 Demo Video
![Demo](./demo.gif) 


## 📥 How to Run Locally

1. **Clone this repository:**  
   ```bash
   git clone https://github.com/prassi05/chat-app.git
   cd chat-app
   ```

2. **Setup Firebase:**  
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable **Realtime Database**
   - Copy your Firebase configuration

3. **Configure the app:**  
   - Open `firebase.js`
   - Replace with your Firebase credentials:
   ```javascript
   var firebaseConfig = {
   apiKey: "AIzaSyAJz2kWQPdYx_LJAsdsz_EhPW_-VpT_Bvg",
  authDomain: "chat-app-6885f.firebaseapp.com",
  databaseURL: "https://chat-app-6885f-default-rtdb.firebaseio.com",
  projectId: "chat-app-6885f",
  storageBucket: "chat-app-6885f.firebasestorage.app",
  messagingSenderId: "91846399775",
  appId: "1:91846399775:web:5ed18f130880199bdb422a"
};
   ```

4. **Run the app:**  
   - Open `index.html` in your browser, OR
   - Use a local server:
   ```bash
   python -m http.server 5500
   ```
   - Visit `http://localhost:5500`

## 📖 How to Use

1. **Enter your name** in the username field
2. **Enter a room name** (create new or join existing)
3. **Type your message** and click **Send**
4. **Switch rooms** by changing the room name

## 🔮 Future Enhancements
- [ ] User authentication
- [ ] Message timestamps
- [ ] Online users list
- [ ] Private messaging
- [ ] File sharing
- [ ] Emoji support
- [ ] Dark mode



