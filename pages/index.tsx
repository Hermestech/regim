import * as React from 'react';
import { Hero } from '@/components/templates/hero';
import { Features } from '@/components/templates/features';
import { Tools } from '@/components/templates/tools';
import { Footer } from '@/components/molecules/footer';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { setScrollPosition } from '@/store/actions';
import { Link, Element } from 'react-scroll';

export default function Home() {
  const scrollPosition = useSelector((state: RootState) => state.scroll.position);
  const dispatch = useDispatch();

  const handleScroll = (event: React.WheelEvent) => {
    if (event.deltaY > 0) {
      // Scrolling down
      if (scrollPosition === 'top') {
        dispatch(setScrollPosition('features'));
      } else if (scrollPosition === 'features') {
        dispatch(setScrollPosition('tools'));
      } else if (scrollPosition === 'tools') {
        dispatch(setScrollPosition('footer'));
      }
    } else {
      // Scrolling up
      if (scrollPosition === 'footer') {
        dispatch(setScrollPosition('tools'));
      } else if (scrollPosition === 'tools') {
        dispatch(setScrollPosition('features'));
      } else if (scrollPosition === 'features') {
        dispatch(setScrollPosition('top'));
      }
    }
  };

  return (
    // Agrega el evento onWheel al componente principal
    <div onWheel={handleScroll}>
      <Element name="top">
        <Link to="hero" smooth={scrollPosition === 'features'} duration={500}>
          <Hero />
        </Link>
      </Element>
      <Element name="features">
        <Link to="tools" smooth={scrollPosition === 'tools'} duration={500}>
          <Features />
        </Link>
      </Element>
      <Element name="tools">
        <Link to="footer" smooth={scrollPosition === 'footer'} duration={500}>
          <Tools />
        </Link>
      </Element>
      <Element name="footer">
        <Footer />
      </Element>
    </div>
  );
}
