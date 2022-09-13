import React from "react";
import Reminder from "../models/reminder";

interface ReminderListProps {
  items: Array<Reminder>;
  onRemoveReminder: (id: number) => void;
}
function ReminderList({ items, onRemoveReminder }: ReminderListProps) {
  return (
    <article className="panel">
      <p className="panel-heading">Reminders</p>
      {items.map((item) => (
        <div className="panel-block" key={item.id}>
          {item.title}
          <button onClick={() => onRemoveReminder(item.id)} className="button is-danger is-outlined is-rounded mx-2">Delete</button>
        </div>
      ))}
    </article>
  );
}

export default ReminderList;
