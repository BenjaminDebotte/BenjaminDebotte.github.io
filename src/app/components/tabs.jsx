"use client"

import React, { useState } from 'react';

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
            className={`${activeTab === child.props.label ? 'border-neutral-500 dark:border-neutral-200' : 'border-neutral-200 dark:border-neutral-700'
              } border  bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4`}
            onClick={e => handleClick(e, child.props.label)}
          >
            {child.props.image}
          </button>
        ))}
      </div>
      <div className="py-4">
        {children.map(child => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </>
  );
};

const Tab = ({ label, children }) => {
  return (
    <div label={label} className="hidden">
      {children}
    </div>
  );
};
export { Tabs, Tab };
