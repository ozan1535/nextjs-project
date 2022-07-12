import classes from "./getMessages.module.css";

export default function GetMessages({ messages }) {
  console.log(messages);
  const data = messages.messages;
  return (
    <>
      {data.map((message) => (
        <div className={classes.container} key={message._id}>
          <div className={classes.title}>
            <h4>{message.title}</h4>
          </div>
          <hr />
          <div className={classes.message}>{message.message}</div>
        </div>
      ))}
    </>
  );
}
