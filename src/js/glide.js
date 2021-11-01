import Glide from '@glidejs/glide'
import { Controls } from '@glidejs/glide/dist/glide.modular.esm'

export function slideIndex(){
new Glide('.glide',{
    type: 'carousel',
  startAt: 0,
  perView: 3, 
  focusAt: 'center',
  gap: 5,
  breakpoints: {
    1024: {
      perView: 2
    },
    600: {
      perView: 2
    }
  },
  autoplay: 4000
}).mount(
  {Controls}
)

}