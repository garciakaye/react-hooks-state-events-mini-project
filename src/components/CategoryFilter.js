import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  
  // const catArr = categoryData.map((cat) => {
  //   return (
  //     <button key={cat}>
  //       {cat}
  //     </button>
  //   )
  // })
  
  const catBtns = categories.map((category) => {
    const catName = category === selectedCategory ? "selected" : null;
    return (
      <button
      key={category}
      className={catName}
      onClick={() => onSelectCategory(category)}>
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {catBtns}
    </div>
  );
}

export default CategoryFilter;
