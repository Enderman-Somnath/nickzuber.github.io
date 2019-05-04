import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import {keyframes} from '@emotion/core';
import {Link} from 'gatsby';
import {Document, Page} from 'react-pdf';
import SEO from '../components/seo';
import pathToResume from '../pdf/NickZuberResume.pdf';
import '../components/resume.css';

const ZOOM_STEP = 0.1;
const DELAY = 2500;

const AnimationOpacity = {
  High: '#eee',
  Low: '#ccc'
};

const fadePulseKeyframes = keyframes`
  0% {
    background: ${AnimationOpacity.High};
  }
  50% {
    background: ${AnimationOpacity.Low};
  }
  100% {
    background: ${AnimationOpacity.High};
  }
`;

const Container = styled('div')({
  position: 'relative',
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  background: '#525659'
});

const LoadingContainer = styled('div')({
  position: 'relative',
  display: 'block',
  background: '#fff',
  margin: '60px 0',
  animation: `${fadePulseKeyframes} 1.25s ease infinite`,
  width: 800,
  height: 1035
}, ({width}) => ({
  width,
  height: width * 1.294
}));

const Header = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'fixed',
  zIndex: 99,
  background: 'rgb(50, 54, 57)',
  boxShadow: 'rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px, rgba(0, 0, 0, 0.2) 0px 3px 1px -2px',
  top: 0,
  left: 0,
  right: 0,
  height: 48,
  display: 'flex',
  fontFamily: 'sans-serif',
  alignItems: 'center',
  fontSize: 13,
  paddingLeft: 24,
  paddingRight: 24,
  fontWeight: 500,
  color: 'rgb(241, 241, 241)',
  'span': {
    width: 140,
    textAlign: 'center'
  }
}, ({isActive}) => ({
  transition: 'all 300ms ease-in-out',
  transform: !isActive ? 'translateY(-50px)' : null,
}));

const ZoomControls = styled('div')({
  position: 'fixed',
  zIndex: 99,
  right: 40,
  bottom: 48
});

const ZoomButton = styled('div')({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 36,
  width: 36,
  background: 'rgb(242, 242, 242)',
  color: '#616161',
  fontFamily: 'sans-serif',
  fontWeight: 300,
  boxShadow: 'rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px, rgba(0, 0, 0, 0.2) 0px 3px 1px -2px',
  fontSize: 24,
  lineHeight: '1px',
  outline: 'none',
  border: 'none',
  marginTop: 10,
  borderRadius: '100%',
  cursor: 'pointer',
}, ({offset = 1, isActive}) => ({
  transition: 'all 300ms ease',
  transitionDelay: `${offset * 0.075}s`,
  transform: !isActive ? 'translateX(90px)' : null
}));

const ZoomLink = styled(Link)({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 36,
  width: 36,
  background: 'rgb(242, 242, 242)',
  color: '#616161',
  fontFamily: 'sans-serif',
  fontWeight: 300,
  boxShadow: 'rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px, rgba(0, 0, 0, 0.2) 0px 3px 1px -2px',
  fontSize: 24,
  lineHeight: '1px',
  outline: 'none',
  border: 'none',
  marginTop: 10,
  borderRadius: '100%',
  cursor: 'pointer',
}, ({offset = 1, isActive}) => ({
  transition: 'all 300ms ease',
  transitionDelay: `${offset * 0.075}s`,
  transform: !isActive ? 'translateX(90px)' : null
}));

function DefaultRoute () {
  const timer = React.useRef();
  const [zoom, setZoom] = React.useState(1);
  const [isActive, setActive] = React.useState(true);
  let width = 0;

  if (typeof window !== 'undefined') {
    width = window.document.querySelector('body').getBoundingClientRect().width;
  }

  const defaultWidth = Math.min(width * 0.8, 800);
  const zoomedWidth = defaultWidth * zoom;

  function setZoomInBounds (newZoom) {
    setZoom(Math.min(Math.max(newZoom, 0.4), 2));
  }

  function onEnter () {
    clearTimeout(timer.current);
    setActive(true);
  }

  function onExit () {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setActive(false), DELAY);
  }

  function onOver () {
    if (!isActive) setActive(true)
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setActive(false), DELAY);
  }

  return (
    <>
      <SEO keywords={['nick', 'zuber', 'zubes', 'software', 'engineer', 'javascript']} />
      <Container
        onMouseOver={onOver}
        onTouchStart={onEnter}
        onTouchEnd={onExit}
      >
        <Header isActive={isActive}>
          <span style={{textAlign: 'left'}}>NickZuberResume.pdf</span>
          <span style={{
            letterSpacing: 2,
            fontSize: 14,
          }}>1/1</span>
          <span style={{textAlign: 'right'}}>&nbsp;</span>
        </Header>
        <Document
          file={pathToResume}
          loading={<LoadingContainer width={zoomedWidth} />}
        >
          <Page
            className="pdf-page"
            width={zoomedWidth}
            pageNumber={1}
          />
        </Document>
        <ZoomControls>
          <ZoomLink
            offset={3}
            isActive={isActive}
            style={{marginBottom: 24}}
            className="exit"
            to="/"
          >×</ZoomLink>
          <ZoomButton
            offset={2}
            isActive={isActive}
            className="plus"
            onClick={() => setZoomInBounds(zoom + ZOOM_STEP)}
          >+</ZoomButton>
          <ZoomButton
            offset={1}
            isActive={isActive}
            className="minus"
            onClick={() => setZoomInBounds(zoom - ZOOM_STEP)}
          >–</ZoomButton>
        </ZoomControls>
      </Container>
    </>
  );
}

export default DefaultRoute;