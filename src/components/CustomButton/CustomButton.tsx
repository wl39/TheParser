type CustomButtonProps = {
  text: string;
  disabled: boolean;
  onClick: () => void;
};

function CustomButton({ text, disabled, onClick }: CustomButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}

export default CustomButton;
