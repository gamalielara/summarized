import {faSadTear} from '@fortawesome/free-solid-svg-icons/faSadTear';
import {faSadCry} from '@fortawesome/free-solid-svg-icons/faSadCry';
import {faFaceFrown} from '@fortawesome/free-solid-svg-icons/faFaceFrown';
import {faGrinTears} from '@fortawesome/free-solid-svg-icons/faGrinTears';
import {faSmileBeam} from '@fortawesome/free-solid-svg-icons/faSmileBeam';
import {faGrinSquint} from '@fortawesome/free-solid-svg-icons/faGrinSquint';

export const MoodDictionary = {
  1: faSadCry,
  2: faSadTear,
  2.5: faFaceFrown,
  3.5: faSmileBeam,
  4: faGrinSquint,
  5: faGrinTears,
} as const;

export const MoodNames = {
  1: 'Awful',
  2: 'Sad',
  2.5: 'Meh',
  3.5: 'Joy',
  4: 'Great',
  5: 'Rad',
} as const;
