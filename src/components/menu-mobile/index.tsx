import { Dispatch, SetStateAction } from "react";

type ItemMenu = {
  name: string;
  href: string;
}

type Props = {
  itemsMenu: ItemMenu[];
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const MenuMobile = ({itemsMenu, setIsMenuOpen}: Props) => {
  return (
    <div className='md:hidden bg-white py-4 px-6 fixed top-16 z-10 w-full shadow-md max-h-[calc(100vh-4rem)] overflow-y-auto'>
      <nav className='flex flex-col space-y-4'>
      {itemsMenu.map((item) => (
            <a
              key={item.name}
              href={`#${item.href}`}
              className='font-medium'
              onClick={() => {
                setIsMenuOpen(false);
              }}>
              {item.name}
            </a>
          ))}
      </nav>
    </div>
  );
};

export default MenuMobile;
