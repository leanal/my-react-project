function Notifications({ notifications }) {
    if (notifications.length > 0) {
      return <p>You have {notifications.length} notifications today!</p>;
    }
    return null;
}

export default Notifications;