interface Props {
  label: string;
  name: string;
  value: string;
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({
  label,
  name,
  value,
  type,
  placeholder,
  onChange,
}: Props) => {
  return (
    <>
      <label>{label}</label>
      <input
        name={name}
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      />
    </>
  );
};

export default InputField;
