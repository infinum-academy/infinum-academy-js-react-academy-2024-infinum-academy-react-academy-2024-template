interface StarIconProps {
  label: string;
  value: number;
  onBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function StarIcon(props: StarIconProps){
  return (
    <label>
      <input
        type="radio"
        name={props.label}
        value={props.value}
        onBlur={props.onBlur}
        onChange={props.onChange}
        tabIndex={2}
      ></input>
      <i className="fa-regular fa-star star"></i>
    </label>
  )
}