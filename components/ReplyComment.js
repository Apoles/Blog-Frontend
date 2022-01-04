import React from "react";

export const ReplyComment = () => {
  return (
    <div>
      <form className="ui reply form">
        <div className="field">
          <textarea></textarea>
        </div>
        <div className="ui blue labeled submit icon button">
          <i className="icon edit" onClick={() => {}}></i> Add Reply
        </div>
      </form>
    </div>
  );
};
