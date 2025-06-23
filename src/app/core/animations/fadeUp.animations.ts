import { animate, style, transition, trigger } from '@angular/animations';

export const fadeUp = trigger('fadeUp', [
  transition(
    ':enter',
    [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      animate(
        '{{duration}}ms {{delay}}ms ease-out',
        style({ opacity: 1, transform: 'translateY(0)' })
      ),
    ],
    { params: { delay: 0, duration: 500 } }
  ),
]);
