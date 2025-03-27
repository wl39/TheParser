type CustomButtonProps = {
  text: string;
};

function CustomButton({ text }: CustomButtonProps) {
  return <button>{text}</button>;
}

export default CustomButton;
