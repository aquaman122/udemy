import './GoalList.css';

export default function GoalList(props) {
  
  return (
    <>
      <ul className="GoalList-ul">
        {props.items.map((item) => (
          <li
          className="GoalList-li"
            key={item.id}
          >{item.title}
          </li>
        ))}
      </ul>
    </>
  );
}