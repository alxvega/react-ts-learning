import { ReactNode } from "react";

interface Props {
  name: string;
  edad: number;
  children?: ReactNode;
}

const Greeter = ({ name, edad, children }: Props) => {
  return (
    <div>
      <p>
        {name}, {edad}
      </p>
      {children && children}
    </div>
  );
};

export default Greeter;
