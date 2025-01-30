export default function TabButton(props) {
  return (
    <li>
        {/* <button>{props.children}</button> */}
        <button onClick={props.onSelect}>{props.children}</button>
    </li>
  );
}