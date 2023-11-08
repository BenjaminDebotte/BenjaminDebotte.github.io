"use client"

import React, { useState } from 'react';
import ArrowIcon from './arrow-icon';


const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState((children.find((c) => c.props.defaultSelected) ?? children[children.length - 1]).props.label);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <>
      <div className="mt-8 mb-2 grid grid-flow-row xl:grid-cols-4 grid-cols-2 gap-4 w-full">
        {children.map(child => (
          <button
            key={child.props.label}
            className={`${activeTab === child.props.label ? 'border-neutral-500 dark:border-neutral-200 border-2' : 'border-neutral-200 dark:border-neutral-700 hover:border-neutral-700 hover:dark:border-neutral-200 dark:border-neutral-700'
              } transition-all border  bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4`}
            onClick={e => handleClick(e, child.props.label)}
          >
            {child.props.image}
          </button>
        ))}
      </div>
      <div className="mt-5 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded justify-between px-3 py-4 w-full" >
        {children.map(child => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>
              <p className="italic">
                {child.props.text}
              </p>
              <a
                className="transition-all [&>svg]:hover:rotate-90 [&>svg]:duration-150 [&>svg]:hover:ease-in-out mt-6 flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
                rel="noopener noreferrer"
                href={child.props.url} target="_blank">
                <ArrowIcon />

                <p className="h-7 ml-2 hover:underline lowercase">{child.props.label}</p>
              </a>
            </div>;
          }
          return null;
        })}
      </div>
    </>
  );
};

const TabSection = () => {

  return (<></>)
}

export { Tabs, TabSection };
