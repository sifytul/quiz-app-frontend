import { ChangeEvent } from "react";
import { BiX } from "react-icons/bi";
import { TiTick } from "react-icons/ti";

interface optionType {
  text: string;
  className: string;
  value: number;
  checked: boolean;
  onChange: (
    e: ChangeEvent<HTMLInputElement>,
    quesId: number,
    optionId: number
  ) => void;
}
export const Option = ({
  className,
  text,
  input = true,
  right,
  ...rest
}: any) => {
  return (
    <>
      {input ? (
        <>
          <label className={className}>
            <input type="checkbox" {...rest} />
            <span>{text}</span>
          </label>
        </>
      ) : (
        <>
          <label className={className}>
            {right === "not-checked" ? null : right ? (
              <TiTick style={{ color: "lightgreen" }} />
            ) : (
              <BiX style={{ color: "red" }} />
            )}
            <span>{text}</span>
          </label>
        </>
      )}
    </>
  );
};

export default Option;
