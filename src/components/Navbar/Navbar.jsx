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
    <nav className="grid w-screen justify-items-center h-20 bg-black sticky">
      {/* navbar */}
      <div className="relative grid grid-cols-2 h-20 w-full justify-items-center items-center lg:max-w-6xl">
        {/* navbar-container */}
        <div className="flex items-center h-20 lg:mr-40">
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
        <ul className={click ? 'absolute h-96 w-full -left-0 top-20 grid grid-rows-4 ease-in duration-500 lg:mr-32 lg:grid-rows-none lg:grid-cols-4 lg:static lg:h-20'
          : 'absolute h-96 w-full -left-full top-20 grid grid-rows-4 ease-in duration-500 lg:mr-32 lg:grid-rows-none lg:grid-cols-4 lg:static lg:h-20'}
        >
          {links.map((link) => (
            <li key={link.label} className="grid h-full lg:h-20">
              <a
                href={link.url}
                className="bg-black box-border grid text-white h-full items-center justify-items-center ease-in duration-100
                hover:text-emerald hover:border-b-4 hover:border-white lg:h-20"
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
      label: 'Google Homepage',
    },
    {
      url: 'https://bing.com',
      label: 'Bing Homepage',
    },
    {
      url: 'https://ca.yahoo.com',
      label: 'Yahoo Homepage',
    },
    {
      url: 'https://duckduckgo.com/',
      label: 'Duckduckgo Homepage',
    },
  ],
  logo: {
    url: 'https://flowbite.com/docs/images/logo.svg',
    alt: 'Alt text for image',
  },
};
