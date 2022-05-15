import users from "./users";

const notifications = users.map((user) => {
  return {
    id: users.indexOf(user),
    message: `${user} ha comenzado a seguirte`,
  };
});

export default notifications;
