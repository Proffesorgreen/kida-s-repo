import React from "react";
const GroupMembersList = () => {
  const groupMembers = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
    { id: 3, name: "Alice Johnson" },
    { id: 4, name: "Bob Smith" },
  ];
  return (
    <div>
      <h2>Group Members</h2>
      <ul>
        {groupMembers.map((member) => (
          <li key={member.id}>{member.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default GroupMembersList;
