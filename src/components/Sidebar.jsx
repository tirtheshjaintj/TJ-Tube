import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "100%" },
      flexDirection: { md: "column" },
      padding:'10px',
      paddingTop:'110px'
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "#F31503",
          color: "#fff",
        }}
        key={category.name}
      >
        <span style={{ color: category.name === selectedCategory ? "white" : "red", marginRight: "15px",textShadow:'0px 0px 2px black' }}>
          {category.icon}
        </span>
        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.9" ,textShadow:'0px 0px 2px black'}}>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Categories;