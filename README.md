Map the custom components to the relevent nde selectors in the custom1-module e.g.:
```
import { FirstAustraliansIndicationComponent } from '../first-australians-indication/first-australians-indication.component';
import { ContentAdviceIndicationComponent } from '../content-advice-indication/content-advice-indication.component';
import { CulturalAdviceComponent } from '../cultural-advice/cultural-advice.component';

// Define the map
export const selectorComponentMap = new Map<string, any>([

['nde-record-indications-top',FirstAustraliansIndicationComponent],
['nde-record-indications-bottom',ContentAdviceIndicationComponent],
['nde-footer',CulturalAdviceComponent],

]);
```
