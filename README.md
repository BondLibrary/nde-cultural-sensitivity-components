Map the content adivice indication component to the nde-record-indications selector in the custom1-module e.g.:

  import { ContentAdviceIndicationComponent } from '../content-advice-indication/content-advice-indication.component';

  // Define the map
  export const selectorComponentMap = new Map<string, any>([

  ['nde-record-indications-bottom',ContentAdviceIndicationComponent],

  ]);
