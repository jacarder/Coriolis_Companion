import { Button, Card, CardActions, CardContent, Container, Grid, Paper, Typography } from '@mui/material';
import React, { FC, MouseEventHandler, useEffect, useState } from 'react';
import { IIcon } from '../../interfaces/icon';
import IconsService from '../../services/IconsService';
import './IconsCarousel.scss';
interface IconsCarouselProps {}

const IconsCarousel: FC<IconsCarouselProps> = () => {
  class DraggingEvent {
    target: Element | undefined;
    constructor(target = undefined) {
      this.target = target;
    }
    
    event(callback: (event: any) => void) {
      let handler: any;
      
      this.target?.addEventListener("mousedown", e => {
        e.preventDefault()
        
        handler = callback(e)
        
        window.addEventListener("mousemove", handler)
        
        document.addEventListener("mouseleave", clearDraggingEvent)
        
        window.addEventListener("mouseup", clearDraggingEvent)
        
        function clearDraggingEvent() {
          window.removeEventListener("mousemove", handler)
          window.removeEventListener("mouseup", clearDraggingEvent)
        
          document.removeEventListener("mouseleave", clearDraggingEvent)
          
          handler(null)
        }
      })
      /* Doesn't work well TODO remove or optimize
      this.target?.addEventListener("touchstart", e => {
        handler = callback(e)
        
        window.addEventListener("touchmove", handler)
        
        window.addEventListener("touchend", clearDraggingEvent)
        
        document.body.addEventListener("mouseleave", clearDraggingEvent)
        
        function clearDraggingEvent() {
          window.removeEventListener("touchmove", handler)
          window.removeEventListener("touchend", clearDraggingEvent)
          
          handler(null)
        }
      })
      */
    }
    
    // Get the distance that the user has dragged
    getDistance(callback: (event: {x: number, y: number} | null) => void) {
      function distanceInit(e1: MouseEvent | TouchEvent) {
        let startingX: number, startingY: number;
        
        if ("touches" in e1) {
          startingX = e1.touches[0].clientX
          startingY = e1.touches[0].clientY
        } else {
          startingX = e1.clientX
          startingY = e1.clientY
        }
        
  
        return function(e2: MouseEvent | TouchEvent) {
          if (e2 === null) {
            return callback(null)
          } else {
            
            if ("touches" in e2) {
              return callback({
                x: e2.touches[0].clientX - startingX,
                y: e2.touches[0].clientY - startingY
              })
            } else {
              return callback({
                x: e2.clientX - startingX,
                y: e2.clientY - startingY
              })
            }
          }
        }
      }
      
      this.event(distanceInit)
    }
  }
  
  class CardCarousel extends DraggingEvent {
    container: any;
    controllerElement: Element | undefined;
    cards: any;
    centerIndex: number;
    cardWidth: number;
    xScale: any;
    constructor(container: any, controller = undefined) {
      super(container)
      
      // DOM elements
      this.container = container
      this.controllerElement = controller
      this.cards = container.querySelectorAll(".card")
      // Carousel data
      this.centerIndex = (this.cards.length - 1) / 2;
      this.cardWidth = this.cards[0].offsetWidth / this.container.offsetWidth * 100
      this.xScale = { x: undefined, y: undefined};
      
      // Resizing
      window.addEventListener("resize", this.updateCardWidth.bind(this))
      
      if (this.controllerElement) {
        (this.controllerElement as Element).addEventListener("keydown", this.controller.bind(this))      
      }
  
      
      // Initializers
      this.build()
      
      // Bind dragging event
      super.getDistance(this.moveCards.bind(this))
    }
    
    updateCardWidth() {
      this.cardWidth = this.cards[0].offsetWidth / this.container.offsetWidth * 100
      
      this.build()
    }
    
    build(fix = 0) {
      for (let i = 0; i < this.cards.length; i++) {
        const x = i - this.centerIndex;
        const scale = this.calcScale(x)
        const scale2 = this.calcScale2(x)
        const zIndex = -(Math.abs(i - this.centerIndex))
        
        const leftPos = this.calcPos(x, scale2)
       
        
        this.xScale[x] = this.cards[i]
        
        this.updateCards(this.cards[i], {
          x: x,
          scale: scale,
          leftPos: leftPos,
          zIndex: zIndex
        })
      }
    }
    
    
    controller(e: any) {
      const temp = {...this.xScale};
        
        if (e.keyCode === 39) {
          // Left arrow
          for (let x in this.xScale) {
            const newX = (parseInt(x) - 1 < -this.centerIndex) ? this.centerIndex : parseInt(x) - 1;
  
            temp[newX] = this.xScale[x]
          }
        }
        
        if (e.keyCode == 37) {
          // Right arrow
          for (let x in this.xScale) {
            const newX = (parseInt(x) + 1 > this.centerIndex) ? -this.centerIndex : parseInt(x) + 1;
  
            temp[newX] = this.xScale[x]
          }
        }
        
        this.xScale = temp;
        
        for (let x in temp) {
          const scale = this.calcScale(x),
                scale2 = this.calcScale2(x),
                leftPos = this.calcPos(x, scale2),
                zIndex = -Math.abs(+x)
  
          this.updateCards(this.xScale[x], {
            x: x,
            scale: scale,
            leftPos: leftPos,
            zIndex: zIndex
          })
        }
    }
    
    calcPos(x: any, scale: any) {
      let formula;
      
      if (x < 0) {
        formula = (scale * 100 - this.cardWidth) / 2
        
        return formula
  
      } else if (x > 0) {
        formula = 100 - (scale * 100 + this.cardWidth) / 2
        
        return formula
      } else {
        formula = 100 - (scale * 100 + this.cardWidth) / 2
        
        return formula
      }
    }
    
    updateCards(card: any, data: any) {
      if(card){
        if (data.x || data.x == 0) {
          card.setAttribute("data-x", data.x)
        }
        
        if (data.scale || data.scale == 0) {
          card.style.transform = `scale(${data.scale})`
    
          if (data.scale == 0) {
            card.style.opacity = data.scale
          } else {
            card.style.opacity = 1;
          }
        }
       
        if (data.leftPos) {
          card.style.left = `${data.leftPos}%`        
        }
        
        if (data.zIndex || data.zIndex == 0) {
          if (data.zIndex == 0) {
            card.classList.add("highlight")
          } else {
            card.classList.remove("highlight")
          }
          
          card.style.zIndex = data.zIndex  
        }
        // Add blur to other cards
        /*
        if(card.style.zIndex == -1 || card.style.zIndex == -2) {
          if(card.style.zIndex == "-1") {
            card.classList.add("blur-1");
          } else if(card.style.zIndex == "-2") {
            card.classList.add("blur-2");
          } 
        } else {
          card.classList.remove("blur-1");
          card.classList.remove("blur-2");
        }
        */
      }
      if(data.x == 0) {
        //  TODO remove this timeout
        setTimeout(() => {
          let icon = document.querySelector("[data-x='0']");
          if(icon) {
            setIcon(IconsService.getIconData(+icon.id))
          }
        })
      }
    }
    
    calcScale2(x: any) {
      let formula;
     
      if (x <= 0) {
        formula = 1 - -1 / 5 * x
        
        return formula
      } else if (x > 0) {
        formula = 1 - 1 / 5 * x
        
        return formula
      }
    }
    
    calcScale(x: any) {
      const formula = 1 - 1 / 5 * Math.pow(x, 2)
      
      if (formula <= 0) {
        return 0 
      } else {
        return formula      
      }
    }
    
    checkOrdering(card: any, x: any, xDist: any) {    
      const original = parseInt(card.dataset.x)
      const rounded = Math.round(xDist)
      let newX = x
      
      if (x !== x + rounded) {
        if (x + rounded > original) {
          if (x + rounded > this.centerIndex) {
            
            newX = ((x + rounded - 1) - this.centerIndex) - rounded + -this.centerIndex
          }
        } else if (x + rounded < original) {
          if (x + rounded < -this.centerIndex) {
            
            newX = ((x + rounded + 1) + this.centerIndex) - rounded + this.centerIndex
          }
        }
        
        this.xScale[newX + rounded] = card;
      }
      
      const temp = -Math.abs(newX + rounded)
      
      this.updateCards(card, {zIndex: temp})
  
      return newX;
    }
    
    moveCards(data: any) {
      let xDist;
      if (data != null) {
        this.container.classList.remove("smooth-return")
        xDist = data.x / 250;
      } else {
        this.container.classList.add("smooth-return")
        xDist = 0;
  
        for (let x in this.xScale) {
          this.updateCards(this.xScale[x], {
            x: x,
            zIndex: Math.abs(Math.abs(+x) - this.centerIndex)
          })
        }       
      }
  
      for (let i = 0; i < this.cards.length; i++) {
        const x = this.checkOrdering(this.cards[i], parseInt(this.cards[i].dataset.x), xDist),
              scale = this.calcScale(x + xDist),
              scale2 = this.calcScale2(x + xDist),
              leftPos = this.calcPos(x + xDist, scale2)
        
        
        this.updateCards(this.cards[i], {
          scale: scale,
          leftPos: leftPos
        })
      }
    }
  }
  const [carousel, setCarousel] = useState<CardCarousel>();
  const [icon, setIcon] = useState<IIcon>()
  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    moveToSelected()
  },[])

  const moveToSelected = () => {
    let selected;
    const cardsContainer = document.querySelector(".card-carousel");
    const cardsController = document.querySelector(".card-carousel + .card-controller")
    

    
   const carousel = new CardCarousel(cardsContainer)
   setCarousel(carousel);
  }
  
  const onKeyDown = (e: any) => {
    switch(e.which) {
      case 37: // left
      //moveToSelected('prev');
      break;

      case 39: // right
      //moveToSelected('next');
      break;

      default: return;
    }
    e.preventDefault();
  }

  const handlePrevClick = () => {
    carousel?.moveCards({x: 150, y: 0})
    carousel?.moveCards(null)
    //moveToSelected('prev')
  }

  const handleNextClick = () => {
    carousel?.moveCards({x: -150, y: 0})
    carousel?.moveCards(null)
    //moveToSelected('next')
  }
  
  return (
    <Grid container>
      <Grid item xs={12}>
        <div className="container">
          <div className="card-carousel">
            <img src={process.env.PUBLIC_URL + "/assets/img/judge.jpg"} className="card" id="6" />
            <img src={process.env.PUBLIC_URL + "/assets/img/traveler.jpg"} className="card" id="7" />
            <img src={process.env.PUBLIC_URL + "/assets/img/lady_of_tears.jpg"} className="card" id="8" />
            <img src={process.env.PUBLIC_URL + "/assets/img/faceless.jpg"} className="card" id="9" />
            <img src={process.env.PUBLIC_URL + "/assets/img/messenger.jpg"} className="card" id="1" />
            <img src={process.env.PUBLIC_URL + "/assets/img/dancer.jpg"} className="card" id="2" />
            <img src={process.env.PUBLIC_URL + "/assets/img/gambler.jpg"} className="card" id="3" />
            <img src={process.env.PUBLIC_URL + "/assets/img/deckhand.jpg"} className="card" id="4" />
            <img src={process.env.PUBLIC_URL + "/assets/img/merchant.jpg"} className="card" id="5" />
            {/*
            <div className="card" id="1">
              <div className="image-container"></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, explicabo!</p>
            </div>
            <div className="card" id="2">
              <div className="image-container"></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, explicabo!</p>
            </div>
            <div className="card" id="3">
              <div className="image-container"></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, explicabo!</p>
            </div>  
            <div className="card" id="4">
              <div className="image-container"></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, explicabo!</p>
            </div>
            <div className="card" id="5">
              <div className="image-container"></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, explicabo!</p>
            </div>
            */}
          </div>
          <a href="#" className="visuallyhidden card-controller">Carousel controller</a>
        </div>
      </Grid>
      <Grid item xs={12} 
        display="flex" 
        justifyContent="space-evenly"
        marginBottom="20px" 
        paddingRight="10%" 
        paddingLeft="10%"
      >
        <Button variant="contained" color="secondary" onClick={handlePrevClick}>PREV</Button>
        <Button variant="contained" color="secondary" onClick={handleNextClick}>NEXT</Button>
      </Grid>
      <Grid item xs={12}>
        {/** TODO move this to own component */}
        <Container>
          <Card>
            <CardContent>
              <Typography variant='h5' color="text.secondary" gutterBottom>
                {icon?.name}
              </Typography>
              <Typography variant="body2">
                <div>
                  <b>Other Names:</b> 
                  <ul>
                    {icon?.otherNames.map((name, index) => <li key={`${name}-${index}`}>{name}</li>)}
                  </ul>
                  </div>
                <div><b>Description:</b> <div>{icon?.description}</div></div>
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Grid>     
    </Grid>
  );
}

export default IconsCarousel;
