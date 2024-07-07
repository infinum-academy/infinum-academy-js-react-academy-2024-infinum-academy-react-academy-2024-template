interface StarIconProps {
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
}

export default function StarIcon(props : StarIconProps){
  return (
    <label>
      <input
        type="radio"
        name={props.label}
        value={props.value}
        onChange={props.onChange}
        tabIndex={2}
      ></input>
      <i className="fa-regular fa-star star"></i>
    </label>
  )
}