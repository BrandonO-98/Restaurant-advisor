import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { Autocomplete } from '@react-google-maps/api';
// How to setup non-absolute paths
import { ReactComponent as Burger } from '../../icons/menu.svg';
import { ReactComponent as Cross } from '../../icons/menu-close.svg';

// 3 props {img, array of objs, }
export default function Navbar({
  links, logo,
}) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [formData, setFormData] = React.useState({
    search: '',
  });

  return (
    // should this be width of screen or full
    <nav className="z-[1] grid max-w-2xl justify-self-center justify-items-center h-16 bg-indigo-600 fixed top-10 rounded-3xl opacity-90 mx-2 lg:w-10/12 lg:max-w-[80rem]">
      {/* navbar */}
      <div className="relative grid grid-cols-3 h-full w-full justify-items-center items-center px-12 lg:max-w-[65rem]">
        {/* navbar-container */}
        <div className="flex items-center h-full w-full">
          {/* logo-container */}
          <a href="/">
            <img
              src={logo.url}
              alt={logo.brand}
              className="h-16 object-cover"
            />
          </a>
          <h1 className="text-white pl-4 text-3xl font-bold">
            <a href={links[0].url}>{logo.brand}</a>
          </h1>
        </div>
        <form className="grid h-full items-center w-full">
          <input
            type="text"
            placeholder="Location..."
            name="search"
            value={formData.search}
            onChange={(event) => setFormData(
              { ...FormData, search: event.target.value },
            )}
            className="h-8 rounded-3xl text-center"
          />
        </form>

        <ul className={click ? 'bg-indigo-600 absolute h-40 w-full -left-0 top-20 rounded-3xl grid grid-rows-2 ease-in duration-500 lg:grid-rows-none lg:grid-cols-2 lg:static lg:h-20 lg:ml-12'
          : 'bg-indigo-600 absolute h-40 w-full -left-[1000px] top-20 grid grid-rows-2 ease-in duration-500 lg:grid-rows-none lg:grid-cols-2 lg:static lg:h-full lg:ml-12'}
        >
          {links.map((link, index) => (
            <li
              key={link.label}
              className="grid h-full self-center items-center justify-items-center p-1"
            >
              <a
                href={link.url}
                className={index === (links.length - 1) ? 'grid w-80 h-10 bg-blue text-white items-center justify-items-center border-2 border-white rounded-3xl lg:w-full'
                  : 'grid w-80 h-10 bg-white text-blue items-center justify-items-center border-2 border-blue rounded-3xl lg:w-full'}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="grid bg-indigo-600 h-full w-15 lg:hidden items-center justify-center"
          onClick={handleClick}
        >
          {click ? <Cross className="bg-indigo-600 w-full h-15 stroke-white" /> : <Burger className="bg-indigo-600 w-full h-15 stroke-white" />}
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
      url: 'https://ca.yahoo.com',
      label: "let's go",
    },
    {
      url: 'https://duckduckgo.com/',
      label: 'Randomize',
    },
  ],
  logo: {
    url: 'https://flowbite.com/docs/images/logo.svg',
    brand: 'Foodie',
  },
};
