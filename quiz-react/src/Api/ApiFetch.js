import axios from "axios";

export const fetchCategories = async () => {
  try {
    const categoryData = await axios.get("");
    console.log("categoryData", categoryData);
    return categoryData
  } catch (error) {
    console.log("error in fetching categories", error);
  }
};
