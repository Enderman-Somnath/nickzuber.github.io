import React from 'react';
import SEO from '../components/seo';
import HeaderComponent from '../components/sections/Header';
import AboutComponent from '../components/sections/About';
import NewsComponent from '../components/sections/News';
import ProjectsComponent from '../components/sections/Projects';
import WritingsComponent from '../components/sections/Writings';
import ReadingsComponent from '../components/sections/Readings';
import FooterComponent from '../components/sections/Footer';
import '../components/layout.css';

function DefaultRoute () {
  React.useEffect(() => {
    console.log("%cUp for a challenge? %cMaybe you'll win a prize — isn't that exciting?","color: #ff4298","color: #5694f1");
    console.log("%cIf you solve it, email or tweet me the answer! %cDecode the following message:","color: #2cb673","color: #fe4a49");
    console.log("%ctr >>> '[\\040-\\054*37][\\056-\\075*22]3' '?-[N' '&$[-(8-['$-S'ARK <<< LC_CTYPE/C","color: #999");
  }, []);

  return (
    <>
      <SEO keywords={['nick', 'zuber', 'zubes', 'software', 'engineer', 'javascript']} />
      <HeaderComponent />
      <AboutComponent />
      <NewsComponent />
      <ProjectsComponent />
      <WritingsComponent />
      <ReadingsComponent />
      <FooterComponent />
    </>
  );
}

export default DefaultRoute;
