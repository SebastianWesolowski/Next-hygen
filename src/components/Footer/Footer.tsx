import config from "@/config/config";

export const Footer = (): JSX.Element => (
  <footer
    className='mt-auto h-24  bg-current py-5 text-white'
    style={{ backgroundColor: config.UI.theme.palette.primary.main }}
  ></footer>
);
