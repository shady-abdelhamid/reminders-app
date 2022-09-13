import React, { useState } from "react";

interface NewReminderProps {
  onAddReminder: (title: string) => void;
}

function NewReminder({ onAddReminder }: NewReminderProps): JSX.Element {
  const [title, setTitle] = useState("");
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    onAddReminder(title);
    setTitle("");
  };

  return (
    <div className="panel-block">
      <form onSubmit={submitForm}>
        <div className="columns">
          <div className="column is-four-fifths">
            <label htmlFor="title"></label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              type="text"
              className="input is-primary"
            />
          </div>
          <div className="column">
            <button type="submit" className="button is-primary is-rounded is-outlined">
              Add Reminder
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewReminder;
