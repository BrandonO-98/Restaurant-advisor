import React, { useState } from 'react';
import PropTypes from 'prop-types';
// How to setup non-absolute paths
import { ReactComponent as Burger } from '../../icons/menu.svg';
import { ReactComponent as Cross } from '../../icons/menu-close.svg';

// 3 props {img, array of objs, }
export default function Navbar({
  links, logo,
}) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    // should this be width of screen or full
    <nav className="grid w-screen justify-items-center h-20 bg-black sticky top-0">
      {/* navbar */}
      <div className="relative grid grid-cols-2 h-full w-full justify-items-center items-center lg:max-w-6xl">
        {/* navbar-container */}
        <div className="flex items-center h-full lg:mr-40">
          {/* logo-container */}
          <a href="/">
            <img
              src={logo.url}
              alt={logo.alt}
              className="h-20 object-cover"
            />
          </a>
          <h1 className="text-white pl-4 font-bold">
            <a href={links[0].url}>{logo.alt}</a>
          </h1>
        </div>
        <ul className={click ? 'bg-black absolute h-96 w-full -left-0 top-20 grid grid-rows-4 ease-in duration-500 lg:mr-32 lg:grid-rows-none lg:grid-cols-4 lg:static lg:h-20'
          : 'bg-black absolute h-96 w-full -left-full top-20 grid grid-rows-4 ease-in duration-500 lg:mr-32 lg:grid-rows-none lg:grid-cols-4 lg:static lg:h-full'}
        >
          {links.map((link, index) => (
            <li
              key={link.label}
              className={index === (links.length - 1) ? 'grid h-full self-center items-center justify-items-center'
                : 'grid h-full'}
            >
              <a
                href={link.url}
                className={index === (links.length - 1) ? 'grid w-80 h-10 bg-blue text-white items-center justify-items-center border-2 border-white rounded-3xl lg:w-full'
                  : 'box-border grid text-white h-full items-center justify-items-center ease-in duration-100 hover:text-blue hover:border-b-4 hover:border-white lg:h-full'}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="grid bg-black h-full w-15 lg:hidden items-center justify-center"
          onClick={handleClick}
        >
          {click ? <Cross className="w-full h-15 stroke-white" /> : <Burger className="w-full h-15 stroke-white" />}
        </button>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  links: PropTypes.arrayOf({ url: PropTypes.string, label: PropTypes.string }),
  logo: PropTypes.string,
};

Navbar.defaultProps = {
  links: [
    {
      url: 'https://google.com',
      label: 'Google',
    },
    {
      url: 'https://bing.com',
      label: 'Bing',
    },
    {
      url: 'https://ca.yahoo.com',
      label: 'Yahoo',
    },
    {
      url: 'https://duckduckgo.com/',
      label: 'Duckduckgo',
    },
  ],
  logo: {
    url: 'https://flowbite.com/docs/images/logo.svg',
    alt: 'Alt text for image',
  },
};
