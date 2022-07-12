import { useContext } from "react";

import config from "@/config/config";
import { StyleContext } from "@/context/contextType/StyleContext";

export const Header = (): JSX.Element => {
  const { space } = useContext(StyleContext);

  return (
    <>
      <div
        style={{
          padding: `${space}px`,
          backgroundColor: config.UI.theme.palette.primary.main,
          zIndex: 2,
        }}
      ></div>
    </>
  );
};
