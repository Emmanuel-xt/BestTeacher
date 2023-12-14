'use client'

import { useState, useEffect } from "react";

import ExperienceCard from "./ExperienceCard";

const ExperienceCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout flex flex-col">
      {data.map((postn) => (
        <ExperienceCard
          key={postn._id}
          post={postn}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      console.log('data =', data)
      setPosts(data);
    };

    fetchPosts();
  }, []);
  return (
    <section className="feed">
      {}
      <form action="" className="relative w-full flec-center">
        <input
          type="text"
          name=""
          placeholder="If up we get up to 100 stories , we would make the filter button functional"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
          id=""
          disabled
        />
      </form>

      <ExperienceCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;