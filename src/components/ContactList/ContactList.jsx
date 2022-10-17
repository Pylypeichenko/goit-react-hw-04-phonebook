export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(item => {
        return (
          <li key={item.id}>
            <p>
              {item.name}: {item.number}
            </p>
          </li>
        );
      })}
    </ul>
  );
};
