import Card from "../component/UI/Card"
import './UserList.css';

export default function UserList(props) {

  return (
    <>
      <Card>
        <ul className='user-list__lists'>
          {props.items.map((item) => (
            <li key={item.id}>{`${item.username} (${item.age} years old)`}</li>
          ))}
        </ul>
      </Card>
    </>
  );
}