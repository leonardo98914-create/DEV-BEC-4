function Message({ message }) {
  if (!message) return null;

  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
}

export default Message;