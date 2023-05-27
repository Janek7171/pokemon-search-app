import React from 'react';
const Wrapper = (props) => {
  return (
    <div className="bg-cyan-100 flex w-full h-full justify-center">
      {props.children}
    </div>
  );
};

export default Wrapper;
