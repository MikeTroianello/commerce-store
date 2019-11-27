import React from 'react';

import './collection-preview.sass';

export default function CollectionPreview({ title, items }) {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items.map((item, i) => (
          <div key={i}>{item.name}</div>
        ))}
      </div>
    </div>
  );
}
