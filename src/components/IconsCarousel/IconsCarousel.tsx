import { Grid } from '@mui/material';
import React, { FC, MouseEventHandler, useEffect } from 'react';
import './IconsCarousel.scss';

interface IconsCarouselProps {}

const IconsCarousel: FC<IconsCarouselProps> = () => {
  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
  }, )

  const moveToSelected = (element: "next" | "prev" | HTMLDivElement) => {
    let selectedElement = document.getElementsByClassName("selected")[0];
    let selected;
    if (element == "next") {
      selected = selectedElement.nextElementSibling;
    } else if (element == "prev") {
      selected = selectedElement.previousElementSibling;
    } else {
      selected = element;
    }
  
    const next = selected?.nextElementSibling;
    const prev = selected?.previousElementSibling;
    const prevSecond = prev?.previousElementSibling;
    const nextSecond = next?.nextElementSibling;
  
    selected?.classList.remove(...selected?.classList);
    selected?.classList.add("selected");
  
    prev?.classList.remove(...prev?.classList);
    next?.classList.remove(...next?.classList);
    prev?.classList.add("prev");
    next?.classList.add("next");
  

    nextSecond?.classList.remove(...nextSecond?.classList);
    prevSecond?.classList.remove(...prevSecond?.classList);
    nextSecond?.classList.add("nextRightSecond");
    prevSecond?.classList.add("prevLeftSecond");
  
    document.querySelectorAll("#carousel div:not(.nextSecond):not(.prevSecond):not(.next):not(.prev):not(.selected)").forEach(
      (el) => {
        console.log(el)
        el.classList.remove(...el.classList);
        el.classList.add("hide");
      }
    )
    /*
    $(nextSecond).nextAll().removeClass().addClass('hideRight');
    $(prevSecond).prevAll().removeClass().addClass('hideLeft');
    */
  
  }
  
  const onKeyDown = (e: any) => {
    switch(e.which) {
      case 37: // left
      moveToSelected('prev');
      break;

      case 39: // right
      moveToSelected('next');
      break;

      default: return;
    }
    e.preventDefault();
  }

  const handlePrevClick = () => {
    moveToSelected('prev')
  }

  const handleNextClick = () => {
    moveToSelected('next')
  }
  
  return (
    <Grid container>
      <Grid item xs={12}>
      <div id="carousel">
        <div onClick={e => moveToSelected(e.currentTarget as HTMLDivElement)} className="selected">
          <img src={process.env.PUBLIC_URL + "/assets/img/messenger.jpg"} />
        </div>
        <div onClick={e => moveToSelected(e.currentTarget as HTMLDivElement)} className="next">
          <img src={process.env.PUBLIC_URL + "/assets/img/dancer.jpg"} />
        </div>
        <div onClick={e => moveToSelected(e.currentTarget as HTMLDivElement)} className="hide">
          <img src={process.env.PUBLIC_URL + "/assets/img/gambler.jpg"} />
        </div>
        <div onClick={e => moveToSelected(e.currentTarget as HTMLDivElement)} className="hide">
          <img src={process.env.PUBLIC_URL + "/assets/img/deckhand.jpg"} />
        </div>
        <div onClick={e => moveToSelected(e.currentTarget as HTMLDivElement)} className="hide">
          <img src={process.env.PUBLIC_URL + "/assets/img/merchant.jpg"} />
        </div>
        <div onClick={e => moveToSelected(e.currentTarget as HTMLDivElement)} className="hide">
          <img src={process.env.PUBLIC_URL + "/assets/img/judge.jpg"} />
        </div>
        <div onClick={e => moveToSelected(e.currentTarget as HTMLDivElement)} className="hide">
          <img src={process.env.PUBLIC_URL + "/assets/img/traveler.jpg"} />
        </div>
        <div onClick={e => moveToSelected(e.currentTarget as HTMLDivElement)} className="hide">
          <img src={process.env.PUBLIC_URL + "/assets/img/lady_of_tears.jpg"} />
        </div>
        <div onClick={e => moveToSelected(e.currentTarget as HTMLDivElement)} className="hide">
          <img src={process.env.PUBLIC_URL + "/assets/img/faceless.jpg"} />
        </div>
      </div>
      <div className="buttons">
        <button id="prev" onClick={handlePrevClick}>Prev</button>
        <button id="next" onClick={handleNextClick}>Next</button>
      </div>
      </Grid>      
    </Grid>
  );
}

export default IconsCarousel;
