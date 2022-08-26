import { GrAddCircle } from "react-icons/gr";

export const AddChannel = ({
  setCreateType,
  setIsCreating,
  setIsEditing,
  setToggleContainer,
  type,
}) => (
  <GrAddCircle
 
    onClick={() => {
      setCreateType(type);
      setIsCreating((prevState) => !prevState);
      setIsEditing(false);
      if (setToggleContainer) setToggleContainer((prevState) => !prevState);
    }}
  />
);
