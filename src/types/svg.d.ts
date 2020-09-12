import '../assets/img/svgOne.svg';
import '../assets/img/svgThree.svg';
import '../assets/img/svgTwo.svg';

declare module '*.svg' { 
  const content: any;
  export default content;
}