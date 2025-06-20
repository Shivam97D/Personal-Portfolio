import { createContext, useState, useContext, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./notification.css";

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const timeouts = useRef({});

  const notify = ({ type, title, message }) => {
    const id = crypto.randomUUID();
    setNotifications((prev) => {
      const updated = [...prev, { id, type, title, message }];
      return updated.slice(-4);
    });

    timeouts.current[id] = setTimeout(() => {
      dismiss(id);
    }, 4000);
  };

  const dismiss = (id) => {
    clearTimeout(timeouts.current[id]);
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const pauseTimer = (id) => clearTimeout(timeouts.current[id]);
  const resumeTimer = (id) => {
    timeouts.current[id] = setTimeout(() => dismiss(id), 2000);
  };

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}
      <div className="notification-wrapper">
        <AnimatePresence>
          {notifications.map((note) => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className={`notification-container ${note.type}`}
              onMouseEnter={() => pauseTimer(note.id)}
              onMouseLeave={() => resumeTimer(note.id)}
            >
              <span className="emoji">{getEmoji(note.type)}</span>
              <div className="text-content">
                <div className="title">{note.title}</div>
                <div className="message">{note.message}</div>
              </div>
              <button className="close-btn" onClick={() => dismiss(note.id)}>
                &times;
              </button>
              <motion.div
                className="progress-bar"
                initial={{ width: "100%" }}
                animate={{ width: 0 }}
                transition={{ duration: 4, ease: "linear" }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </NotificationContext.Provider>
  );
};

const getEmoji = (type) => {
  switch (type) {
    case "success":
      return "✔️";
    case "error":
      return "❌";
    case "info":
      return "ℹ️";
    case "warning":
      return "⚠️";
    default:
      return "🔔";
  }
};
