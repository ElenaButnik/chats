import { AiOutlineClose } from "react-icons/ai";

export const CloseCreateChannel = ({ setIsCreating, setIsEditing }) => (
  <AiOutlineClose
    onClick={() => {
      if (setIsCreating) setIsCreating(false);
      if (setIsEditing) setIsEditing(false);
    }}
  />
);
