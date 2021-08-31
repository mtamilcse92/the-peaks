import React from 'react';
import Image from '../common/Image';
import Spinner from '../common/Spinner';
import Dropdown from '../common/Dropdown';
import Bookmark from '../common/Bookmark';
import ContentCard from '../common/ContentCard';
import { useStories } from '../../hooks/stories'

{/* <Image imageURL="https://www.industrialempathy.com/img/remote/ZiClJf-1280w.avif" /> */}
const Home = () => {
    const { data } = useStories()
    
    return (
      <div className="App">
        <Image />
        <Spinner isVisible />
        <Dropdown />
        <Bookmark label="ADD BOOKMARK" onClick={() => {}} />
        <ContentCard description="Hellooo..." title="Test title client" subtitle="helloooo" />
      </div>
    );
}

export default Home;
